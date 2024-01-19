import { addBooking } from '@/store/cartSlice';
import { Hotel } from '@/types/types';
import { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar, Minus, Plus } from '../../../public/assets/svg';
import moment from 'moment';

interface BookingFormProps {
	hotel: Hotel;
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
			className='block w-full text-[12px] text-black placeholder:text-black'
			value={value || ''}
			readOnly
			placeholder='Select date'
		/>
		<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
			<Calendar className='h-4 w-4 text-gray-400' aria-hidden='true' />
		</div>
	</div>
));

const BookingForm: React.FC<BookingFormProps> = ({ hotel }) => {
	const [selectedVendor, setSelectedVendor] = useState(hotel.offers[0]);
	const [checkInDate, setCheckInDate] = useState('');
	const [checkOutDate, setCheckOutDate] = useState('');
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
		const bookingDetails = {
			hotelId: hotel.localName,
			checkInDate: new Date(checkInDate).toISOString(),
			checkOutDate: new Date(checkOutDate).toISOString(),
			adults,
			children,
			pricePerNight: selectedVendor.pricePerNight || 0,
			rooms,
		};
		dispatch(addBooking(bookingDetails));
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

			<div className='flex flex-col w-full md:mt-0 '>
				<label
					htmlFor='vendor'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					Choose a vendor:
				</label>
				<select
					id='vendor'
					className='mt-1 flex-1 text-[12px] text-left border-2 rounded-md py-1 font-dmSans text-myBlack ring-inset outline-none placeholder:text-text-myBlack sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
					value={selectedVendorValue}
					onChange={handleVendorChange}
				>
					{hotel.offers.map((offer, index) => (
						<option key={index} value={offer.vendor}>
							{offer.vendor} (${offer.pricePerNight})
						</option>
					))}
				</select>
			</div>
			<div className='flex flex-col w-full md:mt-0 '>
				<label
					htmlFor='checkInDate'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					Check-in Date:
				</label>
				<DatePicker
					selected={
						checkInDate ? moment(checkInDate, 'YYYY-MM-DD').toDate() : null
					}
					onChange={(date) => handleDateChange(date, setCheckInDate, true)}
					customInput={<CustomInput />}
					dateFormat='yyyy-MM-dd'
				/>
			</div>
			<div className='flex flex-col w-full md:mt-0 '>
				<label
					htmlFor='checkOutDate'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					Check-out Date:
				</label>
				<DatePicker
					selected={
						checkOutDate ? moment(checkOutDate, 'YYYY-MM-DD').toDate() : null
					}
					onChange={(date) => handleDateChange(date, setCheckOutDate)}
					customInput={<CustomInput />}
					dateFormat='yyyy-MM-dd'
				/>
			</div>
			<div className='flex flex-col w-full'>
				<label
					htmlFor='adults'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					Adults:
				</label>
				<div className='relative mt-1 rounded-md shadow-sm'>
					<div className='flex'>
						<input
							type='number'
							id='adults'
							value={adults}
							min='1'
							className='flex-1 text-[12px] text-left border-2 rounded-md py-1 font-dmSans text-myBlack ring-inset outline-none pl-2 placeholder:text-text-myBlack sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
							onChange={(e) =>
								setAdults(Math.max(1, Math.min(8, parseInt(e.target.value))))
							}
						/>
						<div className='absolute inset-y-0 right-0 gap-1 flex items-center pr-2'>
							<Minus
								aria-label='Decrease guest number'
								className='h-4 w-4 text-gray-400 cursor-pointer'
								aria-hidden='true'
								onClick={() => setAdults(adults > 1 ? adults - 1 : 1)}
							/>
							<Plus
								aria-label='Increase guest number'
								className='h-4 w-4 text-gray-400 cursor-pointer'
								aria-hidden='true'
								onClick={() => setAdults(adults < 8 ? adults + 1 : 8)}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col w-full'>
				<label
					htmlFor='children'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					Children:
				</label>
				<div className='relative mt-1 rounded-md shadow-sm'>
					<div className='flex'>
						<input
							type='number'
							id='adults'
							value={children}
							min='0'
							className='flex-1 text-[12px] text-left border-2 rounded-md py-1 font-dmSans text-myBlack ring-inset outline-none pl-2 placeholder:text-text-myBlack sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
							onChange={(e) =>
								setChildren(Math.max(1, Math.min(8, parseInt(e.target.value))))
							}
						/>
						<div className='absolute inset-y-0 right-0 gap-1 flex items-center pr-2'>
							<Minus
								aria-label='Decrease guest number'
								className='h-4 w-4 text-gray-400 cursor-pointer'
								aria-hidden='true'
								onClick={() => setChildren(children > 1 ? children - 1 : 0)}
							/>
							<Plus
								aria-label='Increase guest number'
								className='h-4 w-4 text-gray-400 cursor-pointer'
								aria-hidden='true'
								onClick={() => setChildren(children < 8 ? children + 1 : 8)}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col w-full'>
				<label
					htmlFor='rooms'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					Rooms:
				</label>
				<div className='relative mt-1 rounded-md mb-4'>
					<div className='flex  rounded-md'>
						<input
							type='number'
							id='rooms'
							value={rooms}
							min='1'
							className='flex-1 text-[12px] text-left border-2 rounded-md py-1 font-dmSans text-myBlack ring-inset outline-none pl-2 placeholder:text-text-myBlack sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
							onChange={(e) =>
								setRooms(Math.max(1, Math.min(5, parseInt(e.target.value))))
							}
						/>
						<div className='absolute inset-y-0 right-0 gap-1 flex items-center pr-2'>
							<Minus
								aria-label='Decrease guest number'
								className='h-4 w-4 text-gray-400 cursor-pointer'
								aria-hidden='true'
								onClick={() => setRooms(rooms > 1 ? rooms - 1 : 1)}
							/>
							<Plus
								aria-label='Increase guest number'
								className='h-4 w-4 text-gray-400 cursor-pointer'
								aria-hidden='true'
								onClick={() => setRooms(rooms < 5 ? rooms + 1 : 5)}
							/>
						</div>
					</div>
				</div>
			</div>
			<p className='font-dmSans font-medium text-softGrey'>
				Total Price:{' '}
				<span className='text-base font-bold text-myBlack'>
					${isNaN(totalPrice) ? 0 : totalPrice.toFixed(2)}
				</span>
			</p>
			<button
				type='submit'
				className='mt-8 w-full flex justify-center items-center p-2 gap-2 rounded-md bg-primary text-white hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
				aria-label='Add to Cart'
			>
				Add to Cart
			</button>
		</form>
	);
};

export default BookingForm;
