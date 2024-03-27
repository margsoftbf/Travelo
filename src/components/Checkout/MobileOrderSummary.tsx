import React from 'react';
import { Disclosure } from '@headlessui/react';
import {
	BookingDetails,
	RestaurantBookingDetails,
	AttractionBookingDetails,
} from '@/types/types';
import HotelBookingItem from './Summary/HotelBookingItem';
import RestaurantBookingItem from './Summary/RestaurantBookingItem';
import AttractionBookingItem from './Summary/AttractionBookingItem';

interface MobileOrderSummaryProps {
	bookings: BookingDetails[];
	restaurantBooking: RestaurantBookingDetails[];
	attractionBooking: AttractionBookingDetails[];
	totalPrice: number;
	orderTotal: number;
	taxes: number;
}

const MobileOrderSummary = ({
	bookings,
	attractionBooking,
	restaurantBooking,
	totalPrice,
	orderTotal,
	taxes,
}: MobileOrderSummaryProps) => {

	return (
		<Disclosure
			as='div'
			className='mx-auto max-w-lg bg-neutral px-4 py-6 border rounded-md'
		>
			{({ open }) => (
				<>
					<div className='flex items-center justify-between '>
						<h2
							id='order-heading'
							className='text-lg font-medium text-gray-900'
						>
							Your Order
						</h2>
						<Disclosure.Button className='font-medium text-primary hover:text-myBlack duration-300 transition ease-in-out'>
							{open ? (
								<span>Hide full summary</span>
							) : (
								<span>Show full summary</span>
							)}
						</Disclosure.Button>
					</div>

					<Disclosure.Panel>
						<ul
							role='list'
							className='divide-y divide-gray-200 border-b border-gray-200 overflow-y-auto max-h-72'
						>
							{bookings.map((booking) => (
								<HotelBookingItem key={booking.bookingId} booking={booking} />
							))}
							{restaurantBooking.map((booking) => (
								<RestaurantBookingItem
									key={booking.bookingId}
									booking={booking}
								/>
							))}
							{attractionBooking.map((booking) => (
								<AttractionBookingItem
									key={booking.bookingId}
									booking={booking}
								/>
							))}
						</ul>

						<div className='mt-10 space-y-6 text-sm font-medium text-gray-500'>
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
						</div>
					</Disclosure.Panel>

					<p className='mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900'>
						<span className='text-base font-dmSans'>
							Total {orderTotal < totalPrice ? 'with discount' : ''}
						</span>
						<span className='text-myBlack text-base font-semibold'>
							${orderTotal.toFixed(2)}
						</span>
					</p>
				</>
			)}
		</Disclosure>
	);
};

export default MobileOrderSummary;
