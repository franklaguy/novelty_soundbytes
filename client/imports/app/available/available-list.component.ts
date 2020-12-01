import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';
import { PaginationService } from 'ng2-pagination';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { InjectUser } from 'angular2-meteor-accounts-ui'; 
import 'rxjs/add/operator/combineLatest';
import { Available } from '/both/collections/available.collection';
import { AvailableModel } from '/both/models/available.model';

interface Pagination {
	limit: number;
	skip: number;
}

interface Options extends Pagination {
	[key: string]: any
}

@Component({
	selector: 'available-list',
	templateUrl: require('./available-list.component.html').default,
})

@InjectUser('user')
export class AvailableListComponent implements OnInit, OnDestroy {
	available: Observable<AvailableModel[]>;
	availableSub: Subscription;
	pageSize: Subject<number> = new Subject<number>();
	curPage: Subject<number> = new Subject<number>();
	nameOrder: Subject<number> = new Subject<number>();
	optionsSub: Subscription;
	availableSize: number = 0;
	autorunSub: Subscription;
	name: Subject<string> = new Subject<string>();
	user: Meteor.User;
	imagesSubs: Subscription;

	constructor(
    private paginationService: PaginationService
  ) {}

	ngOnInit() {
		this.imagesSubs = MeteorObservable.subscribe('images').subscribe();

		this.optionsSub = Observable.combineLatest(
			this.pageSize,
			this.curPage,
			this.nameOrder,
			this.name
		).subscribe(([pageSize, curPage, nameOrder, name]) => {
			const options: Options = {
				limit: pageSize as number,
				skip: ((curPage as number) - 1) * (pageSize as number),
				sort: { name: nameOrder as number }
			};

			this.paginationService.setCurrentPage(this.paginationService.defaultId(), curPage as number);

			if (this.availableSub) {
				this.availableSub.unsubscribe();
			}

			this.availableSub = MeteorObservable.subscribe('available', options, name).subscribe(() => {
				this.available = Available.find({}, {
					sort: {
						name: nameOrder
					}
				}).zone();
			});
		});

		this.paginationService.register({
      id: this.paginationService.defaultId(),
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.availableSize,
    });

		this.pageSize.next(10);
		this.curPage.next(1);
		this.nameOrder.next(1);
		this.name.next('');

		this.autorunSub = MeteorObservable.autorun().subscribe(() => {
			this.availableSize = Counts.get('numberOfAvailable');
			this.paginationService.setTotalItems(this.paginationService.defaultId(), this.availableSize);
		});
	}

	removeAvailable(available: AvailableModel): void {
		Available.remove(available._id);
	}

	search(value: string): void {
		this.curPage.next(1);
		this.name.next(value);
	}

	onPageChanged(page: number): void {
		this.curPage.next(page);
	}

	changeSortOrder(nameOrder: string): void {
		this.nameOrder.next(parseInt(nameOrder));
	}

	isOwner(availableModel: AvailableModel): boolean {
		return this.user && this.user._id === availableModel.owner;
	}

  logout() {
    Meteor.logout();
  }

	ngOnDestroy() {
		this.availableSub.unsubscribe();
		this.optionsSub.unsubscribe();
		this.autorunSub.unsubscribe();
		this.imagesSubs.unsubscribe();
	}
}