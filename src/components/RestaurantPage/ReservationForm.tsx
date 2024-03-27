import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Restaurant } from '@/types/types';
import { Minus, Plus } from '../../../public/assets/svg';
import { addRestaurantBooking } from '@/store/cartSlice';
import InputField from './RestaurantFormHelpers/InputField';
import DateSelector from './RestaurantFormHelpers/DateSelector';
import SelectTime from './RestaurantFormHelpers/SelectTime';
import NumberInput from '../HotelPage/BookingFormHelpers/NumberInput';
import LocationSelect from './RestaurantFormHelpers/LocationSelect';

interface BookingFormProps {
	restaurant: Restaurant;
}

const ReservationForm = ({ restaurant }: BookingFormProps) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [checkDateError, setDateError] = useState(false);
	const [time, setTime] = useState('');
	const [numberOfPeople, setNumberOfPeople] = useState(1);
	const [location, setLocation] = useState('inside');
	const [specialRequests, setSpecialRequests] = useState('');
	const [bookingAdded, setBookingAdded] = useState(false);
	const dispatch = useDispatch();
	const today = moment().toDate();
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		date: '',
		time: '',
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let newErrors = { ...errors };

		newErrors.name = name ? '' : 'Name is required';
		newErrors.email = email.includes('@') ? '' : 'Invalid email';
		newErrors.date = selectedDate ? '' : 'Date is required';
		newErrors.time = time ? '' : 'Time is required';

		setErrors(newErrors);

		const isFormValid = Object.values(newErrors).every((error) => error === '');

		if (!isFormValid) return;

		const bookingDetails = {
			restaurantName: restaurant.name,
			restaurantImage: restaurant.image,
			restaurantLocation: restaurant.locationString,
			name,
			email,
			date: selectedDate ? selectedDate.toISOString() : '',
			time,
			numberOfPeople,
			location,
			specialRequests,
			price: 50,
		};
		dispatch(addRestaurantBooking(bookingDetails));
		setBookingAdded(true);
		setTimeout(() => setBookingAdded(false), 3000);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='p-4 border rounded shadow z-20 bg-white  space-y-3 relative flex flex-col '
		>
			<h2 className='text-myBlack font-dmSans text-xl font-bold leading-6 tracking-tight'>
				Book a Table
			</h2>
			<div className='border-b border-primary'></div>
			<p className='font-dmSans font-medium text-softGrey'>
				Price for reservation:{' '}
				<span className='text-xl font-bold text-myBlack'>$50</span>
			</p>

			<InputField
				id='name'
				label='Name'
				error={errors.name}
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Your Name'
			/>
			<InputField
				id='email'
				label='Email'
				error={errors.email}
				type='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='Your Email'
			/>
			<DateSelector
				id='date'
				label='Select Date'
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
				checkDateError={checkDateError}
				today={today}
				error={errors.date}
			/>
			<SelectTime
				id='time'
				type='time'
				label='Select Time'
				error={errors.time}
				value={time}
				onChange={(e) => setTime(e.target.value)}
			/>
			<NumberInput
				label='Number of people'
				id='people'
				value={numberOfPeople}
				setValue={setNumberOfPeople}
				min={1}
				max={8}
			/>
			<LocationSelect
				id='location'
				label='Location'
				value={location}
				onChange={(e) => setLocation(e.target.value)}
			/>
			<textarea
				value={specialRequests}
				onChange={(e) => setSpecialRequests(e.target.value)}
				placeholder='Special Requests'
				className='border rounded p-2'
			/>
			<button
				type='submit'
				className='mt-8 w-full flex justify-center items-center p-2 gap-2 rounded-md bg-primary text-white hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
			>
				Book Table
			</button>
			{bookingAdded && (
				<div className='z-20 absolute bottom-16 left-1/2 -translate-x-1/2 p-4 w-48 text-center mb-4 text-sm text-green-700 bg-green-100 border border-green-400 rounded'>
					Booking added!
				</div>
			)}
		</form>
	);
};

export default ReservationForm;
