import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, BookingDetails, getNumberOfNights } from '@/types/types';

const isClient = typeof window === 'object';
const persistedCartState = isClient ? localStorage.getItem('cart') : null;
const initialState: CartState = persistedCartState
	? JSON.parse(persistedCartState)
	: {
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
				numberOfNights * booking.pricePerNight * booking.rooms;
			state.totalPrice += priceForAllRooms;
			localStorage.setItem('cart', JSON.stringify(state));
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
			localStorage.setItem('cart', JSON.stringify(state));
		},
		clearCart: (state) => {
			state.bookings = [];
			state.totalPrice = 0;
			localStorage.removeItem('cart');
		},
	},
});

export const { addBooking, removeBooking } = cartSlice.actions;
export default cartSlice.reducer;
