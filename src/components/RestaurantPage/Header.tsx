import { Restaurant } from '@/types/types';
import React from 'react';
import {
	StarIcon,
	MapPinIcon,
	PhoneIcon,
	GlobeAmericasIcon,
	ClockIcon,
} from '@heroicons/react/24/solid';
import HeaderAttributItem from '../ui/HeaderAttributItem';


interface RestaurantHeaderProps {
	restaurant: Restaurant;
}

interface WeekRange {
	open: number;
	openHours: string;
	close: number;
	closeHours: string;
}

interface HoursProps {
	weekRanges: WeekRange[][];
	timezone: string;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
	function formatHours(hours: HoursProps): string {
		const dayHours = restaurant.hours.weekRanges[0][0];
		return `${dayHours.openHours} - ${dayHours.closeHours}`;
	}

	return (
		<div className='bg-neutral w-full'>
			<div className='max-w-7xl mx-auto flex flex-col items-center py-4 lg:flex-row gap-4'>
				<div className='lg:w-1/3 px-2'>
					<h2 className='font-dmSans text-myBlack text-2xl font-bold tracking-tighter'>
						{restaurant.name}
					</h2>
					<p className='font-dmSans'>
						<span className='text-myBlack font-bold text-lg tracking-tighter'>
							{restaurant.priceRange}
						</span>
						<span className='text-softGrey font-semibold'>
							{' / Price Range'}
						</span>
					</p>
				</div>
				<div className='lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4 p-2'>
					<HeaderAttributItem
						Icon={
							<MapPinIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Location'
						value={restaurant.locationString}
					/>
					<HeaderAttributItem
						Icon={
							<PhoneIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Phone Number'
						value={restaurant.phone}
					/>
					<HeaderAttributItem
						Icon={
							<ClockIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Open hours'
						value={formatHours(restaurant.hours)}
					/>
					<HeaderAttributItem
						Icon={
							<GlobeAmericasIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out ' />
						}
						label='Website'
						isClickable={true}
						value={
							restaurant.website.length > 30
								? `${restaurant.website.slice(0, 30)}...`
								: restaurant.website
						}
					/>
					<HeaderAttributItem
						Icon={
							<StarIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Ranking'
						value={restaurant.rankingString}
					/>
					<HeaderAttributItem
						Icon={
							<StarIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Rating'
						value={restaurant.rating}
					/>
				</div>
			</div>
		</div>
	);
};

export default RestaurantHeader;
