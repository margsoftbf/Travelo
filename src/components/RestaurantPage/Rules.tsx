import React from 'react';

const Rules = () => {
	return (
		<div className='mt-4 flex flex-col gap-2 w-full pb-4'>
			<h2 className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				Rules & Cancellation Policy
			</h2>
			<div className='mt-2'>
				<p className='font-semibold'>Reservations</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 ml-2 tracking-wide'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					Reservations are recommended but not required. We accept reservations
					by phone and online.
				</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 tracking-wide ml-2'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					For groups larger than 6 people, a reservation is required.
				</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 tracking-wide ml-2'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					Please arrive on time for your reservation. Delays of more than 15
					minutes may result in the loss of your table.
				</p>
			</div>
			<div className='mt-2'>
				<p className='font-semibold'>Cancellation Policy</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 tracking-wide ml-2'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					Please inform us of any cancellations at least 24 hours prior to your
					scheduled arrival.
				</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 tracking-wide ml-2'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					For large groups or special events, a credit card may be required to
					secure the reservation. In such cases, late cancellations or no-shows
					may incur a charge.
				</p>
			</div>
			<div className='mt-2'>
				<p className='font-semibold'>Additional Information</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 tracking-wide ml-2'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					The restaurant is family-friendly. We provide high chairs for
					children.
				</p>
				<p className='flex items-center gap-1 font-dmSans text-xs mt-2 tracking-wide ml-2'>
					<span className='w-2 h-2 bg-myBlack rounded-full'></span>
					We offer options for guests with dietary restrictions, including
					vegetarian, vegan, and gluten-free dishes.
				</p>
			</div>
		</div>
	);
};

export default Rules;
