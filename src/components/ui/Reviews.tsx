import { peopleReviews } from '@/data/data';
import { StarIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

interface ReviewProps {
	id: number;
	img: string;
	imgAlt: string;
	name: string;
	text: string;
	rating: number;
	date: string;
}

const Reviews = () => {
	const [showMore, setShowMore] = useState(false);

	const renderStars = (rating: number) => {
		let stars = [];
		for (let i = 0; i < 5; i++) {
			stars.push(
				<span key={i} className={i < rating ? 'text-gold' : 'text-grey'}>
					<StarIcon className='w-4 h-4' />
				</span>
			);
		}
		return stars;
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
				{peopleReviews
					.slice(0, showMore ? peopleReviews.length : 4)
					.map((review, index) => (
						<div key={index} className='flex flex-row items-start gap-3 '>
							<div className='mt-1'>
								<div className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center'>
									<img src={review.img} alt={review.imgAlt} />
								</div>
							</div>
							<div className='flex flex-col'>
								<p className='text-sm text-myBlack font-semibold'>
									{review.name}
								</p>
								<p className='text-xs'>{review.text}</p>
								<div className='flex text-primary my-1'>
									{renderStars(review.rating)}
								</div>
								<p className='text-xs mt-1 text-gray-500'>{review.date}</p>
							</div>
						</div>
					))}
			</div>
			{peopleReviews.length > 4 && (
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
