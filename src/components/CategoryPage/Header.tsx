import React from 'react';
import { CategorySelectorTypes } from '@/types/types';
import HeaderAttributItem from '../ui/HeaderAttributItem';
import {
	GlobeAmericasIcon,
	MapPinIcon,
	PhoneIcon,
	StarIcon,
	TagIcon,
} from '@heroicons/react/24/solid';

interface CategoryHeaderProps {
	data: CategorySelectorTypes;
}
const Header = ({ data }: CategoryHeaderProps) => {
	return (
		<div className='bg-neutral w-full'>
			<div className='max-w-7xl mx-auto flex flex-col items-center py-4 lg:flex-row gap-4'>
				<div className='lg:w-1/3 px-2'>
					<h2 className='font-dmSans text-myBlack text-2xl font-bold tracking-tighter'>
						{data.name}
					</h2>
					<p className='font-dmSans'>
						<span className='text-myBlack font-bold text-lg tracking-tighter'>
							{data.priceRange}
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
						value={data.localAddress}
					/>
					<HeaderAttributItem
						Icon={
							<PhoneIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Phone Number'
						value={data.phone}
					/>
					<HeaderAttributItem
						Icon={
							<MapPinIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Place'
						value={data.localName}
					/>
					<HeaderAttributItem
						Icon={
							<GlobeAmericasIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out ' />
						}
						label='Website'
						isClickable={true}
						value={
							data.webUrl.length > 30
								? `${data.webUrl.slice(0, 30)}...`
								: data.webUrl
						}
					/>
					<HeaderAttributItem
						Icon={
							<StarIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Ranking'
						value={data.rankingString}
					/>
					<HeaderAttributItem
						Icon={
							<StarIcon className='w-6 h-6 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						}
						label='Rating'
						value={data.rating}
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
