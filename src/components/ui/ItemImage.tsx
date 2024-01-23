import React from 'react';
import Image from 'next/image';

interface ItemImageProps {
	entity: {
		image: string;
		name: string;
	  };
}

const ItemImage: React.FC<ItemImageProps> = ({ entity }) => {
	return (
		<div className='w-full  relative flex gap-4 justify-center items-center'>
			<div className='w-full h-60 lg:h-72 relative group'>
				<Image
					src={entity.image}
					alt={entity.name}
					fill={true}
					className='object-cover rounded-lg'
					quality={100}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw'
					placeholder='blur'
					blurDataURL={entity.image}
				/>
				<div className='absolute inset-0 group-hover:bg-black/60 duration-300 transition flex items-center justify-center rounded-lg'>
					<span className='text-white text-xl opacity-0 group-hover:opacity-100'>
						Picture 1
					</span>
				</div>
			</div>
			<div className='w-full h-60 lg:h-72 relative hidden md:block group'>
				<Image
					src={entity.image}
					alt={entity.name}
					fill={true}
					className='object-cover rounded-lg'
					quality={100}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw'
					placeholder='blur'
					blurDataURL={entity.image}
				/>
				<div className='absolute inset-0 group-hover:bg-black/60 duration-300 transition flex items-center justify-center rounded-lg'>
					<span className='text-white text-xl opacity-0 group-hover:opacity-100'>
						Picture 2
					</span>
				</div>
			</div>
		</div>
	);
};

export default ItemImage;
