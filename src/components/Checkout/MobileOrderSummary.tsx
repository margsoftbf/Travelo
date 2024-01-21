import React from 'react';
import { Disclosure } from '@headlessui/react';
import moment from 'moment';
import {
	getNumberOfNights,
	BookingDetails,
} from '@/types/types';
import { removeBooking } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';

interface MobileOrderSummaryProps {
	bookings: BookingDetails[];
	totalPrice: number;
	orderTotal: number;
	taxes: number;
}

const MobileOrderSummary: React.FC<MobileOrderSummaryProps> = ({
	bookings,
	totalPrice,
	orderTotal,
	taxes,
}) => {

    const dispatch = useDispatch();
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
							{bookings.map((booking) => {
								const numberOfNights = getNumberOfNights(
									booking.checkInDate ?? '',
									booking.checkOutDate ?? ''
								);
								const subtotal = numberOfNights * booking.pricePerNight;
								return (
									<li
										key={booking.bookingId}
										className='flex space-x-6 py-6 my-2'
									>
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
													<span className='text-softGrey text-xs'>
														Location:{' '}
													</span>
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
													<span className='text-softGrey text-xs'>
														Total price:{' '}
													</span>
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
