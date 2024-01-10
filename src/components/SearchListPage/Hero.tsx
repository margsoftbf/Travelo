import { BuildingsHero, Cloud, Cloud2 } from '../../../public/assets/svg';

const Hero = () => {
	return (
		<div className='relative isolate flex px-6 lg:px-8 h-64 bg-myBlack'>
			<div className='absolute bottom-0 flex'>
				<BuildingsHero className='w-[800px] h-[400px] ' />
				<BuildingsHero className='w-[800px] h-[400px] ' />
				<BuildingsHero className='w-[800px] h-[400px]' />
				<BuildingsHero className='w-[800px] h-[400px]' />
			</div>
			<div className='absolute top-0 right-0 flex gap-32 mt-6'>
				<Cloud className='w-40 h-20' />
				<Cloud2 className='w-40 h-20' />
				<Cloud className='w-40 h-20' />
				<Cloud2 className='w-40 h-20' />
				<Cloud className='w-40 h-20' />
				<Cloud2 className='w-40 h-20' />
				<Cloud className='w-40 h-20' />
				<Cloud2 className='w-40 h-20' />
				<Cloud className='w-40 h-20' />
				<Cloud2 className='w-40 h-20' />
			</div>
			<div className='flex flex-col items-start justify-center gap-2 w-full max-w-6xl mx-auto z-50'>
				<h1 className='text-white  font-dmSans text-4xl xl:text-5xl uppercase font-bold text-center tracking-wider'>
					Top Result
				</h1>
				<p className='text-myBlack bg-neutral p-2 rounded-md '>
					Home <span className='text-primary font-semibold'>/ BreadCrumb</span>
				</p>
			</div>
		</div>
	);
};

export default Hero;
