import React from 'react';

const TourRules = () => {
	return (
		<div className='mt-4 flex flex-col gap-2 w-full pb-4'>
			<h2 className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				Tour & Attraction Rules
			</h2>
			<div className='mt-2'>
				<p className='font-semibold'>Safety Rules</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 tracking-wide ml-4'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					Follow all safety guidelines provided by tour operators.
				</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 tracking-wide ml-4'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					Children must be accompanied by an adult.
				</p>
			</div>
			<div className='mt-2'>
				<p className='font-semibold'>Cancellation Policy</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 ml-4'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					Full refund available if cancelled more than 72 hours before the start
					of the tour.
				</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 ml-4'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					50% refund if cancelled between 72 and 24 hours before the start of
					the tour.
				</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 ml-4'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					No refund if cancelled less than 24 hours before the start of the
					tour.
				</p>
			</div>
		</div>
	);
};

export default TourRules;
