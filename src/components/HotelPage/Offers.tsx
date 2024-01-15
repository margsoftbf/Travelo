import React from 'react';
import { Offer } from '@/types/types';

interface OffersTableProps {
	offers: Offer[];
}

const Offers: React.FC<OffersTableProps> = ({ offers }) => {
	const getTodayAndTomorrowDates = () => {
		const today = new Date();
		const tomorrow = new Date(today);
		tomorrow.setDate(tomorrow.getDate() + 1);

		return {
			today: today.toISOString().split('T')[0],
			tomorrow: tomorrow.toISOString().split('T')[0],
		};
	};

	const { today, tomorrow } = getTodayAndTomorrowDates();
	return (
		<div className='w-full mt-4 flex flex-col gap-2'>
			<p className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				Offers
			</p>
			<table className='w-full text-sm text-left text-gray-500 mt-2'>
				<thead className='text-xs text-white uppercase bg-primary'>
					<tr>
						<th scope='col' className='hidden sm:block px-6 py-3'>
							Date From - To
						</th>
						<th scope='col' className='px-6 py-3'>
							Vendor
						</th>
						<th scope='col' className='px-6 py-3'>
							Price/Night
						</th>
					</tr>
				</thead>
				<tbody>
					{offers.map((offer, index) => (
						<tr
							key={index}
							className='bg-gray-100 border-b group hover:bg-myBlack duration-300'
						>
							<td className='hidden sm:block px-6 py-4 line-clamp-1 font-dmSans group-hover:text-white'>{`${today} - ${tomorrow}`}</td>
							<td className='px-6 py-4 font-dmSans group-hover:text-white'>
								{offer.vendor}
							</td>
							<td className='px-6 py-4 font-dmSans group-hover:text-white'>
								<span className='text-myBlack font-semibold group-hover:text-white'>
									$
								</span>
								{offer.pricePerNight ? offer.pricePerNight : 'N/A'}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Offers;
