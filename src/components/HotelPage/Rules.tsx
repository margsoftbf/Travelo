import React from 'react';

const Rules = () => {
	return (
		<div className='mt-4 flex flex-col gap-2 w-full pb-4'>
			<h2 className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				Rules & Cancellation Policy
			</h2>
			<div className='mt-2'>
				<p className='font-semibold'>Room Rules</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 tracking-wide ml-2'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					No smoking, parties or events.
				</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 tracking-wide ml-2'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					Check-in time from 2PM, check-out by 10AM
				</p>
			</div>
			<div className='mt-2'>
				<p className='font-semibold'>Cancellation</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 ml-2'>
					Guests will receive a full refund if cancel within 48 hours of booking
					and at least 24 hours vefore check-in. If guests cancel after 48 hours
					of vooking and at least 24 hours before check-in, the service fee is
					non-refundable.
				</p>
			</div>
		</div>
	);
};

export default Rules;
