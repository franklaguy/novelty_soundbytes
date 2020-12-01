import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { upload } from '/both/methods/images.methods';
import { Subject, Subscription, Observable } from "rxjs";
import { MeteorObservable } from "meteor-rxjs";
import { Thumb, Image } from '/both/models/image.model';
import { Thumbs, Images } from '/both/collections/images.collection';

@Component({
	selector: 'available-upload',
	templateUrl: require('./available-upload.component.html').default,
})

export class AvailableUploadComponent implements OnInit {
	fileIsOver: boolean = false;
	uploading: boolean = false;
	filesArray: string[] = [];
	files: Subject<string[]> = new Subject<string[]>();
	thumbsSubscription: Subscription;
	thumbs: Observable<Thumb[]>;
	@Output() onFile: EventEmitter<string> = new EventEmitter<string> ();

	constructor() {}

	ngOnInit() {
		this.files.subscribe((filesArray) => {
			MeteorObservable.autorun().subscribe(() => {
				if (this.thumbsSubscription) {
					this.thumbsSubscription.unsubscribe();
				}

				this.thumbsSubscription = MeteorObservable.subscribe("thumbs", filesArray).subscribe(() => {
					this.thumbs = Thumbs.find({
						originalStore: 'images',
						originalId: {
							$in: filesArray
						}
					}).zone();
				});
			});
		});
	}

	fileOver(fileIsOver: boolean): void {
		this.fileIsOver = fileIsOver;
	}

	onFileDrop(file: File): void {
		this.uploading = true;

		upload(file).then((result) => {
			this.uploading = false;
			this.addFile(result);
		})
		.catch((error) => {
			this.uploading = false;
		})
	}

	addFile(file) {
		this.filesArray.push(file._id);
		this.files.next(this.filesArray); 
		this.onFile.emit(file.url);
	}

	reset() {
		this.filesArray = [];
		this.files.next(this.filesArray);
	}
}