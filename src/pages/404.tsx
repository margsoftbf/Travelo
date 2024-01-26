import Link from 'next/link';
import Image from 'next/image';

const Custom404 = () => {
	return (
		<div className='flex flex-col items-center justify-center relative'>
			<div className='w-56 h-48 md:w-96 md:h-80 relative mt-16'>
				<Image
					src='/assets/Error404.webp'
					alt='Empty shopping cart'
					fill={true}
					className='object-cover'
					quality={100}
					sizes='(max-width: 768px) 768px, (max-width: 1200px) 1200px, 100vw'
					placeholder='blur'
					priority={true}
					blurDataURL='/assets/cartEmpty.webp'
				/>
			</div>
			<p className='font-dmSans text-3xl font-bold text-myBlack my-4'>
				Ooops! Page Not Found.
			</p>
			<p className='font-dmSans text-center text-softGrey font-medium'>
				The page you are looking for in not exits.
			</p>
			<Link
				href='/'
				className='mt-8 w-48 flex justify-center items-center font-semibold p-2 gap-2 rounded-md bg-primary text-white hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
			>
				Back to Home
			</Link>
		</div>
	);
};

export default Custom404;
