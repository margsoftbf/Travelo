import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Restaurant } from '@/types/types';
import { Calendar, Minus, Plus } from '../../../public/assets/svg';
import { addRestaurantBooking } from '@/store/cartSlice';

interface BookingFormProps {
	restaurant: Restaurant;
}

const CustomInput = forwardRef<
	HTMLInputElement,
	{ value?: string; onClick?: () => void; hasError?: boolean }
>(({ value, onClick, hasError }, ref) => (
	<div
		className={`relative w-full text-[12px] rounded-md py-1 mt-1 pr-10 font-dmSans text-myBlack ring-1 pl-2 ring-inset outline-none ring-gray-300 placeholder:text-myBlack sm:leading-6 ${
			hasError ? 'border-red-500 border' : ''
		}`}
		onClick={onClick}
	>
		<input
			ref={ref}
			type='text'
			className={`block w-full text-[12px] text-black placeholder:text-black outline-none ${
				hasError
					? 'border-red-500 ring-red-500'
					: 'border-gray-300 ring-gray-300'
			}`}
			value={value || ''}
			readOnly
			placeholder='Select date'
		/>
		<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
			<Calendar className='h-4 w-4 text-gray-400' aria-hidden='true' />
		</div>
	</div>
));

const ReservationForm: React.FC<BookingFormProps> = ({ restaurant }) => {
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
		console.log('Wysłano akcję addRestaurantBooking z danymi:', bookingDetails);
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
			<div className='flex flex-col w-full md:mt-0 '>
				<label
					htmlFor='name'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					{errors.name ? (
						<p className='text-red-500 text-xs italic'>{errors.name}</p>
					) : (
						<p>Name</p>
					)}
				</label>
				<input
					type='text'
					id='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Your Name'
					className={`mt-1 block w-full text-xs rounded-md border-0  pl-2  py-1.5 font-dmSans text-myBlack shadow-sm outline-none ring-1 ring-inset  placeholder:text-xs placeholder:text-myBlack sm:text-sm sm:leading-6 ${
						errors.name ? 'ring-red-400' : 'ring-gray-300'
					}`}
				/>
			</div>
			<div className='flex flex-col w-full md:mt-0 '>
				<label
					htmlFor='email'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					{errors.email ? (
						<p className='text-red-500 text-xs italic'>{errors.email}</p>
					) : (
						<p>Email</p>
					)}
				</label>
				<input
					type='email'
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Your Email'
					className={`mt-1 block w-full text-xs rounded-md border-0  pl-2  py-1.5 font-dmSans text-myBlack shadow-sm outline-none ring-1 ring-inset  placeholder:text-xs placeholder:text-myBlack sm:text-sm sm:leading-6 ${
						errors.name ? 'ring-red-400' : 'ring-gray-300'
					}`}
				/>
			</div>
			<div className='flex flex-col w-full md:mt-0 '>
				<label
					htmlFor='date'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					{errors.date ? (
						<p className='text-red-500 text-xs italic'>{errors.date}</p>
					) : (
						<p>Select Date</p>
					)}
				</label>
				<DatePicker
					id='date'
					selected={selectedDate}
					onChange={(date) => setSelectedDate(date)}
					customInput={<CustomInput hasError={checkDateError} />}
					dateFormat='yyyy-MM-dd'
					minDate={today}
				/>
			</div>
			<div className='flex flex-col w-full md:mt-0 '>
				<label
					htmlFor='time'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					{errors.time ? (
						<p className='text-red-500 text-xs italic'>{errors.time}</p>
					) : (
						<p>Select Time</p>
					)}
				</label>
				<input
					type='time'
					id='time'
					value={time}
					step='300'
					onChange={(e) => setTime(e.target.value)}
					className='mt-1 block w-full text-xs rounded-md border-0  pl-2  py-1.5 font-dmSans text-myBlack shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-xs placeholder:text-text-myBlack sm:text-sm sm:leading-6'
				/>
			</div>
			<div className='flex flex-col w-full'>
				<label
					htmlFor='people'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					Number of people
				</label>
				<div className='relative mt-1 rounded-md shadow-sm'>
					<div className='flex'>
						<input
							type='number'
							id='people'
							value={numberOfPeople}
							onChange={(e) =>
								setNumberOfPeople(
									Math.max(1, Math.min(8, parseInt(e.target.value)))
								)
							}
							min='1'
							className='mt-1 block w-full text-xs rounded-md border-0  pl-2  py-1.5 font-dmSans text-myBlack shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-xs placeholder:text-text-myBlack sm:text-sm sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
							placeholder='Number of People'
						/>
						<div className='absolute inset-y-0 right-0 gap-1 flex items-center pr-2'>
							<Minus
								aria-label='Decrease guest number'
								className='h-4 w-4 text-gray-400 cursor-pointer'
								aria-hidden='true'
								onClick={() =>
									setNumberOfPeople(numberOfPeople > 1 ? numberOfPeople - 1 : 1)
								}
							/>
							<Plus
								aria-label='Increase guest number'
								className='h-4 w-4 text-gray-400 cursor-pointer'
								aria-hidden='true'
								onClick={() =>
									setNumberOfPeople(numberOfPeople < 8 ? numberOfPeople + 1 : 8)
								}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col w-full md:mt-0 '>
				<label
					htmlFor='location'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					Location
				</label>
				<select
					id='location'
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					className='mt-1 block w-full text-xs rounded-md border-0  pl-2  py-1.5 font-dmSans text-myBlack shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-xs placeholder:text-text-myBlack sm:text-sm sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
				>
					<option value='inside'>Inside</option>
					<option value='outside'>Outside</option>
				</select>
			</div>
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
