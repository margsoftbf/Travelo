import React, { ReactElement } from 'react';

interface HotelInfoItemProps {
	Icon: ReactElement;
	label: string;
	value: string | number | null;
	isClickable?: boolean;
}

const HotelInfoItem: React.FC<HotelInfoItemProps> = ({
	Icon,
	label,
	value,
	isClickable
}) => {
	return (
		<div
			className={`flex items-center gap-2 ${
				isClickable ? 'cursor-pointer' : ''
			}`}
		>
			<div>{Icon}</div>
			<div className='font-dmSans text-xs'>
				<p className='text-softGrey'>{label}</p>
				<p className='text-black font-semibold line-clamp-1'>{value}</p>
			</div>
		</div>
	);
};

export default HotelInfoItem;
