import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SearchBar from './SearchBar/SearchBar';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { AnimatePresence, motion } from 'framer-motion';
import { text } from 'stream/consumers';
import { HeroTopTitle, HeroUnderline } from '../../public/assets/svg';

const Hero = () => {
	const { ref, controls } = useScrollAnimation();

	const [currentIndex, setCurrentIndex] = useState(0);
	const texts = [
		{ title: 'Peace & Serenity', subtitle: 'Find Your Inner Calm' },
		{ title: 'Adventure & Thrills', subtitle: 'Embrace The Excitement' },
		{ title: 'Culture & Heritage', subtitle: 'Discover The Roots' },
	];

	const images = [
		'/assets/hero/heroImageOne.webp',
		'/assets/hero/heroImageTwo.webp',
		'/assets/hero/heroImageThree.webp',
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<motion.div
			className='flex flex-col  items-center w-full h-[500px] md:h-[450px] lg:h-96 bg-myBlack relative'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 0.8, type: 'ease-in' }}
		>
			<motion.div
				key={currentIndex}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
				className='absolute top-0 left-0 w-full h-full'
			>
				<Image
					src={images[currentIndex]}
					alt='Dynamic image'
					fill={true}
					className='object-cover'
					quality={100}
					placeholder='blur'
					priority={true}
					blurDataURL={images[currentIndex]}
				/>
			</motion.div>
			<div className='absolute bg-myBlack w-full h-full z-20 opacity-60'></div>
			<AnimatePresence>
				<div className='relative z-30 flex flex-col items-center text-center mt-6'>
					<motion.div
						key={`SVG-${currentIndex}`}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
					>
						<HeroTopTitle className='w-12 h-12 left-1/2' />
					</motion.div>
					<motion.p
						key={`title-${currentIndex}`}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
						className='text-2xl md:text-3xl text-white font-coveredByGrace '
					>
						{texts[currentIndex].title}
					</motion.p>
					<motion.p
						key={`subtitle-${currentIndex}`}
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.8 }}
						className='text-4xl md:text-5xl lg:text-7xl text-white font-dmSans font-bold mt-3 '
					>
						{texts[currentIndex].subtitle.split(' ').slice(0, -1).join(' ')}
						<span className='text-primary'>
							{' ' + texts[currentIndex].subtitle.split(' ').slice(-1)}
						</span>
					</motion.p>
				</div>
			</AnimatePresence>

			<div className='block mx-auto absolute bottom-2 md:bottom-6 left-1/2 transform -translate-x-1/2 z-40'>
				<SearchBar />
			</div>
		</motion.div>
	);
};

export default Hero;
