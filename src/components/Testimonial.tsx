import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import {
	Apostrophe,
	Object,
	TestimonialBackground,
} from '../../public/assets/svg';
import { StarIcon } from '@heroicons/react/24/solid';
import { testimonials } from '@/data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Testimonial = () => {
	const { ref, controls } = useScrollAnimation();

	return (
		<motion.div
			className='relative w-full mx-auto bg-neutral py-4 overflow-hidden'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 1.2, type: 'ease-in' }}
		>
			<div className='flex flex-row justify-end items-end'>
				<Object className='w-1/2 h-full absolute bottom-0 left-0' />
				<Object className='w-1/2 h-full absolute bottom-0 right-0' />
			</div>

			<div className='max-w-8xl mx-auto relative'>
				<div className='max-w-4xl mx-auto flex flex-col justify-center items-center gap-2 pt-6 pb-4 px-6 relative'>
					<p className='font-dmSans font-bold text-base text-primary tracking-wider'>
						TESTIMONIAL
					</p>
					<p className='font-dmSans text-3xl font-bold text-center text-myBlack'>
						See What They're Talking About Our Agency
					</p>
				</div>

				<div className='mt-6 gap-x-4 gap-y-10 sm:gap-x-6  md:gap-y-0 lg:gap-x-8'>
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						pagination={{ clickable: true }}
						speed={1000}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						loop={true}
						grabCursor={true}
						modules={[Autoplay]}
						breakpoints={{
							768: {
								slidesPerView: 2,
							},
							1280: {
								slidesPerView: 3,
							},
						}}
						className='max-w-xs  md:max-w-4xl xl:max-w-7xl  h-72'
					>
						{testimonials.map((data) => (
							<SwiperSlide key={data.id}>
								<div className='flex justify-center items-center relative bg-white w-80 md:w-96 h-60 rounded-2xl mt-6'>
									<div className='w-20 h-20 border-primary rounded-full absolute -top-5 bg-myBlack border-4 left-6'>
										<img
											src={data.personImg}
											className='object-cover object-center w-full h-full'
											alt={data.personImgAlt}
										/>
									</div>
									<div className='absolute top-2 left-28 ml-1 flex flex-col font-dmSans'>
										<p className='text-myBlack font-semibold'>{data.name}</p>
										<p className='text-softGrey text-xs'>{data.title}</p>
									</div>
									<div className='hidden absolute top-4 right-4 md:flex '>
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												className={`w-4 h-4 ${
													data.rating > rating
														? 'text-primary'
														: 'text-gray-200'
												}
                                'h-5 w-5 flex-shrink-0'
                                `}
												aria-hidden='true'
											/>
										))}
									</div>
									<div className='absolute left-8 top-20 max-w-64 md:max-w-72 max-h-32 overflow-hidden text-[14px] text-softGrey'>
										<p>{data.text}</p>
									</div>
									<Apostrophe className='-bottom-6 left-8 w-10 h-10 absolute' />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</motion.div>
	);
};

export default Testimonial;
