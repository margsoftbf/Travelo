import Link from 'next/link';
import { Hotel, Restaurant, Attraction } from '@/types/types';
import Image from 'next/image';
import {
	HeartIcon,
	StarIcon,
	MapPinIcon,
	UserIcon,
} from '@heroicons/react/24/solid';
import { ClockIcon } from '@heroicons/react/24/outline';

interface ListingCardProps {
	item: Hotel | Restaurant | Attraction;
}

const ListingCard: React.FC<ListingCardProps> = ({ item }) => {
	const detailPageLink =
		item.type === 'HOTEL'
			? `/hotels/${item.id}`
			: item.type === 'RESTAURANT'
			? `/restaurants/${item.id}`
			: `/attractions/${item.id}`;

	return (
		<Link
			href={detailPageLink}
			className='border rounded-lg shadow text-left relative w-full h-96 flex flex-col bg-white group transition duration-300 ease-in-out'
			passHref
		>
			<div className='w-full h-2/5 relative'>
				{item.image && (
					<>
						<Image
							src={item.image}
							alt={item.name}
							fill={true}
							className='object-cover rounded-t-lg'
							quality={100}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw'
							placeholder='blur'
							blurDataURL={item.image}
						/>
						<div className='absolute w-full h-full bg-black/10 z-10 rounded-t-lg group-hover:bg-black/60 transition duration-300 ease-in-out'></div>
						<p className='absolute bg-black/60 rounded-full z-30 p-2 top-2 right-2 group-hover:bg-white group duration-300 transition ease-in-out'>
							<HeartIcon className='w-4 h-4 text-white group-hover:text-black' />
						</p>
						<p className='absolute bg-primary hover:bg-black z-30 p-1 px-2 top-3 left-2  duration-300 transition ease-in-out text-[10px] text-white font-semibold font-dmSans rounded-md'>
							{item.type === 'HOTEL' && '10% Off'}
							{item.type === 'RESTAURANT' && 'Lunch Special'}
							{item.type === 'ATTRACTION' && 'Group Offer'}
						</p>
					</>
				)}
			</div>
			<div className='relative w-full h-3/5 p-4 px-6 flex flex-col'>
				<h2 className='font-dmSans text-xl text-left font-semibold text-myBlack tracking-tighter line-clamp-1'>
					{item.localName}
				</h2>
				<p className='text-left font-dmSans text-softGrey text-sm font-medium leading-5 mt-1 tracking-tighter line-clamp-2'>
					{item.description ||
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas iste impedit ad quae.'}
				</p>
				<div className='bg-neutral p-2 rounded-md mt-4 flex flex-col gap-2 group-hover:bg-primary transition duration-400 ease-in-out'>
					<p className='flex items-center gap-1 font-dmSans text-xs font-medium leading-3 tracking-tight text-softGrey group-hover:text-white mt-2'>
						<StarIcon className='w-4 h-4 text-primary group-hover:text-white ' />
						<span>{item.rating}</span>
						<span>({item.numberOfReviews} Reviews)</span>
					</p>
					<p className='flex items-center gap-1 font-dmSans text-xs font-medium leading-3 tracking-tight text-softGrey group-hover:text-white transition duration-400 ease-in-out'>
						<MapPinIcon className='w-4 h-4 text-primary flex-shrink-0 group-hover:text-white transition duration-300 ease-in-out' />
						<span className='line-clamp-1'>
							{item.localAddress ||
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
						</span>
					</p>
					<div className='border-t border-softGrey/20 group-hover:border-white flex flex-row justify-between py-2'>
						<div className='flex flex-row gap-2  transition duration-300 ease-in-out'>
							<p className='flex items-center font-dmSans text-xs font-medium  text-softGrey gap-1 group-hover:text-white'>
								<ClockIcon className='w-4 h-4 text-primary group-hover:text-white' />
								{item.type === 'HOTEL' && '3 Day'}
								{item.type === 'RESTAURANT' && '10:00-17:00'}
								{item.type === 'ATTRACTION' && '10:00-20:00'}
							</p>
							<p className='flex items-center font-dmSans text-xs font-medium  text-softGrey gap-1 tracking-wider group-hover:text-white'>
								<UserIcon className='w-4 h-4 text-primary group-hover:text-white' />
								{item.type === 'HOTEL' && '12+'}
								{item.type === 'RESTAURANT' && '3+'}
								{item.type === 'ATTRACTION' && '1+'}
							</p>
						</div>
						<div className='group-hover transition duration-300 ease-in-out'>
							{(item.type === 'HOTEL' || item.type === 'RESTAURANT') &&
								'priceRange' in item && (
									<p className='text-base font-bold tracking-tighter text-myBlack group-hover:text-white'>
										{item.priceRange}
									</p>
								)}
							{item.type === 'ATTRACTION' && 'offerGroup' in item && (
								<p className='text-base font-bold tracking-tighter text-myBlack group-hover:text-white'>
									{(item as Attraction).offerGroup.offerList[0].price}
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ListingCard;
