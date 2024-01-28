import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import attractionData from '../data/Attractions.json';
import ListingCard from './SearchListPage/ListingCard';
import { Attraction } from '@/types/types';
const MostFavouritePlace = () => {
	const { ref, controls } = useScrollAnimation();

	return (
		<motion.div
			id='tour'
			className='relative w-full mx-auto'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 1.2, type: 'ease-in' }}
		>
			<div className='bg-neutral relative -z-10'>
				<div className='max-w-4xl mx-auto flex flex-col justify-center items-center gap-2 pt-6 pb-12'>
					<p className='font-dmSans font-bold text-base text-primary tracking-wider'>
						FEATURED TOURS
					</p>
					<p className='font-dmSans text-3xl font-bold text-center text-myBlack'>
						Most Favourite Tour Place
					</p>
				</div>
			</div>
			<div className='max-w-6xl mx-auto flex items-center justify-center w-full -mt-10'>
				<div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4'>
					{attractionData.slice(0, 4).map((place) => (
						<div key={place.id} className='p-4'>
							<ListingCard item={place as Attraction} isSimple={true} />
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default MostFavouritePlace;
