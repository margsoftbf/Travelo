import { useSelector, useDispatch } from 'react-redux';
import {
	removeBooking,
	updateAdults,
	updateChildren,
} from '@/store/cartSlice';
import { RootState } from '@/store/store';
import moment from 'moment';
import { getNumberOfNights } from '@/types/types';


const HotelsReservation = () => {
    
	const { bookings} = useSelector(
		(state: RootState) => state.cart
	);
	const dispatch = useDispatch();



	const handleAdultsChange = (bookingId: string, change: number) => {
		const booking = bookings.find((b) => b.bookingId === bookingId);
		if (booking && booking.bookingId) {
			const newAdults = Math.max(1, Math.min(4, booking.adults + change));
			dispatch(
				updateAdults({ bookingId: booking.bookingId, adults: newAdults })
			);
		}
	};

	const handleChildrenChange = (bookingId: string, change: number) => {
		const booking = bookings.find((b) => b.bookingId === bookingId);
		if (booking && booking.bookingId) {
			const newChildren = Math.max(0, Math.min(4, booking.children + change));
			dispatch(
				updateChildren({ bookingId: booking.bookingId, children: newChildren })
			);
		}
	};

	return (
		<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 '>
			<h2 className='mx-8 relative font-dmSans font-bold text-myBlack border-b border-b-primary text-xl'>
				Hotels
			</h2>
			<div className='inline-block min-w-full py-2 align-middle px-2 sm:px-6 lg:px-8'>
				<table className='min-w-full divide-y divide-gray-300 border-b'>
					<thead>
						<tr>
							<th
								scope='col'
								className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
							>
								Item
							</th>
							<th
								scope='col'
								className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden md:table-cell'
							>
								Check-in Date
							</th>
							<th
								scope='col'
								className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden md:table-cell'
							>
								Check-out Date
							</th>
							<th
								scope='col'
								className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'
							>
								Adults
							</th>
							<th
								scope='col'
								className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'
							>
								Children
							</th>
							<th
								scope='col'
								className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
							>
								Price
							</th>
							<th
								scope='col'
								className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
							>
								Remove
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 bg-white'>
						{bookings.map((booking) => {
							const numberOfNights = getNumberOfNights(
								booking.checkInDate ?? '',
								booking.checkOutDate ?? ''
							);
							const subtotal = numberOfNights * booking.pricePerNight;

							return (
								<tr key={booking.bookingId} className='hover:bg-gray-100'>
									<td className='whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>
										<div className='flex items-center'>
											<div className='h-16 w-16 md:h-20 md:w-20 flex-shrink-0'>
												<img
													className='h-16 w-16 md:h-20 md:w-20 rounded-md'
													src={booking.hotelImage}
													alt='hotel image'
												/>
											</div>
											<div className='ml-4 hidden sm:table-cell'>
												<div className='font-medium lg:text-base text-gray-900'>
													{booking.hotelName}
												</div>
												<div className='mt-1 text-gray-500'>
													{booking.hotelLocation}
												</div>
											</div>
										</div>
									</td>
									<td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500 hidden md:table-cell'>
										<div className='text-myBlack font-semibold lg:text-base'>
											{moment(booking.checkInDate).format('DD MMM YYYY')}
										</div>
									</td>
									<td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500 hidden md:table-cell'>
										<div className='text-myBlack font-semibold lg:text-base'>
											{moment(booking.checkOutDate).format('DD MMM YYYY')}
										</div>
									</td>
									<td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500 hidden lg:table-cell'>
										<div className='text-myBlack font-semibold w-20 h-8 wrapper flex items-center justify-center rounded-md  border'>
											<button
												className='w-full text-center font-medium font-dmSans text-xl'
												onClick={() => {
													if (booking.bookingId) {
														handleAdultsChange(booking.bookingId, -1);
													}
												}}
											>
												-
											</button>
											<span className='w-full text-center font-medium font-dmSans text-base border-r-2 border-l-2'>
												{booking.adults}
											</span>
											<button
												className='w-full text-center font-medium font-dmSans text-xl'
												onClick={() => {
													if (booking.bookingId) {
														handleAdultsChange(booking.bookingId, 1);
													}
												}}
											>
												+
											</button>
										</div>
									</td>
									<td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500 hidden lg:table-cell'>
										<div className='text-myBlack font-semibold w-20 h-8 wrapper flex items-center justify-center rounded-md  border'>
											<button
												className='w-full text-center font-medium font-dmSans text-xl'
												onClick={() => {
													if (booking.bookingId) {
														handleChildrenChange(booking.bookingId, -1);
													}
												}}
											>
												-
											</button>
											<span className='w-full text-center font-medium font-dmSans text-base border-r-2 border-l-2'>
												{booking.children}
											</span>
											<button
												className='w-full text-center font-medium font-dmSans text-xl'
												onClick={() => {
													if (booking.bookingId) {
														handleChildrenChange(booking.bookingId, 1);
													}
												}}
											>
												+
											</button>
										</div>
									</td>
									<td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
										<div className='text-myBlack font-semibold lg:text-base'>
											${subtotal.toFixed(2)}
										</div>
									</td>
									<td className='whitespace-nowrap px-3 py-5 text-sm text-red-500'>
										<button
											onClick={() => {
												if (booking.bookingId) {
													dispatch(removeBooking(booking.bookingId));
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

export default HotelsReservation
