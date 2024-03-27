import React, { forwardRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Attraction, OfferListItem } from '@/types/types';
import { Calendar } from '../../../public/assets/svg';
import { addAttractionBooking } from '@/store/cartSlice';
import InputField from './BookingForm/InputField';
import NumberSelector from './BookingForm/NumberSelector';

interface BookingFormProps {
	attraction: Attraction;
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

const BookingFormAttraction = ({ attraction }: BookingFormProps) => {
	const defaultOffer = {
		price: '$100',
		primaryCategory: 'Default Category',
		url: '',
		roundedUpPrice: '100',
		offerType: 'Default Type',
		title: 'Default Offer Title',
		productCode: '111',
		partner: '111',
		imageUrl: '',
		description: '',
	};
	const initialOfferIndex = 0;

	const offerListAvailable =
		attraction &&
		attraction.offerGroup &&
		attraction.offerGroup.offerList.length > 0;

	const [bookingAdded, setBookingAdded] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string>(
		offerListAvailable
			? attraction.offerGroup.offerList[initialOfferIndex].primaryCategory
			: defaultOffer.primaryCategory
	);

	const [selectedOfferIndex, setSelectedOfferIndex] =
		useState(initialOfferIndex);
	const selectedOffer = offerListAvailable
		? attraction.offerGroup.offerList[selectedOfferIndex]
		: defaultOffer;
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [numberOfPeople, setNumberOfPeople] = useState(1);
	const [checkDateError, setDateError] = useState(false);
	const dispatch = useDispatch();
	const today = moment().toDate();

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		date: '',
	});

	const handleOfferChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOfferIndex(parseInt(e.target.value));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let newErrors = { ...errors };

		newErrors.name = name ? '' : 'Name is required';
		newErrors.email = email.includes('@') ? '' : 'Invalid email';
		newErrors.date = selectedDate ? '' : 'Date is required';

		setErrors(newErrors);

		const isFormValid = Object.values(newErrors).every((error) => error === '');

		if (!isFormValid) return;

		const selectedOffers: OfferListItem[] =
			attraction.offerGroup.offerList.filter(
				(offer) => offer.primaryCategory === selectedCategory
			);

		const bookingDetails = {
			attractionName: attraction.name,
			attractionImage: attraction.image,
			attractionLocation: attraction.locationString,
			selectedOffer,
			name,
			email,
			date: selectedDate ? selectedDate.toISOString() : '',
			numberOfPeople,
		};

		dispatch(addAttractionBooking(bookingDetails));
		setBookingAdded(true);
		setTimeout(() => setBookingAdded(false), 3000);
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='p-4 border rounded shadow z-20 bg-white  space-y-3 relative flex flex-col '
		>
			<h2 className='text-myBlack font-dmSans text-xl font-bold leading-6 tracking-tight'>
				Book a Tour
			</h2>
			<div className='border-b border-primary'></div>
			<p className='font-dmSans font-medium text-[14px] text-softGrey'>
				Price for tour:{' '}
				<span className='text-base font-bold text-myBlack'>
					{selectedOffer.price}
				</span>
			</p>
			<div className='flex flex-col w-full md:mt-0 '>
				<label
					htmlFor='offer'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					Choose an Offer:
				</label>
				<select
					id='offer'
					className='mt-1 flex-1 text-[12px] text-left border-2 rounded-md py-1 font-dmSans text-myBlack ring-inset outline-none placeholder:text-text-myBlack sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
					value={selectedOfferIndex}
					onChange={handleOfferChange}
				>
					{attraction.offerGroup.offerList.map((offer, index) => (
						<option key={index} value={index}>
							{offer.primaryCategory} ({offer.price})
						</option>
					))}
				</select>
			</div>
		

			<InputField
				id='name'
				type='text'
				placeholder='Your Name'
				label={errors.name ? 'Name is required' : 'Name'}
				value={name}
				onChange={(e) => setName(e.target.value)}
				error={errors.name}
			/>

			<InputField
				id='email'
				type='text'
				placeholder='Your Email'
				label={errors.email ? 'Email is required' : 'Email'}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				error={errors.email}
			/>

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
					selected={selectedDate}
					onChange={(date) => setSelectedDate(date)}
					customInput={<CustomInput hasError={checkDateError} />}
					minDate={today}
					dateFormat='yyyy-MM-dd'
				/>
			</div>
			<NumberSelector
				id='people'
				value={numberOfPeople}
				min={1}
				max={8}
				onChange={setNumberOfPeople}
			/>

			<button
				type='submit'
				className='mt-8 w-full flex justify-center items-center p-2 gap-2 rounded-md bg-primary text-white hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
			>
				Book Now
			</button>
			{bookingAdded && (
				<div className='z-20 absolute bottom-16 left-1/2 -translate-x-1/2 p-4 w-48 text-center mb-4 text-sm text-green-700 bg-green-100 border border-green-400 rounded'>
					Booking added to cart!
				</div>
			)}
		</form>
	);
};

export default BookingFormAttraction;
