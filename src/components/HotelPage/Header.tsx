import React from 'react';
import {
	StarIcon,
	MapPinIcon,
	UserIcon,
	PhoneIcon,
	HomeIcon,
	GlobeAmericasIcon,
} from '@heroicons/react/24/solid';
import HotelInfoItem from './HotelInfoItem';
import { Hotel } from '@/types/types';

interface HotelHeaderProps {
	hotel: Hotel;
}

const HotelHeader: React.FC<HotelHeaderProps> = ({ hotel }) => {
	const pricePerNight = hotel.offers[0]?.pricePerNight ?? 'N/A';

	return (
		<div className='bg-neutral w-full'>
			<div className=' max-w-7xl mx-auto flex flex-col items-center py-4 lg:flex-row gap-4'>
				<div className='lg:w-1/3 px-2'>
					<h2 className='font-dmSans text-myBlack text-2xl font-bold tracking-tighter'>
						{hotel.name}
					</h2>
					<p className='font-dmSans'>
						<span className='text-myBlack font-bold text-lg tracking-tighter'>
							${pricePerNight}
						</span>
						<span className='text-softGrey font-semibold'>
							{' / Per Person'}
						</span>
					</p>
				</div>
				<div className='lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4 p-2'>
					<HotelInfoItem
						Icon={
							<MapPinIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Location'
						value={hotel.locationString}
					/>
					<HotelInfoItem
						Icon={
							<PhoneIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Phone Number'
						value={hotel.phone}
					/>
					<HotelInfoItem
						Icon={
							<HomeIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Rooms available'
						value={hotel.numberOfRooms}
					/>
					<HotelInfoItem
						Icon={
							<GlobeAmericasIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out ' />
						}
						label='Website'
						isClickable={true}
						value={
							hotel.website.length > 30
								? `${hotel.website.slice(0, 30)}...`
								: hotel.website
						}
					/>
					<HotelInfoItem
						Icon={
							<StarIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Ranking'
						value={hotel.rankingString}
					/>
					<HotelInfoItem
						Icon={
							<StarIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Rating'
						value={hotel.rating}
					/>
				</div>
			</div>
		</div>
	);
};

export default HotelHeader;
