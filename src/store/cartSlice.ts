import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	CartState,
	BookingDetails,
	getNumberOfNights,
	RestaurantBookingDetails,
} from '@/types/types';
import { v4 as uuidv4 } from 'uuid';

const initialState: CartState = {
	bookings: [],
	totalPrice: 0,
	orderTotal: 0,
	restaurantBooking: [],
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
} = cartSlice.actions;
export default cartSlice.reducer;
