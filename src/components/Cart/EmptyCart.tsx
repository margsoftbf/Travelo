import Link from 'next/link';
import Image from 'next/image';

const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center justify-center relative'>
    <div className='w-48 h-48 md:w-72 md:h-72 relative'>
        <Image
            src='/assets/cartEmpty.webp'
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
    <p className='font-dmSans text-3xl font-medium text-myBlack my-4'>
        Your cart is{' '}
        <span className='text-primary font-bold'>empty.</span>
    </p>
    <p className='font-dmSans text-center'>
        Must add items on the cart vefore you proceed to check out.
    </p>
    <Link
        href='/'
        className='mt-8 w-48 flex justify-center items-center font-semibold p-2 gap-2 rounded-md bg-primary text-white hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
    >
        Back to Homepage
    </Link>
</div>
  )
}

export default EmptyCart