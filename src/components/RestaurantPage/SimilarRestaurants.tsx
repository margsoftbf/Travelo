import React from 'react';
import { Restaurant } from '@/types/types';
import ListingCard from '../ui/ListingCard';

interface SimilarRestaurantProps {
	restaurants: Restaurant[];
}

const SimilarRestaurants = ({
	restaurants,
}: SimilarRestaurantProps) => {
	return (
		<div>
			<h2 className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				Similar Restaurants
			</h2>
			<div className='flex items-center justify-center w-full'>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					{restaurants.map((restaurant) => (
						<div key={restaurant.id} className='p-4'>
							<ListingCard item={restaurant} isSimple={true} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SimilarRestaurants;
