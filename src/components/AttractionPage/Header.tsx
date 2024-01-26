import { Attraction } from '@/types/types';
import React from 'react';
import HeaderAttributItem from '../ui/HeaderAttributItem';
import {
	GlobeAmericasIcon,
	MapPinIcon,
	PhoneIcon,
	StarIcon,
    TagIcon
} from '@heroicons/react/24/solid';

interface AttractionHeaderProps {
	attraction: Attraction;
}

const AttractionHeader: React.FC<AttractionHeaderProps> = ({ attraction }) => {
	return (
		<div className='bg-neutral w-full'>
			<div className='max-w-7xl mx-auto flex flex-col items-center py-4 lg:flex-row gap-4'>
				<div className='lg:w-1/3 px-2'>
					<h2 className='font-dmSans text-myBlack text-2xl font-bold tracking-tighter'>
						{attraction.name}
					</h2>
					<p className='font-dmSans'>
						<span className='text-myBlack font-bold text-lg tracking-tighter'>
							{attraction.offerGroup.lowestPrice}
						</span>
						<span className='text-softGrey font-semibold'>
							{' / Lowest Price'}
						</span>
					</p>
				</div>
				<div className='lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4 p-2'>
					<HeaderAttributItem
						Icon={
                            <MapPinIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Location'
						value={attraction.locationString}
					/>
					<HeaderAttributItem
						Icon={
                            <PhoneIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Phone Number'
						value={attraction.phone}
					/>
                        <HeaderAttributItem
                            Icon={
                                <MapPinIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
                            }
                            label='Place'
                            value={attraction.localName}
                        />
					<HeaderAttributItem
						Icon={
							<GlobeAmericasIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out ' />
						}
						label='Website'
						isClickable={true}
						value={
							attraction.website.length > 30
								? `${attraction.website.slice(0, 30)}...`
								: attraction.website
						}
					/>
					<HeaderAttributItem
						Icon={
							<StarIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Ranking'
						value={attraction.rankingString}
					/>
					<HeaderAttributItem
						Icon={
							<StarIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Rating'
						value={attraction.rating}
					/>
				</div>
			</div>
		</div>
	);
};

export default AttractionHeader;
