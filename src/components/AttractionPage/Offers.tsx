import { Attraction } from '@/types/types';
import React from 'react';

interface OfferListItem {
	url: string;
	price: string;
	title: string;
	productCode: string;
	partner: string;
	imageUrl: string;
	primaryCategory: string;
}

interface AttractionOffersProps {
	attraction: OfferListItem[];
}

const getTomorrowDate = () => {
	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	return tomorrow.toISOString().split('T')[0];
};

const Offers = ({ attraction }: AttractionOffersProps) => {
	const tomorrow = getTomorrowDate();

	if (!attraction) {
		return <div>No offers available</div>;
	}

	return (
		<div className='w-full mt-4 flex flex-col gap-2'>
			<p className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				Tickets
			</p>
			<table className='w-full text-sm text-left text-gray-500 mt-2'>
				<thead className='text-xs text-white uppercase bg-primary'>
					<tr>
						<th scope='col' className='px-6 py-3'>
							Date
						</th>
						<th scope='col' className='px-6 py-3'>
							Name
						</th>
						<th scope='col' className='px-6 py-3'>
							Price
						</th>
					</tr>
				</thead>
				<tbody>
					{attraction.map((attraction, index) => (
						<tr
							key={index}
							className='bg-gray-100 text-softGrey border-b group hover:bg-myBlack duration-300 cursor-pointer'
						>
							<td className='px-6 py-4 font-dmSans group-hover:text-white'>
								{tomorrow}
							</td>
							<td className='px-6 py-4 font-dmSans group-hover:text-white'>
								{attraction.primaryCategory}
							</td>
							<td className='px-6 py-4 font-dmSans text-myBlack font-semibold  group-hover:text-white'>
								{attraction.price}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Offers;
