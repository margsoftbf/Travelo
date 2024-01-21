import { useRouter } from 'next/router';
import Image from 'next/image';

const Hero = () => {
	const router = useRouter();
	const pageTitle = router.query.location;

	return (
		<div className='relative isolate flex h-48 bg-myBlack overflow-hidden'>
			<div className='absolute w-full h-full bg-black/60 z-20'></div>
			<Image
				src='/assets/hero/hotelHero.jpg'
				alt='Dynamic image'
				fill={true}
				className='object-cover'
				quality={100}
				sizes='(max-width: 768px) 768px, (max-width: 1200px) 1200px, 100vw'
				placeholder='blur'
				priority={true}
				blurDataURL='/assets/hero/hotelHero.jpg'
			/>
			
			<div className='flex flex-col items-start justify-center gap-2 w-full max-w-7xl mx-auto z-50'>
				<h1 className='text-white px-2  font-dmSans text-4xl xl:text-5xl uppercase font-bold text-center tracking-wider'>
					{pageTitle}
				</h1>
				
			</div>
		</div>
	);
};

export default Hero;
