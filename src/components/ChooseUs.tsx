import React from 'react';
import {
	Mountain,
	Awwards,
	HappyTraveller,
	PositiveReviews,
	TourComplete,
	RightTopCorner,
	SafetyFirst,
	LowPrice,
	TravelGuide,
	InstantBooking,
} from '../../public/assets/svg';
import CountUp from 'react-countup';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
const stats = [
	{ id: 1, name: 'Happy traveller', value: '5489', icon: HappyTraveller },
	{
		id: 2,
		name: 'Positive Reviews',
		value: '972%',
		icon: PositiveReviews,
	},
	{ id: 3, name: 'Tour Complete', value: '190+', icon: TourComplete },
	{ id: 4, name: 'Awards Winning', value: '327', icon: Awwards },
];

const ChooseUs = () => {
	const { ref, controls } = useScrollAnimation();

	return (
		<motion.div
			id='about'
			className='relative bg-gradient-to-b from-neutral to-light w-full mx-auto py-6'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 1.2, type: 'ease-in' }}
		>
			<div className='max-w-6xl  mx-auto flex w-full flex-col items-center md:flex-row justify-center gap-8 p-4 '>
				<div className='flex flex-col gap-2 w-80 justify-center  h-full md:w-full '>
					<p className='font-coveredByGrace text-2xl md:text-3xl text-primary'>
						Explore the world
					</p>
					<p className='font-dmSans text-3xl md:text-4xl font-bold text-myBlack'>
						Why You Choose Us For{' '}
						<span className='font-coveredByGrace text-primary font-light'>
							adventure
						</span>{' '}
						& Travelling
					</p>
					<p className='font-dmSans text-softGrey text-[14px] md:text-base tracking-tighter'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
						exercitationem ipsam numquam nihil commodi earum nostrum corrupti
						impedit. Nobis, unde.
					</p>
					<div className='boxes grid grid-cols-1 md:grid-cols-2 pt-6 gap-4 gap-x-8'>
						<div className='box flex items-center justify-center gap-2'>
							<div className='flex items-center justify-center w-12 h-12 rounded-full shadow bg-white flex-shrink-0'>
								<SafetyFirst className='w-7 h-7' />
							</div>
							<div className='font-dmSans'>
								<p className=' text-myBlack font-semibold text-base'>
									Safety First Always
								</p>
								<p className='text-xs text-softGrey'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
							</div>
						</div>
						<div className='box flex items-center justify-center gap-2'>
							<div className='flex items-center justify-center w-12 h-12 rounded-full shadow bg-white flex-shrink-0'>
								<LowPrice className='w-7 h-7' />
							</div>
							<div className='font-dmSans'>
								<p className=' text-myBlack font-semibold text-base'>
									Low Price & Friendly
								</p>
								<p className='text-xs text-softGrey'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
							</div>
						</div>
						<div className='box flex items-center justify-center gap-2'>
							<div className='flex items-center justify-center w-12 h-12 rounded-full shadow bg-white flex-shrink-0'>
								<TravelGuide className='w-7 h-7' />
							</div>
							<div className='font-dmSans'>
								<p className=' text-myBlack font-semibold text-base'>
									Trusted Travel Guide
								</p>
								<p className='text-xs text-softGrey'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
							</div>
						</div>
						<div className='box flex items-center justify-center gap-2'>
							<div className='flex items-center justify-center w-12 h-12 rounded-full shadow bg-white flex-shrink-0'>
								<InstantBooking className='w-7 h-7' />
							</div>
							<div className='font-dmSans'>
								<p className=' text-myBlack font-semibold text-base'>
									Instant Booking
								</p>
								<p className='text-xs text-softGrey'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='relative w-80 h-full flex items-center justify-center lg:w-1/2'>
					<div className='w-80 h-96 lg:w-96 lg:h-[400px] lg:ml-auto relative border-8 border-myBlack'>
						<Image
							src='/assets/why-choose-us.webp'
							alt='Dynamic image'
							fill={true}
							className='object-cover'
							quality={100}
							sizes='(max-width: 768px) 768px, (max-width: 1200px) 1200px, 100vw'
							placeholder='blur'
							priority={true}
							blurDataURL='/assets/why-choose-us.webp'
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ChooseUs;
