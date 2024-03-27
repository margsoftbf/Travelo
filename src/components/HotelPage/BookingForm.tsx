import { addBooking } from '@/store/cartSlice';
import { Hotel } from '@/types/types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import VendorSelector from './BookingFormHelpers/VendorSelector';
import DateHotelSelector from './BookingFormHelpers/DateHotelSelector';
import NumberInput from './BookingFormHelpers/NumberInput';

interface BookingFormProps {
	hotel: Hotel;
}

const BookingForm = ({ hotel }: BookingFormProps) => {
	const [bookingAdded, setBookingAdded] = useState(false);
	const [selectedVendor, setSelectedVendor] = useState(hotel.offers[0]);
	const [checkInDate, setCheckInDate] = useState('');
	const [checkOutDate, setCheckOutDate] = useState('');
	const [checkInDateError, setCheckInDateError] = useState(false);
	const [checkOutDateError, setCheckOutDateError] = useState(false);
	const [adults, setAdults] = useState(1);
	const [children, setChildren] = useState(0);
	const [rooms, setRooms] = useState(1);
	const dispatch = useDispatch();
	const today = moment().startOf('day');

	if (!hotel.offers || hotel.offers.length === 0) {
		return <div>Loading offers...</div>;
	}

	const handleDateChange = (
		date: Date | null,
		setDate: (dateStr: string) => void,
		isCheckInDate: boolean = false
	) => {
		if (!date) return;
		const selectedDate = moment(date);

		if (isCheckInDate) {
			if (selectedDate.isBefore(today, 'day')) {
				setDate(today.format('YYYY-MM-DD'));
			} else {
				setDate(selectedDate.format('YYYY-MM-DD'));
			}
		} else {
			const minCheckoutDate = moment(checkInDate).add(1, 'days');
			if (selectedDate.isSameOrBefore(minCheckoutDate, 'day')) {
				setDate(minCheckoutDate.format('YYYY-MM-DD'));
			} else {
				setDate(selectedDate.format('YYYY-MM-DD'));
			}
		}
	};

	const handleVendorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedOffer = hotel.offers.find(
			(offer) => offer.vendor === e.target.value
		);
		setSelectedVendor(selectedOffer || hotel.offers[0]);
	};

	const selectedVendorValue = selectedVendor?.vendor ?? 'defaultVendor';

	const calculateNights = () => {
		if (!checkInDate || !checkOutDate) return 0;
		return moment(checkOutDate).diff(moment(checkInDate), 'days');
	};

	const pricePerNight = selectedVendor?.pricePerNight ?? 0;

	const totalPrice = calculateNights() * pricePerNight * rooms;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setCheckInDateError(false);
		setCheckOutDateError(false);

		let isValid = true;
		if (!checkInDate) {
			setCheckInDateError(true);
			isValid = false;
		}
		if (!checkOutDate) {
			setCheckOutDateError(true);
			isValid = false;
		}

		if (!isValid) return;

		const bookingDetails = {
			hotelName: hotel.name,
			hotelImage: hotel.image,
			hotelLocation: hotel.locationString,
			checkInDate: new Date(checkInDate).toISOString(),
			checkOutDate: new Date(checkOutDate).toISOString(),
			adults,
			children,
			pricePerNight: selectedVendor.pricePerNight || 0,
		};
		dispatch(addBooking(bookingDetails));
		setBookingAdded(true);
		setTimeout(() => setBookingAdded(false), 3000);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='p-4 border rounded shadow z-20 bg-white  space-y-3 relative flex flex-col '
		>
			<h2 className='text-myBlack font-dmSans text-xl font-bold leading-6 tracking-tight'>
				Book
			</h2>
			<div className='border-b border-primary'></div>
			<p className='font-dmSans font-medium text-softGrey'>
				From:{' '}
				<span className='text-xl font-bold text-myBlack'>${pricePerNight}</span>
				/ night
			</p>
			<VendorSelector
				offers={hotel.offers}
				selectedVendor={selectedVendorValue}
				onVendorChange={handleVendorChange}
			/>
			<DateHotelSelector
				checkInDate={checkInDate}
				checkOutDate={checkOutDate}
				setCheckInDate={setCheckInDate}
				setCheckOutDate={setCheckOutDate}
				checkInDateError={checkInDateError}
				checkOutDateError={checkOutDateError}
				handleDateChange={handleDateChange}
			/>
			<NumberInput
				label='Adults'
				id='adults'
				value={adults}
				setValue={setAdults}
				min={1}
				max={8}
			/>
			<NumberInput
				label='Children'
				id='children'
				value={children}
				setValue={setChildren}
				min={0}
				max={8}
			/>
			
			<p className='font-dmSans font-medium text-softGrey'>
				Total Price:{' '}
				<span className='text-xl font-bold text-myBlack'>
					${isNaN(totalPrice) ? 0 : totalPrice.toFixed(2)}
				</span>
			</p>
			<button
				type='submit'
				className='mt-8 w-full flex justify-center items-center p-2 gap-2 rounded-md font-semibold bg-primary text-white hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
				aria-label='Add to Cart'
			>
				Add to Cart
			</button>
			{bookingAdded && (
				<div className='z-20 absolute bottom-16 left-1/2 -translate-x-1/2 p-4 w-48 text-center mb-4 text-sm text-green-700 bg-green-100 border border-green-400 rounded'>
					Booking added to cart!
				</div>
			)}
		</form>
	);
};

export default BookingForm;
