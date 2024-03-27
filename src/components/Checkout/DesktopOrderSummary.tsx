import React from 'react';
import {
	BookingDetails,
	RestaurantBookingDetails,
	AttractionBookingDetails,
} from '@/types/types';
import HotelBookingItem from './Summary/HotelBookingItem';
import RestaurantBookingItem from './Summary/RestaurantBookingItem';
import AttractionBookingItem from './Summary/AttractionBookingItem';

interface DesktopOrderSummaryProps {
	restaurantBooking: RestaurantBookingDetails[];
	attractionBooking: AttractionBookingDetails[];
	bookings: BookingDetails[];
	totalPrice: number;
	orderTotal: number;
	taxes: number;
}

const DesktopOrderSummary = ({
	bookings,
	totalPrice,
	restaurantBooking,
	attractionBooking,
	orderTotal,
	taxes,
}: DesktopOrderSummaryProps) => {
	return (
		<section
			aria-labelledby='summary-heading'
			className='hidden w-full max-w-md flex-col justify-between h-96 bg-neutral border rounded-md lg:flex order-2'
		>
			<h2 id='summary-heading' className='sr-only'>
				Order summary
			</h2>

			<ul
				role='list'
				className='flex-auto divide-y divide-gray-200 px-6 overflow-y-auto max-h-[450px]'
			>
				{bookings.map((booking) => (
					<HotelBookingItem key={booking.bookingId} booking={booking} />
				))}
				{restaurantBooking.map((booking) => (
					<RestaurantBookingItem key={booking.bookingId} booking={booking} />
				))}
				{attractionBooking.map((booking) => (
				<AttractionBookingItem key={booking.bookingId} booking={booking} />
				))}
			</ul>

			<div className='sticky bottom-0 p-4 flex-none border-t border-gray-200 bg-neutral px-6'>
				<div className='space-y-2 text-sm  font-medium text-gray-500'>
					<div className='flex justify-between'>
						<div>Subtotal</div>
						<div className='text-myBlack text-base font-semibold'>
							${totalPrice.toFixed(2)}
						</div>
					</div>

					<div className='flex justify-between'>
						<div>Taxes</div>
						<div className='text-myBlack text-base font-semibold'>
							${(totalPrice * taxes).toFixed(2)}
						</div>
					</div>
					<div className='flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900'>
						<span className='text-base font-dmSans'>
							Total {orderTotal < totalPrice ? 'with discount' : ''}
						</span>
						<span className='text-myBlack text-base font-semibold'>
							${orderTotal.toFixed(2)}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DesktopOrderSummary;
