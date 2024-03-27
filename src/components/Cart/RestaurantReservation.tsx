import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { removeRestaurantBooking } from '@/store/cartSlice';
import moment from 'moment';
import TableHead from './RestaurantReservations/TableHead';

const RestaurantReservation = () => {
	const { restaurantBooking } = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();

	const rowClasses =
		'whitespace-nowrap px-3 py-5 text-sm text-myBlack font-semibold lg:text-base';
	return (
		<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
			<h2 className='mx-8 relative font-dmSans font-bold text-myBlack border-b border-b-primary text-xl'>
				Restaurant
			</h2>
			<div className='inline-block min-w-full py-2 align-middle px-2 sm:px-6 lg:px-8'>
				<table className='min-w-full divide-y divide-gray-300 border-b'>
					<TableHead />
					<tbody className='divide-y divide-gray-200 bg-white'>
						{restaurantBooking.map((booking) => {
							return (
								<tr key={booking.bookingId} className='hover:bg-gray-100'>
									<td className='whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>
										<div className='flex items-center'>
											<div className='h-16 w-16 md:h-20 md:w-20 flex-shrink-0'>
												<img
													className='h-16 w-16 md:h-20 md:w-20 rounded-md'
													src={booking.restaurantImage}
													alt='hotel image'
												/>
											</div>
											<div className='ml-4 hidden sm:table-cell'>
												<div className='font-medium lg:text-base text-gray-900'>
													{booking.restaurantName}
												</div>
												<div className='mt-1 text-gray-500'>
													{booking.restaurantLocation}
												</div>
											</div>
										</div>
									</td>
									<td className={`${rowClasses} hidden md:table-cell`}>
										{moment(booking.date).format('DD MMM YYYY')}
									</td>
									<td className={`${rowClasses} hidden md:table-cell`}>
										{booking.time}
									</td>
									<td className={`${rowClasses} hidden lg:table-cell`}>
										{booking.name}
									</td>
									<td className={`${rowClasses} hidden lg:table-cell`}>
										{booking.email}
									</td>
									<td className={`${rowClasses}`}>{booking.numberOfPeople}</td>
									<td className={`${rowClasses}`}>${booking.price}</td>
									<td className='whitespace-nowrap px-3 py-5 text-sm text-red-500'>
										<button
											onClick={() => {
												if (booking.bookingId) {
													dispatch(removeRestaurantBooking(booking.bookingId));
												}
											}}
											className='inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 cursor-pointer'
											aria-label='Remove'
										>
											Remove
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RestaurantReservation;
