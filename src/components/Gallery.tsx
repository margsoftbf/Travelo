import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { Autoplay } from 'swiper/modules';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const Gallery = () => {
	const { ref, controls } = useScrollAnimation();
	const images = [
		'/assets/gallery/gallery-1.webp',
		'/assets/gallery/gallery-2.webp',
		'/assets/gallery/gallery-3.webp',
		'/assets/gallery/gallery-4.webp',
		'/assets/gallery/gallery-5.webp',
		'/assets/gallery/gallery-6.webp',
		'/assets/gallery/gallery-7.webp',
		'/assets/gallery/gallery-8.webp',
		'/assets/gallery/gallery-9.webp',
		'/assets/gallery/gallery-10.webp',
		'/assets/gallery/gallery-11.webp',
		'/assets/gallery/gallery-12.webp',
	];

	return (
		<motion.div
			className='mx-auto w-full m-2 p-8 bg-myBlack'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 1.5, type: 'ease-in' }}
		>
			<Swiper
				spaceBetween={30}
				slidesPerView={1}
				freeMode={true}
				loop={true}
				navigation={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: true,
				}}
				modules={[Autoplay]}
				breakpoints={{
					500: {
						slidesPerView: 2,
					},
					750: {
						slidesPerView: 3,
					},
					1000: {
						slidesPerView: 4,
					},
					1250: {
						slidesPerView: 5,
					},
					1500: {
						slidesPerView: 6,
					},
					1750: {
						slidesPerView: 7,
					},
					2000: {
						slidesPerView: 9,
					},
				}}
			>
				{images.map((src, index) => (
					<SwiperSlide key={index}>
						<div className='w-56 h-56 relative'>
							<Image
								src={src}
								alt={`Gallery image ${index + 1}`}
								fill={true}
								className='w-full h-full rounded-md hover:opacity-80 transition duration-300 ease-in-out border border-softGrey object-cover relative'
								sizes='(max-width: 350px) 350px, (max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1200px) 1200px'
							/>
							<div className='absolute top-0 left-0 w-full h-full rounded-md bg-black/80 opacity-0 hover:opacity-100 flex justify-center items-center transition duration-300 ease-in-out'>
								<div className='p-2 bg-white rounded-xl cursor-pointer'>
									<FaInstagram className='text-black text-4xl bg-white' />
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</motion.div>
	);
};

export default Gallery;
