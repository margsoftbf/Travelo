import React from 'react';
import {
	Destination,
	HeroPicksBuildings,
	LowestPrice,
	Receipt,
} from '../../public/assets/svg';

import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const HeroPicks = () => {
	const { ref, controls } = useScrollAnimation();

	return (
		<motion.div
			className='bg-neutral relative h-full'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 0.8, type: 'ease-in' }}
		>
			<div className='absolute bottom-0 flex'>
				<HeroPicksBuildings className='hidden md:block w-96 h-24 ' />
				<HeroPicksBuildings className='hidden md:block w-96 h-24 ' />
				<HeroPicksBuildings className='hidden md:block w-96 h-24 ' />
				<HeroPicksBuildings className='hidden md:block w-96 h-24 ' />
				<HeroPicksBuildings className='hidden md:block w-96 h-24 ' />
				<HeroPicksBuildings className='hidden md:block w-96 h-24 ' />
				<HeroPicksBuildings className='hidden md:block w-96 h-24 ' />
			</div>
			<div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center px-2 py-6 pt-28 md:pt-6 md:pb-28 gap-4 md:gap-8'>
				<div className='flex justify-center items-center gap-3 '>
					<div className='w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 hover:bg-myBlack duration-300 ease-in-out transition'>
						<LowestPrice className='w-7 h-7 text-white' />
					</div>
					<div className='min-w-[100px]'>
						<p className='font-dmSans text-myBlack text-base font-semibold'>
							Best Price Guarantee
						</p>
						<p className='font-dmSans text-softGrey text-[10px] lg:text-sm'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</p>
					</div>
				</div>
				<div className='flex justify-center items-center gap-3 '>
					<div className='w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 hover:bg-myBlack duration-300 ease-in-out transition'>
						<Receipt className='w-7 h-7 text-white' />
					</div>
					<div className='min-w-[100px]'>
						<p className='font-dmSans text-myBlack text-base font-semibold'>
							Easy & Quick Booking
						</p>
						<p className='font-dmSans text-softGrey text-[10px] lg:text-sm'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</p>
					</div>
				</div>
				<div className='flex justify-center items-center gap-3 '>
					<div className='w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 hover:bg-myBlack duration-300 ease-in-out transition'>
						<Destination className='w-7 h-7 text-white' />
					</div>
					<div className='min-w-[100px]'>
						<p className='font-dmSans text-myBlack text-base font-semibold'>
							Best Tour Selection
						</p>
						<p className='font-dmSans text-softGrey text-[10px] lg:text-sm'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default HeroPicks;
