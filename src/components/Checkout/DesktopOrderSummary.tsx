import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {
	getNumberOfNights,
	BookingDetails,
	RestaurantBookingDetails,
	AttractionBookingDetails,
} from '@/types/types';
import {
	removeBooking,
	removeRestaurantBooking,
	removeAttractionBooking,
} from '@/store/cartSlice';

interface DesktopOrderSummaryProps {
	restaurantBooking: RestaurantBookingDetails[];
	attractionBooking: AttractionBookingDetails[];
	bookings: BookingDetails[];
	totalPrice: number;
	orderTotal: number;
	taxes: number;
}

const DesktopOrderSummary: React.FC<DesktopOrderSummaryProps> = ({
	bookings,
	totalPrice,
	restaurantBooking,
	attractionBooking,
	orderTotal,
	taxes,
}) => {
	const dispatch = useDispatch();
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
				{bookings.map((booking) => {
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
										<span className='text-softGrey text-xs'>
											Check In Date:{' '}
										</span>
										{moment(booking.checkInDate).format('DD MMM YYYY')}
									</p>
									<p className='text-myBlack line-clamp-1'>
										<span className='text-softGrey text-xs'>
											Check Out Date:{' '}
										</span>
										{moment(booking.checkOutDate).format('DD MMM YYYY')}
									</p>
									<p className='text-myBlack line-clamp-1'>
										<span className='text-softGrey text-xs'>Total price: </span>
										${subtotal.toFixed(2)}
									</p>
								</div>
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
						</li>
					);
				})}
				{restaurantBooking.map((booking) => {
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
										<span className='text-softGrey text-xs'>
											Check In Date:{' '}
										</span>
										{moment(booking.date).format('DD MMM YYYY')}
									</p>
									<p className='text-myBlack line-clamp-1'>
										<span className='text-softGrey text-xs'>Name: </span>
										{booking.name}
									</p>
									<p className='text-myBlack line-clamp-1'>
										<span className='text-softGrey text-xs'>Total price: </span>
										${booking.price.toFixed(2)}
									</p>
								</div>
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
						</li>
					);
				})}
				{attractionBooking.map((booking) => {
					return (
						<li key={booking.bookingId} className='flex space-x-6 py-6 my-2'>
							<img
								src={booking.attractionImage}
								alt='Hotel image'
								className='hidden xs:block h-32 w-32 flex-none rounded-md bg-gray-200 object-cover object-center'
							/>
							<div className='flex flex-col justify-between space-y-4'>
								<div className='space-y-1 text-sm font-medium'>
									<h3 className='text-myBlack line-clamp-1'>
										<span className='text-softGrey text-xs'>Attraction: </span>
										{booking.attractionName}
									</h3>
									<p className='text-myBlack line-clamp-1'>
										<span className='text-softGrey text-xs'>Location: </span>
										{booking.attractionLocation}
									</p>

									<p className='text-myBlack line-clamp-1'>
										<span className='text-softGrey text-xs'>
											Check In Date:{' '}
										</span>
										{moment(booking.date).format('DD MMM YYYY')}
									</p>
									<p className='text-myBlack line-clamp-1'>
										<span className='text-softGrey text-xs'>Name: </span>
										{booking.name}
									</p>
									<p className='text-myBlack line-clamp-1'>
										<span className='text-softGrey text-xs'>Total price: </span>
										${booking.selectedOffer.price}
									</p>
								</div>
								<div className='flex space-x-4'>
									<button
										onClick={() => {
											if (booking.bookingId) {
												dispatch(removeAttractionBooking(booking.bookingId));
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
						</li>
					);
				})}
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
