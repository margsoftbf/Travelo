export type WeekRange = {
	open: number;
	openHours: string;
	close: number;
	closeHours: string;
};

export type Hours = {
	weekRanges: WeekRange[][];
	timezone: string;
};

export type AddressObj = {
	street1: string;
	street2: string | null;
	city: string;
	state: string | null;
	country: string;
	postalcode: string | null;
};

export type RatingHistogram = {
	count1: number;
	count2: number;
	count3: number;
	count4: number;
	count5: number;
};

export type Restaurant = {
	mealTypes: string[];
	dishes: string[];
	features: string[];
	numberOfReviews: number;
	email: string;
	hours: Hours;
	addressObj: AddressObj;
	locationString: string;
	priceLevel: string;
	rating: number;
	subcategories: string[];
	ratingHistogram: RatingHistogram;
	localName: string;
	openNowText: string;
	cuisines: string[];
	id: string;
	description: string;
	website: string;
	type: string;
	ownersTopReasons: any | null;
	rankingPosition: number;
	priceRange: string;
	webUrl: string;
	isClosed: boolean;
	establishmentTypes: string[];
	category: string;
	image: string;
	localAddress: string;
	phone: string;
	rankingString: string;
	address: string;
	name: string;
};

export type RoomTip = {
	user: any | null;
	type: string;
	text: string;
	rating: string;
	reviewId: string;
	id: string;
	createdTime: string;
};

export type Offer = {
	pricePerNight: number;
	tax: number;
	priceText: string;
	taxesAndFeesText: string;
	totalStayPriceText: string;
	priceBeforeSale: number | string | null;
	provider: string;
	vendor: string;
	canPayInInstallments: boolean;
};

export type Hotel = {
	id: string;
	type: string;
	category: string;
	subcategories: string[];
	name: string;
	locationString: string;
	description: string;
	image: string;
	photoCount?: number;
	awards: any[]; 
	rankingPosition: number;
	rating: number;
	rawRanking: number;
	phone: string | null;
	address: string;
	addressObj: AddressObj;
	localName: string;
	localAddress: string;
	localLangCode: string;
	email: string | null;
	latitude: number;
	longitude: number;
	webUrl: string;
	website: string;
	rankingString: string;
	rankingDenominator: string;
	neighborhoodLocations: any[]; 
	nearestMetroStations: any[]; 
	ancestorLocations: {
	  id: string;
	  name: string;
	  abbreviation: string | null;
	  subcategory: string;
	}[];
	ratingHistogram: RatingHistogram;
	numberOfReviews: number;
	reviewTags: string[];
	hotelClass: string;
	hotelClassAttribution: string;
	amenities: string[];
	numberOfRooms: number;
	categoryReviewScores: {
	  categoryName: string;
	  score: number;
	}[];
	priceLevel?: string;
	priceRange: string;
	roomTips: RoomTip[];
	checkInDate?: string;
	checkOutDate?: string;
	offers: Offer[];
  };

export type OfferListItem = {
	url: string;
	price: string;
	roundedUpPrice: string;
	offerType: any | null;
	title: string;
	productCode: string;
	partner: string;
	imageUrl: string;
	description: any | null;
	primaryCategory: string;
};

export type OfferGroup = {
	lowestPrice: string;
	offerList: OfferListItem[];
};

export type Attraction = {
	subcategories: string[];
	offerGroup: OfferGroup;
	category: string;
	addressObj: AddressObj;
	website: string;
	localLangCode: string;
	type: string;
	image: string;
	localAddress: string;
	phone: string;
	booking: {
		provider: string;
		url: string;
	};
	rankingPosition: number;
	rankingString: string;
	address: string;
	name: string;
	webUrl: string;
	numberOfReviews: number;
	email: string | null;
	locationString: string;
	rating: number;
	localName: string;
	id: string;
	description: string;
	rawRanking: number;
};

export interface DateRangePickerProps {
	startDate: Date | null;
	endDate: Date | null;
	setDateRange: React.Dispatch<
		React.SetStateAction<[Date | null, Date | null]>
	>;
	hasError: boolean;
}

export interface TypeSelectProps {
	type: string;
	setType: React.Dispatch<React.SetStateAction<string>>;
	hasError: boolean;
}

export interface LocationInputProps {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
	suggestions: string[];
	handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSuggestionClick: (suggestion: string) => void;
	errors: {
		location: string;
	};
	variant: 'main' | 'filter';
}
