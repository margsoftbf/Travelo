import React from 'react';
import ListingCard from '../SearchListPage/ListingCard';
import { Attraction } from '@/types/types';

interface SimilarAttractionsProps {
	attractions: Attraction[];
}
const SimilarAttractions: React.FC<SimilarAttractionsProps> = ({
	attractions,
}) => {
	return (
		<div>
			<h2 className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				Similar Attractions
			</h2>
			<div className='flex items-center justify-center w-full'>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					{attractions.map((attraction) => (
						<div key={attraction.id} className='p-4'>
							<ListingCard item={attraction} isSimple={true} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SimilarAttractions;
