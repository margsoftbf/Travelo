import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import hotelsData from '../../data/Hotels.json';
import { MapPinIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
const LastMinute = () => {
	const [randomHotels, setRandomHotels] = useState<any[]>([]);

	useEffect(() => {
		const getRandomHotels = () => {
			const shuffled = [...hotelsData].sort(() => 0.5 - Math.random());
			const selectedHotels = shuffled.slice(0, 3).map((hotel) => ({
				...hotel,
			}));
			return selectedHotels;
		};

		setRandomHotels(getRandomHotels());
	}, []);

	return (
		<div className='p-4 border rounded shadow z-10 bg-white  space-y-3 relative flex flex-col gap-1'>
			<h2 className='text-myBlack font-dmSans text-xl font-bold leading-6 tracking-tight'>
				Last Minute
			</h2>
			<div className='border-b border-primary'></div>
			<div>
				{randomHotels.map((hotel, index) => (
					<Link
						key={index}
						href={`/hotel/${hotel.id}`}
						passHref
						className='flex flex-row gap-2 relative border-b py-3 group'
					>
						<div className='flex items-center justify-center'>
							<div className='w-20 h-20 relative'>
								<Image
									src={hotel.image}
									alt={hotel.name}
									fill={true}
									className='object-cover rounded-lg'
									quality={100}
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw'
									placeholder='blur'
									blurDataURL={hotel.image}
								/>
							</div>
						</div>
						<div className='flex flex-col gap-1 group-hover:bg-primary transition duration-500 ease-linear rounded-lg px-2 w-full'>
							<p className='text-base font-semibold tracking-tighter text-primary group-hover:text-white'>
								${hotel.offers[0]?.pricePerNight || '0'}
							</p>
							<h2 className='font-dmSans text-base text-left font-semibold text-myBlack tracking-tighter line-clamp-1 group-hover:text-white transition duration-400 ease-linear'>
								{hotel.localName}
							</h2>
							<p className='flex items-center gap-1 font-dmSans text-xs font-medium leading-3 tracking-tight text-softGrey group-hover:text-white transition duration-400 ease-linear'>
								<MapPinIcon className='w-4 h-4 text-primary flex-shrink-0 group-hover:text-white transition duration-400 ease-linear' />
								<span className='line-clamp-1'>
									{hotel.localAddress ||
										'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
								</span>
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default LastMinute;
