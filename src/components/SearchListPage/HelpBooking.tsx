import { PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';

const HelpBooking = () => {
	return (
		<div className='p-4 border rounded shadow z-10 bg-white  space-y-2 relative flex flex-col gap-1'>
			<h2 className='text-myBlack font-dmSans text-xl font-extrabold leading-6 tracking-tight'>
				Need help booking?
			</h2>
			<div className='border-b border-primary'></div>
			<div className='flex flex-col gap-2'>
				<p>
					Call our customer services team on the number below to speak to one of
					our advisers who will help you with all of your holiday needs.
				</p>
				<div className='flex flex-row gap-2 mt-2 items-center'>
					<PhoneIcon className='w-5 h-5 text-primary' />
					<p className='font-dmSans font-semibold'>123 546 980</p>
				</div>
			</div>
		</div>
	);
};

export default HelpBooking;
