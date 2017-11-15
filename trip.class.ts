import { TagClass }					from "../Tag/tag.class";
import { TripPlaceClass }			from "../TripPlace/trip-place.class";
import { TripPlaceTransitClass }	from "../TripPlaceTransit/trip-place-transit.class";

export class TripClass{
	tripId: number = null;
	userId: number = null;

	tripName: string = null;
	tripPublishDate: string = null;

	tripStartDate: string = null;
	
	tripTotalDays: string = null;
	tripTotalHours: string = null;
	tripTotalMinutes: string = null;
	
	tripEndDate: string = null;

	tripExpenseCategory: number = null; //TODO Integrate with the visioned range box

	tripDoneSelfRating: boolean = null;
	tripSelfRating: number = null;

	tripToalRatingSum: number = null;
	tripTotalRatingCount: number = null;

	tripSelfLike: boolean = null;
	tripTotalLike: number = null;

	tripTagArray: Array<number> = [];

	tripDescription: string = null;

	tripPlaceArray: { [id: string]: TripPlaceClass } = {};
	tripPlaceTransitArray: { [id: string]: TripPlaceTransitClass } = {}; //The index should be a string like: "startPlaceID-endPlaceID"

	constructor(){}

}
