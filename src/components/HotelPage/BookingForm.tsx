import { addBooking } from '@/store/cartSlice';
import { Hotel } from '@/types/types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

interface BookingFormProps {
	hotel: Hotel;
}
const BookingForm: React.FC<BookingFormProps> = ({ hotel }) => {
	const pricePerNight =
		hotel.offers.length > 0 ? hotel.offers[0].pricePerNight : 0;
	const [checkInDate, setCheckInDate] = useState('');
	const [checkOutDate, setCheckOutDate] = useState('');
	const [adults, setAdults] = useState(1);
	const [children, setChildren] = useState(0);
	const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const bookingDetails = {
          hotelId: hotel.id,
          checkInDate: new Date(checkInDate).toISOString(), 
          checkOutDate: new Date(checkOutDate).toISOString(),
          adults,
          children,
          pricePerNight: hotel.offers[0]?.pricePerNight ?? 0
        };
        dispatch(addBooking(bookingDetails));
      };

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='date'
				value={checkInDate}
				onChange={(e) => setCheckInDate(e.target.value)}
				required
			/>
			<input
				type='date'
				value={checkOutDate}
				onChange={(e) => setCheckOutDate(e.target.value)}
				required
			/>
			<input
				type='number'
				value={adults}
				min='1'
				onChange={(e) => setAdults(parseInt(e.target.value))}
			/>
			<input
				type='number'
				value={children}
				min='0'
				onChange={(e) => setChildren(parseInt(e.target.value))}
			/>
			<button type='submit'>Add to Booking</button>
		</form>
	);
};

export default BookingForm;
