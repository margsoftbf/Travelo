import { removeBooking } from '@/store/cartSlice';
import { getNumberOfNights, BookingDetails } from '@/types/types';
import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';

interface BookingItemProps {
	booking: BookingDetails;
}
const HotelBookingItem = ({ booking }: BookingItemProps) => {
	const dispatch = useDispatch();
	const numberOfNights = getNumberOfNights(
		booking.checkInDate ?? '',
		booking.checkOutDate ?? ''
	);
	const subtotal = numberOfNights * booking.pricePerNight;

	return (
		<li key={booking.bookingId} className='flex space-x-6 py-6 my-2'>
			<img
				src={booking.hotelImage}
				alt='Hotel image'
				className='hidden xs:block h-32 w-32 flex-none rounded-md bg-gray-200 object-cover object-center'
			/>
			<div className='flex flex-col justify-between space-y-4'>
				<div className='space-y-1 text-sm font-medium'>
					<h3 className='text-myBlack line-clamp-1'>
						<span className='text-softGrey text-xs'>Hotel: </span>
						{booking.hotelName}
					</h3>
					<p className='text-myBlack line-clamp-1'>
						<span className='text-softGrey text-xs'>Location: </span>
						{booking.hotelLocation}
					</p>

					<p className='text-myBlack line-clamp-1'>
						<span className='text-softGrey text-xs'>Check In Date: </span>
						{moment(booking.checkInDate).format('DD MMM YYYY')}
					</p>
					<p className='text-myBlack line-clamp-1'>
						<span className='text-softGrey text-xs'>Check Out Date: </span>
						{moment(booking.checkOutDate).format('DD MMM YYYY')}
					</p>
					<p className='text-myBlack line-clamp-1'>
						<span className='text-softGrey text-xs'>Total price: </span>$
						{subtotal.toFixed(2)}
					</p>
					<div className='flex space-x-4'>
						<button
							onClick={() => {
								if (booking.bookingId) {
									dispatch(removeBooking(booking.bookingId));
								}
							}}
							type='button'
							aria-label='Remove button'
							className='text-sm font-medium text-primary hover:text-myBlack duration-300 transition ease-in-out'
						>
							Remove
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default HotelBookingItem;
