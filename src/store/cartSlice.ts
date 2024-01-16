import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { CartState, BookingDetails, getNumberOfNights } from '@/types/types'

const initialState: CartState = {
    bookings: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingDetails>) => {
            state.bookings.push(action.payload);
            state.totalPrice += getNumberOfNights(action.payload.checkInDate, action.payload.checkOutDate) * action.payload.pricePerNight;
        },
        removeBooking: (state, action: PayloadAction<string>) => {
            const booking = state.bookings.find(b => b.hotelId === action.payload)
            if(booking) {
                state.totalPrice -= getNumberOfNights(booking.checkInDate, booking.checkOutDate) * booking.pricePerNight;
            }
            state.bookings = state.bookings.filter(booking => booking.hotelId !== action.payload)
        },
    }
})

export const { addBooking, removeBooking } = cartSlice.actions;
export default cartSlice.reducer;