import { RootState } from '@/store/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { removeAttractionBooking } from '@/store/cartSlice';
import TableHeader from './AttractionReservations/TableHead';

const AttractionReservation = () => {
	const { attractionBooking } = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();

	const rowClasses =
		'whitespace-nowrap px-3 py-5 text-sm    text-myBlack font-semibold lg:text-base';
	return (
		<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
			<h2 className='mx-8 relative font-dmSans font-bold text-myBlack border-b border-b-primary text-xl'>
				Attraction
			</h2>
			<div className='inline-block min-w-full py-2 align-middle px-2 sm:px-6 lg:px-8'>
				<table className='min-w-full divide-y divide-gray-300 border-b'>
					<TableHeader />
					<tbody className='divide-y divide-gray-200 bg-white'>
						{attractionBooking.map((booking) => {
							return (
								<tr key={booking.bookingId} className='hover:bg-gray-100'>
									<td className='whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>
										<div className='flex items-center'>
											<div className='h-16 w-16 md:h-20 md:w-20 flex-shrink-0'>
												<img
													className='h-16 w-16 md:h-20 md:w-20 rounded-md'
													src={booking.attractionImage}
													alt='hotel image'
												/>
											</div>
											<div className='ml-4 hidden sm:table-cell'>
												<div className='font-medium lg:text-base'>
													{booking.attractionName}
												</div>
												<div className='mt-1 text-gray-500'>
													{booking.attractionLocation}
												</div>
											</div>
										</div>
									</td>
									<td className={`${rowClasses} hidden md:table-cell`}>
										{moment(booking.date).format('DD MMM YYYY')}
									</td>
									<td className={`${rowClasses} hidden lg:table-cell`}>
										{booking.name}
									</td>
									<td className={`${rowClasses} hidden lg:table-cell`}>
										{booking.email}
									</td>
									<td className={`${rowClasses}`}>{booking.numberOfPeople}</td>
									<td className={`${rowClasses}`}>
										{booking.selectedOffer.price}
									</td>
									<td className='whitespace-nowrap px-3 py-5 text-sm text-red-500'>
										<button
											onClick={() => {
												if (booking.bookingId) {
													dispatch(removeAttractionBooking(booking.bookingId));
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

export default AttractionReservation;
