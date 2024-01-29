import React from 'react';
import { Hotel } from '@/types/types';
import ListingCard from '../ui/ListingCard';

interface SimilarHotelsProps {
	hotels: Hotel[];
}
const SimilarHotels: React.FC<SimilarHotelsProps> = ({ hotels }) => {
	return (
		<div>
			<h2 className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				Similar Hotels
			</h2>
			<div className='flex items-center justify-center w-full'>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					{hotels.map((hotel) => (
						<div key={hotel.id} className='p-4'>
							<ListingCard item={hotel} isSimple={true} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SimilarHotels;
