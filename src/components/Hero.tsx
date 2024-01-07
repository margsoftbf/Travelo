import React from 'react';
import Image from 'next/image';
import { BuildingsHero, Cloud, Cloud2, Frame } from '../../public/assets/svg';

const Hero = () => {
	return (
		<div className='flex w-full h-96 overflow-hidden bg-myBlack relative'>
			<div className='max-w-8xl mx-auto flex absolute w-full z-50 left-1/2 -translate-x-1/2'>
				<div className='w-full md:w-1/2 relative flex flex-col items-center justify-center mt-8 '>
					<Frame className='w-32 h-20' />
					<p className='text-primary font-coveredByGrace text-xl'>
						Amazing places to relax
					</p>
					<p className='text-white  font-dmSans text-4xl xl:text-5xl uppercase font-bold text-center md:px-10 lg:px-20 xl:px-28'>
						Travel Journey Begins Here
					</p>
				</div>
			</div>
			<div className='w-full md:w-1/2 relative'>
				<div className='absolute bottom-0 flex'>
					<BuildingsHero className='w-[800px] h-[400px]' />
					<BuildingsHero className='w-[800px] h-[400px]' />
					<BuildingsHero className='w-[800px] h-[400px]' />
				</div>
				<div className='absolute top-0 right-0 flex gap-12 mt-6'>
					<Cloud className='w-40 h-20' />
					<Cloud2 className='w-40 h-20 mt-20' />
					<Cloud className='w-40 h-20' />
					<Cloud2 className='w-40 h-20 mt-12' />
					<Cloud className='w-40 h-20' />
					<Cloud2 className='w-40 h-20 mt-20' />
				</div>
			</div>
			<div className='hidden md:block w-1/2 relative'>
				<Image
					src='/assets/hero/heroImage.webp'
					alt='Chef cooking in the kitchen'
					fill={true}
					className='object-cover'
					quality={100}
					sizes='100vw'
					placeholder='blur'
					blurDataURL='/assets/hero/heroBig.webp'
				/>
			</div>
		</div>
	);
};

export default Hero;
