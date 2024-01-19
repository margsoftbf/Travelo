import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, BookingDetails, getNumberOfNights } from '@/types/types';

const initialState: CartState = {
	bookings: [],
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addBooking: (state, action: PayloadAction<BookingDetails>) => {
			const booking = action.payload;
			state.bookings.push(booking);
			const numberOfNights = getNumberOfNights(
				booking.checkInDate,
				booking.checkOutDate
			);
			const priceForAllRooms =
				numberOfNights * booking.pricePerNight
			state.totalPrice += priceForAllRooms;
		},
		removeBooking: (state, action: PayloadAction<string>) => {
			const booking = state.bookings.find((b) => b.hotelId === action.payload);
			if (booking) {
				state.totalPrice -=
					getNumberOfNights(booking.checkInDate, booking.checkOutDate) *
					booking.pricePerNight;
			}
			state.bookings = state.bookings.filter(
				(booking) => booking.hotelId !== action.payload
			);
		},
		clearCart: (state) => {
			state.bookings = [];
			state.totalPrice = 0;
		},
	},
});

export const { addBooking, removeBooking, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
