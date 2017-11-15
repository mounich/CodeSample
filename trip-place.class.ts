export class TripPlaceClass{
	tripPlaceId:number = null;

	tripPlaceSequence:number = null;

	tripId: number = null;
	placeId: number = null;

	tripPlaceVisitDateTime: string = null;
	tripPlaceVisitTimeIsSet: boolean = null;

	tripPlaceTotalDays: number = null;
	tripPlaceTotalHours: number = null;
	tripPlaceTotalMinutes: number = null;

	tripPlaceRating: number = null;
	tripPlaceCost: number = null;
	tripPlaceDescription: string = null;

	constructor(){}

	populateAll(	tripPlaceId:number,
					tripPlaceSequence:number,
					tripId: number, placeId: number,
					tripPlaceVisitDateTime: string, tripPlaceVisitTimeIsSet: boolean,
					tripPlaceTotalDays: number, tripPlaceTotalHours: number, tripPlaceTotalMinutes: number,
					tripPlaceRating: number, tripPlaceCost: number, tripPlaceDescription: string){
		this.tripPlaceId = tripPlaceId;

		this.tripPlaceSequence = tripPlaceSequence;
		
		this.tripId = tripId;
		this.placeId = placeId;

		this.tripPlaceVisitDateTime = tripPlaceVisitDateTime;
		this.tripPlaceVisitTimeIsSet = tripPlaceVisitTimeIsSet;

		this.tripPlaceTotalDays = tripPlaceTotalDays;
		this.tripPlaceTotalHours = tripPlaceTotalHours;
		this.tripPlaceTotalMinutes = tripPlaceTotalMinutes;

		this.tripPlaceRating = tripPlaceRating;
		this.tripPlaceCost = tripPlaceCost;
		this.tripPlaceDescription = tripPlaceDescription;
	}
}
