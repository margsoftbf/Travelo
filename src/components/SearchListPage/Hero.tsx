import { useRouter } from 'next/router';
import { BuildingsHero, Cloud, Cloud2 } from '../../../public/assets/svg';

const Hero = () => {
	const router = useRouter();
	const pageTitle = router.query.type;


	return (
		<div className='relative isolate flex px-6 lg:px-8 h-48 bg-myBlack overflow-hidden'>
			<div className='absolute bottom-0 flex'>
				<BuildingsHero className='w-[600px] h-[300px]' />
				<BuildingsHero className='w-[600px] h-[300px]' />
				<BuildingsHero className='w-[600px] h-[300px]' />
				<BuildingsHero className='w-[600px] h-[300px]' />
				<BuildingsHero className='w-[600px] h-[300px]' />
			</div>
			<div className='absolute top-0 right-0 flex gap-32 mt-6'>
				<Cloud className='w-20 h-10' />
				<Cloud2 className='w-20 h-10' />
				<Cloud className='w-20 h-10' />
				<Cloud2 className='w-20 h-10' />
				<Cloud className='w-20 h-10' />
				<Cloud2 className='w-20 h-10' />
				<Cloud className='w-20 h-10' />
				<Cloud2 className='w-20 h-10' />
				<Cloud className='w-20 h-10' />
				<Cloud2 className='w-20 h-10' />
				<Cloud className='w-20 h-10' />
				<Cloud2 className='w-20 h-10' />
				<Cloud className='w-20 h-10' />
				<Cloud2 className='w-20 h-10' />
			</div>
			<div className='flex flex-col items-start justify-center gap-2 w-full max-w-6xl mx-auto z-50'>
				<h1 className='text-white  font-dmSans text-4xl xl:text-5xl uppercase font-bold text-center tracking-wider'>
					{pageTitle}
				</h1>
				{/* <BreadCrumb pathSegments={breadCrumbItems} /> */}
			</div>
		</div>
	);
};

export default Hero;
