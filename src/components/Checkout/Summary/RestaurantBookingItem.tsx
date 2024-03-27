import { RestaurantBookingDetails } from '@/types/types';
import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { removeRestaurantBooking } from '@/store/cartSlice';
removeRestaurantBooking
interface BookingItemProps {
	booking: RestaurantBookingDetails;
}

const RestaurantBookingItem = ({booking}: BookingItemProps) => {
    const dispatch = useDispatch();
	return (
		<li key={booking.bookingId} className='flex space-x-6 py-6 my-2'>
			<img
				src={booking.restaurantImage}
				alt='Hotel image'
				className='hidden xs:block h-32 w-32 flex-none rounded-md bg-gray-200 object-cover object-center'
			/>
			<div className='flex flex-col justify-between space-y-4'>
				<div className='space-y-1 text-sm font-medium'>
					<h3 className='text-myBlack line-clamp-1'>
						<span className='text-softGrey text-xs'>Restaurant: </span>
						{booking.restaurantName}
					</h3>
					<p className='text-myBlack line-clamp-1'>
						<span className='text-softGrey text-xs'>Location: </span>
						{booking.restaurantLocation}
					</p>

					<p className='text-myBlack line-clamp-1'>
						<span className='text-softGrey text-xs'>Check In Date: </span>
						{moment(booking.date).format('DD MMM YYYY')}
					</p>
					<p className='text-myBlack line-clamp-1'>
						<span className='text-softGrey text-xs'>Name: </span>
						{booking.name}
					</p>
					<p className='text-myBlack line-clamp-1'>
						<span className='text-softGrey text-xs'>Total price: </span>$
						{booking.price.toFixed(2)}
					</p>
					<div className='flex space-x-4'>
						<button
							onClick={() => {
								if (booking.bookingId) {
									dispatch(removeRestaurantBooking(booking.bookingId));
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

export default RestaurantBookingItem;
