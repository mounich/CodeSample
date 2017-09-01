import { Injectable }		from '@angular/core';

import { PlaceClass }		from "../../Class/Place/place.class";

//import { TagService }	from "../../Service/Tag/tag.service";

@Injectable()
export class PlaceService {
	placeArray: { [id: string]: PlaceClass } = {};

	constructor(){
		let southFork = new PlaceClass();
		southFork.populateAll(10, "Southfork Public House", 46.713697, -117.180574);
		this.placeArray[southFork.placeId] = southFork;

		let pullmanCinema = new PlaceClass();
		pullmanCinema.populateAll(20, "Pullman Village Centre Cinemas", 46.7122943, -117.1640989);
		this.placeArray[pullmanCinema.placeId] = pullmanCinema;

		let sloanHall = new PlaceClass();
		sloanHall.populateAll(30, "Sloan Hall", 46.730908, -117.1688481);
		this.placeArray[sloanHall.placeId] = sloanHall;

		let residenceInn = new PlaceClass();
		residenceInn.populateAll(40, "Residence Inn Pullman", 46.739313, -117.150469);
		this.placeArray[residenceInn.placeId] = residenceInn;
	}
}
