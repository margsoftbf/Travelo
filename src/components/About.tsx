import React from 'react';
import {
	Mountain,
	Awwards,
	HappyTraveller,
	PositiveReviews,
	TourComplete,
	BuildingsHero,
} from '../../public/assets/svg';
import CountUp from 'react-countup';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

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

const About = () => {
	const { ref, controls } = useScrollAnimation();

	return (
		<motion.div
			id='about'
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
			<BuildingsHero className='w-[2500px] h-[1250px] bottom-0 absolute opacity-40 -z-10' />
			<div className='bg-gradient-to-b from-neutral to-white relative z-10'>
				<div className='max-w-4xl mx-auto flex flex-col md:flex-row md:items-center gap-2 md:gap-6 px-4 pt-6 pb-10 lg:py-6 lg:pb-20'>
					<div className=''>
						<Mountain className='w-16 h-16' />
					</div>
					<div className='flex flex-col justify-between gap-2 md:mt-2'>
						<p className='font-dmSans font-bold text-2xl text-myBlack'>
							Ready to Adventure And Enjoy Natural
						</p>
						<p className='font-dmSans text-[14px] italic'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Obcaecati, pariatur?
						</p>
					</div>
					<div className='md:ml-auto z-30'>
						<ScrollLink
							to='tour'
							smooth={true}
							offset={-50}
							duration={500}
							className='w-36 h-10 mt-2 font-dmSans font-semibold rounded-md bg-primary flex items-center text-white p-2 justify-center flex-shrink-0 hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
						>
							Find More
						</ScrollLink>
					</div>
				</div>
			</div>

			<div className='max-w-6xl mx-auto relative '>
				<div className='grid grid-cols-2 gap-1 overflow-hidden rounded-2xl text-center md:grid-cols-4 -mt-6 mx-4 lg:-mt-14 bg-white'>
					{stats.map((stat) => (
						<div
							key={stat.id}
							className='flex flex-col items-center gap-1 bg-myBlack p-4 z-20'
						>
							<stat.icon className='w-12 h-12 mb-2' />
							<div className='text-base font-dmSans font-semibold leading-6 text-gray-300'>
								{stat.name}
							</div>
							<div className='text-3xl font-semibold tracking-tight text-white'>
								<CountUp end={parseFloat(stat.value)} duration={2.75} />
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='max-w-6xl  mx-auto flex w-full flex-col items-center md:flex-row justify-center gap-4 p-4 '>
				<div className='relative w-80 h-full flex items-center justify-center lg:w-1/2 '>
					<div className='w-80 h-96 lg:w-96 lg:h-[500px] lg:ml-auto relative border-8 border-myBlack '>
						<Image
							src='/assets/about-us-photo.webp'
							alt='Dynamic image'
							fill={true}
							className='object-cover'
							quality={100}
							sizes='(max-width: 768px) 768px, (max-width: 1200px) 1200px, 100vw'
							placeholder='blur'
							priority={true}
							blurDataURL='/assets/about-us-photo.webp'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-2 w-80 justify-center  h-full md:w-full bg-wite z-50'>
					<p className='font-coveredByGrace text-2xl md:text-3xl text-primary'>
						Explore the world
					</p>
					<p className='font-dmSans text-3xl md:text-5xl font-bold text-myBlack'>
						Great Opportunity For{' '}
						<span className='font-coveredByGrace text-primary font-light'>
							adventure
						</span>{' '}
						& Travels
					</p>
					<p className='font-dmSans text-softGrey text-[14px] md:text-base tracking-tighter'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
						exercitationem ipsam numquam nihil commodi earum nostrum corrupti
						impedit. Nobis, unde.
					</p>
					<p className='font-dmSans text-myBlack text-[14px] md:text-base font-semibold lg:mt-4'>
						A Range Of Programs And Supports In The Disability Including:
					</p>
					<div className='flex flex-col gap-3'>
						<div className='flex gap-4 items-center w-full mt-2'>
							<div className='w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0'>
								<FaCheck className='w-2 h-2 text-white' />
							</div>
							<p className='font-dmSans text-softGrey text-xs md:text-[14px]'>
								Discover Great Deals On Hotel Around The World
							</p>
						</div>
						<div className='flex gap-4 items-center'>
							<div className='w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0'>
								<FaCheck className='w-2 h-2 text-white' />
							</div>
							<p className='font-dmSans text-softGrey text-xs md:text-[14px]'>
								Our Tours Are Designed Withpeople
							</p>
						</div>
						<div className='flex gap-4 items-center'>
							<div className='w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0'>
								<FaCheck className='w-2 h-2 text-white' />
							</div>
							<p className='font-dmSans text-softGrey text-xs lg:text-[14px]'>
								Let Your Local Host Tailor The Tourcompletely To Your Wish.
							</p>
						</div>
						<div className='hidden lg:flex gap-4 items-center'>
							<div className='w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0'>
								<FaCheck className='w-2 h-2 text-white' />
							</div>
							<p className='font-dmSans text-softGrey text-xs lg:text-[14px]'>
								24/7 Availability for Any Inquiries and Support.
							</p>
						</div>
						<div className='hidden lg:flex gap-4 items-center'>
							<div className='w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0'>
								<FaCheck className='w-2 h-2 text-white' />
							</div>
							<p className='font-dmSans text-softGrey text-xs lg:text-[14px]'>
								Personalized Itinerary Planning for an Unforgettable Experience.
							</p>
						</div>
						<div className='hidden lg:flex gap-4 items-center'>
							<div className='w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0'>
								<FaCheck className='w-2 h-2 text-white' />
							</div>
							<p className='font-dmSans text-softGrey text-xs lg:text-[14px]'>
								Exclusive Access to Hidden Gems and Local Secrets.
							</p>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
