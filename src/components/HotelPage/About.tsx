import React from 'react';
import { Hotel } from '@/types/types';

interface HotelAboutProps {
	hotel: Hotel;
}
const HotelAbout: React.FC<HotelAboutProps> = ({ hotel }) => {
	return (
		<div className='mt-4 flex flex-col gap-2'>
			<p className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				About
			</p>
			<p className='text-softGrey font-dmSans text-sm font-medium leading-5'>
				{hotel.description}
			</p>
		</div>
	);
};

export default HotelAbout;
