import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	CartState,
	BookingDetails,
	getNumberOfNights,
	RestaurantBookingDetails,
	AttractionBookingDetails,
} from '@/types/types';
import { v4 as uuidv4 } from 'uuid';

const initialState: CartState = {
	bookings: [],
	totalPrice: 0,
	orderTotal: 0,
	restaurantBooking: [],
	attractionBooking: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addBooking: (state, action: PayloadAction<BookingDetails>) => {
			const booking = {
				...action.payload,
				bookingId: action.payload.bookingId || uuidv4(),
			};
			const numberOfNights = getNumberOfNights(
				booking.checkInDate,
				booking.checkOutDate
			);
			const bookingTotalPrice = numberOfNights * booking.pricePerNight;

			state.totalPrice += bookingTotalPrice;
			state.bookings.push(booking);
		},
		removeBooking: (state, action: PayloadAction<string>) => {
			const booking = state.bookings.find(
				(b) => b.bookingId === action.payload
			);
			if (booking) {
				state.totalPrice -=
					getNumberOfNights(booking.checkInDate, booking.checkOutDate) *
					booking.pricePerNight;
			}
			state.bookings = state.bookings.filter(
				(booking) => booking.bookingId !== action.payload
			);
		},
		updateAdults: (
			state,
			action: PayloadAction<{ bookingId: string; adults: number }>
		) => {
			const { bookingId, adults } = action.payload;
			const booking = state.bookings.find((b) => b.bookingId === bookingId);
			if (booking) {
				booking.adults = adults;
			}
		},
		updateChildren: (
			state,
			action: PayloadAction<{ bookingId: string; children: number }>
		) => {
			const { bookingId, children } = action.payload;
			const booking = state.bookings.find((b) => b.bookingId === bookingId);
			if (booking) {
				booking.children = children;
			}
		},
		clearCart: (state) => {
			state.bookings = [];
			state.totalPrice = 0;
			state.orderTotal = 0; 
			state.restaurantBooking = [];
			state.attractionBooking = [];
		  },
		setOrderTotal: (state, action) => {
			state.orderTotal = action.payload;
		},
		addRestaurantBooking: (
			state,
			action: PayloadAction<RestaurantBookingDetails>
		) => {
			const newBooking = {
				...action.payload,
				bookingId: action.payload.bookingId || uuidv4(),
			};
			state.restaurantBooking.push(newBooking);
		},
		removeRestaurantBooking: (state, action: PayloadAction<string>) => {
			state.restaurantBooking = state.restaurantBooking.filter(
				(booking) => booking.bookingId !== action.payload
			);
		},
		addAttractionBooking: (
			state,
			action: PayloadAction<AttractionBookingDetails>
		) => {
			const newBooking = {
				...action.payload,
				bookingId: action.payload.bookingId || uuidv4(),
			};
			state.attractionBooking.push(newBooking);
		},
		removeAttractionBooking: (state, action: PayloadAction<string>) => {
			state.attractionBooking = state.attractionBooking.filter(
				(booking) => booking.bookingId !== action.payload
			);
		},
	},
});

export const {
	addBooking,
	removeBooking,
	updateAdults,
	updateChildren,
	clearCart,
	setOrderTotal,
	addRestaurantBooking,
	removeRestaurantBooking,
	addAttractionBooking,
	removeAttractionBooking,
} = cartSlice.actions;
export default cartSlice.reducer;
