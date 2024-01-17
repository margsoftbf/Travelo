import { addBooking } from '@/store/cartSlice';
import { Hotel } from '@/types/types';
import { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateRangePickerProps } from '@/types/types';
import { Calendar } from '../../../public/assets/svg';

interface BookingFormProps {
	hotel: Hotel;
}

const CustomInput = forwardRef<
	HTMLInputElement,
	{ value?: string; onClick?: () => void; hasError?: boolean }
>(({ value, onClick, hasError }, ref) => (
	<div
		className={`relative w-full text-[12px] rounded-md py-1 pr-10 font-dmSans text-myBlack ring-1 pl-2 ring-inset outline-none ring-gray-300 placeholder:text-myBlack sm:leading-6 ${
			hasError ? 'border-red-500 border' : ''
		}`}
		onClick={onClick}
	>
		<input
			ref={ref}
			type='text'
			className='block w-full'
			value={value || ''}
			readOnly
			placeholder='Select date range'
		/>
		<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
			<Calendar className='h-4 w-4 text-gray-400' aria-hidden='true' />
		</div>
	</div>
));

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
			pricePerNight: hotel.offers[0]?.pricePerNight ?? 0,
		};
		dispatch(addBooking(bookingDetails));
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='p-4 border rounded shadow z-20 bg-white  space-y-3 relative flex flex-col gap-1'
		>
			<p>From: ${pricePerNight} / night</p>
			<label htmlFor='checkInDate'>Check-in Date:</label>
			<DatePicker
				selected={checkInDate ? new Date(checkInDate) : null}
				onChange={(date: Date | null) =>
					setCheckInDate(date ? date.toISOString().split('T')[0] : '')
				}
				customInput={<CustomInput />}
				dateFormat='yyyy-MM-dd'
			/>
			<label htmlFor='checkOutDate'>Check-out Date:</label>
			<DatePicker
				selected={checkOutDate ? new Date(checkOutDate) : null}
				onChange={(date: Date | null) =>
					setCheckOutDate(date ? date.toISOString().split('T')[0] : '')
				}
				customInput={<CustomInput />}
				dateFormat='yyyy-MM-dd'
			/>
			<label htmlFor='adults'>Adults:</label>
			<input
				type='number'
				id='adults'
				value={adults}
				min='1'
				onChange={(e) => setAdults(parseInt(e.target.value))}
			/>
			<label htmlFor='children'>Children:</label>
			<input
				type='number'
				id='children'
				value={children}
				min='0'
				onChange={(e) => setChildren(parseInt(e.target.value))}
			/>
			<button type='submit'>Add to Booking</button>
		</form>
	);
};

export default BookingForm;
