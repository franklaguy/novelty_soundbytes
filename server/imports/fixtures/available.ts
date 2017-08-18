import { Available } from '/both/collections/available.collection';
import { AvailableModel } from '/both/models/available.model';

export function loadAvailable() {
	if(Available.find().cursor.count() === 0) {
		const available: AvailableModel[] = [
			{'name': 'Barnes & Nobles',
		   'description': 'Available on Nook and Paperback',
		   'links': { 
		   		digital: 'https://www.barnesandnoble.com/w/six-strange-tales-individual-eleven/1107867933?ean=2940013454415#productInfoTabs', 
		   		paperback: 'https://www.barnesandnoble.com/w/six-strange-tales-individual-eleven/1107867933?ean=9781538025369',
		   		hardcover: '' 
		   	},
		   	'reviews': 'https://www.barnesandnoble.com/w/six-strange-tales-individual-eleven/1107867933?ean=2940013454415#productInfoTabs',
		 	  public: true},
			{'name': 'Amazon',
		   'description': 'Available on Kindle',
		   'links': { 
		   		digital: 'https://www.amazon.com/Six-Strange-Tales-Individual-Eleven-ebook/dp/B006GRZ0D8/ref=sr_1_3?s=books&ie=UTF8&qid=1497910145&sr=1-3&keywords=six+strange+tales' ,
		   		paperback: '',
		   		hardcover: ''
		   	},
		   	'reviews': 'https://www.amazon.com/review/create-review/ref=dpx_acr_wr_link?asin=B006GRZ0D8#',
		    public: true},
			{'name': 'Novelty Soundbytes',
		   'description': 'Order NOW',
		   'links': { 
		   		digital: '' ,
		   		paperback: 'Ask for Venmo',
		   		hardcover: ''
		   	},
		   	'reviews': 'https://www.amazon.com/Six-Strange-Tales-Individual-Eleven-ebook/dp/B006GRZ0D8/ref=sr_1_3?s=books&ie=UTF8&qid=1497910145&sr=1-3&keywords=six+strange+tales',
		    public: true}
		];

		available.forEach((avail: AvailableModel) => Available.insert(avail));
	}
}