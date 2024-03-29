import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
interface ListWithIconsProps {
	items: string[];
	type: 'hotel' | 'restaurant';
}

const ListWithIcons = ({ items, type }: ListWithIconsProps) => {
	const [showMore, setShowMore] = useState(false);

	const title = type === 'hotel' ? 'Amenities' : 'Features';
	const toggleShowMore = () => {
		setShowMore(!showMore);
	};
	return (
		<div className='mt-4 flex flex-col gap-2 w-full'>
			<h3 className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				{title}
			</h3>
			<ul className='grid grid-cols-2 md:grid-cols-3 gap-2 line-clamp-1 mt-2'>
				{items.slice(0, showMore ? items.length : 20).map((amenity, index) => (
					<li key={index} className='flex items-center gap-1'>
						<div className='w-4 h-4 rounded-full bg-primary flex items-center justify-center'>
							<FaCheck className='w-2 h-2 text-white' />
						</div>
						{amenity}
					</li>
				))}
			</ul>
			{items.length > 20 && (
				<button
					onClick={toggleShowMore}
					className='text-white font-semibold font-dmSans p-1 w-32 rounded-md mt-2 bg-myBlack hover:bg-primary duration-300 text-xs'
				>
					{showMore ? 'Show Less' : 'Show More'}
				</button>
			)}
		</div>
	);
};

export default ListWithIcons;
