import { StarIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

interface ReviewsTip {
	rating: string;
	text: string;
	createdTime?: string;
	user?: string | null;
}

interface RoomTipsProps {
	tips: ReviewsTip[];
}

const Reviews = ({ tips }: RoomTipsProps) => {
	const [showMore, setShowMore] = useState(false);

	const renderStars = (rating: string) => {
		const numRating = parseInt(rating);
		let stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(
				<span key={i} className={i < numRating ? 'text-gold' : 'text-grey'}>
					<StarIcon className='w-4 h-4' />
				</span>
			);
		}
		return stars;
	};

	const formatDate = (dateString?: string) => {
		return dateString
			? new Date(dateString).toLocaleDateString()
			: 'Empty date';
	};

	const toggleShowMore = () => {
		setShowMore(!showMore);
	};

	return (
		<div className='mt-4 flex flex-col gap-2 w-full pb-4'>
			<p className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				Reviews
			</p>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-4'>
				{tips.slice(0, showMore ? tips.length : 4).map((tip, index) => (
					<div key={index} className='flex flex-row items-start gap-3 '>
						<div className='mt-1'>
							<div className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center'>
								<span className='text-xs font-semibold font-dmSans'>User</span>
							</div>
						</div>
						<div className='flex flex-col'>
							<p className='text-sm text-myBlack font-semibold'>
								{tip.user ? tip.user : 'Anonymous'}
							</p>
							<p className='text-xs'>{tip.text}</p>
							<div className='flex text-primary my-1'>
								{renderStars(tip.rating)}
							</div>
							<p className='text-xs mt-1 text-gray-500'>
								{formatDate(tip.createdTime)}
							</p>
						</div>
					</div>
				))}
			</div>
			{tips.length > 4 && (
				<button
					onClick={toggleShowMore}
					className='text-white text-xs font-semibold font-dmSans p-1 w-28 rounded-md mt-2 bg-myBlack hover:bg-primary duration-300'
				>
					{showMore ? 'Less' : 'More'} reviews
				</button>
			)}
		</div>
	);
};

export default Reviews;
