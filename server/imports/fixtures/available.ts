import { Available } from '/both/collections/available.collection';
import { AvailableModel } from '/both/models/available.model';
import { Images } from '/both/collections/images.collection';
import { Image } from '/both/models/image.model';

export function loadAvailable() {
	let entry = new Date().toString();


	if(Available.find().cursor.count() === 0) {
		const available: AvailableModel[] = [
			{'name': 'Six Strange Tales',
			 'credit': 'written by Individual Eleven',
		   'description': `How well do you know your friends?
		   								 A close knit group of college friends each experience life changing events during the summer break. The catastrophic chain of events should break them, mind, body and soul. Yet somehow, each manages to keep their own secrets, which asks the question, how well do you know your friends? 
		   								 Six Strange Tales is a complex and intertwined series of stories intricately woven around the fates of a small community of characters. Quentin Tarantino and Vincent Gallo come to mind as the plot twists and turns through alternating time periods in the lives of these anti-heroes, sadists, monsters and villains. This book may be the best noir literary work published in recent history. Author, Individual Eleven, actually had these nightmares, wrote them down at dusk, elaborated and shared them with all of us. The book touches on subject matter such as gore and violence, mystery, sex, purgatory, the dangers of drug abuse and even androgyny. 
		   								 The act opens during the college years of a group of friends and evolves into the background of one poor soul as we engage with their vulnerabilities and strength in 'Oh, Tammy'. Next we enter the home life of Neicy to discover a sick and twisted web of deceit and morbid trickery. As you thumb through the pages of these stories imagine a man having these disturbing dreams and then letting the world in on his grimmest fears. Six Strange Tales will have you questioning the neighbor, family and even your own moral fiber. 
		   								 If the question, what lurks in the darkest corners of your psyche intrigues then this book is for you!`,
		   'links': { 
		   		'digital': { 'seller': 'Nook.', 'link': 'https://www.barnesandnoble.com/w/six-strange-tales-individual-eleven/1107867933?ean=2940013454415'}, 
		   		'other': { 'seller': 'Kindle.', 'link': 'https://www.amazon.com/Six-Strange-Tales-Individual-Eleven-ebook/dp/B006GRZ0D8/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1520397757&sr=1-1&keywords=six+strange+tales'},
		   		'other2': { 'seller': 'Paperback.', 'link': 'https://www.barnesandnoble.com/w/six-strange-tales-individual-eleven/1107867933?ean=9781538025369'},
		   		'other3': { 'seller': 'Hardcover*.', 'link': 'https://www.barnesandnoble.com/w/six-strange-tales-individual-eleven/1107867933?ean=9781538036181'},
		  },
		 	  'images': ['/img/catalog/6st-hardcover.png'],
		  	'createdAt': entry,
				public: true},
			{'name': 'VerseAtility III: Rewind',
			 'credit': 'directed by by Individual Eleven',
		   'description': `A documentary-style moving magazine where artists, Djs, producers, promoters and a mogul discuss topics that are close to their hearts. Starring Chad Hugo, Stretch Armstrong and Bobbito, Questlove, Jean Grae, Breeze Evahflowin, Dice Raw, HorrorCity, Rubar and many others. 
		   								 I came across Frequency magazine in the late 90’s early 2000’s and discovered an organic network of people, musicians, promoters and the like all functioning out in the locals of Norfolk, Virginia. This was before social media and smart phones. The magazine catered to artist and celebrity interviews however what was most interesting was it seemed as though the folks surrounding the magazine began to create their own social networks, events and functions in such an exclusive way. It appeared very much like a secret society bent on upholding good music and good vibes. The magazine ended it’s run in the mid-late 2000’s and as with all things life moved on. 
		   								 One day while I had the good fortune of catching up with Rob Murns (co-creator of Frequency magazine), he told me he had taped all of those old interviews. I drove out to VA and we discussed how far Pharrell and Pusha T came, Jean Grae and other old friends, but mainly we questioned the new music being played today. The excitement of looking through all of that great footage as well as the conversation about curating the culture is how this film came about. 
		   								 By now we both have children and we understand the concept of reaching / teaching them through ‘inventive means’. All in all, VerseAtility III: Rewind represents the purist side of the culture, a curation of sorts and a moment to look back at where we came from in order to better understand where we’re going.`,
		   'links': { 
		   		'digital': { 'seller': 'Amazon.', 'link': 'https://www.amazon.com/dp/b07434kkyz'},
		   		'other': { 'seller': 'Pre-Order.', 'link': `mailto:someone@example.com?Subject=Pre-Order:%20VerseAtility%20III:%20Rewind&body=I%20live%20in%20(address)%20and%20would%20like%20to%20pre-order%20V3Rewind,%20please%20tell%20me%20how.`},
		   		'other2': { 'seller': `Walmart - 6/18/12.`, 'link': ''},
		   		'other3': { 'seller': '', 'link': ''},
		  },
		 	  'images': ['/img/catalog/v3rewind-dvd.png'],
		   	'createdAt': entry,
				public: true},
			{'name': 'Play Ceelo',
			 'credit': 'nSb Product',
		   'description': `Learn to 3 Ceelo Dice, specific instructions on how to play on the packaging. Good for play with up to 5 people or 5 groups of 2 or three. For children 13+ and adults. Enjoy and look for other games from NSB Products`,
		   'links': { 
		   		'digital': { 'seller': 'Amazon.', 'link': 'https://www.amazon.com/nSb-Products-Ceelo/dp/B01NANPZMJ/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1520394577&sr=1-1&keywords=play+ceelo'},
		   		'other': { 'seller': 'NSB (1-10).', 'link': `mailto:someone@example.com?Subject=Order:%20Learn%20to%20Play%20Ceelo&body=To%20order%20send%20name,%20address,%20quantity%20($7x)%20and%20VENMO,%20thx.%20-%20nsb`},
		   		'other2': { 'seller': 'Bulk Orders (12x).', 'link': `mailto:someone@example.com?Subject=Bulk%20Order:%20Learn%20to%20Play%20Ceelo&body=To%20order%20send%20name,%20address,%20quantity%20($57x)%20and%20VENMO,%20thx.%20-%20nsb`},
		   		'other3': { 'seller': '', 'link': ''},
		  },
		 	  'images': ['/img/catalog/play-ceelo.png'],
		    'createdAt': entry,
				public: true}
		];

		available.forEach((avail: AvailableModel) => Available.insert(avail));
	}
}