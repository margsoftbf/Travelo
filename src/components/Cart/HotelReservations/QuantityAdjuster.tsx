import React from 'react';

interface QuantityAdjusterProps {
	onDecrement: () => void;
	onIncrement: () => void;
	value: number;
}

const QuantityAdjuster = ({ onDecrement, onIncrement, value }:QuantityAdjusterProps) => {
	return (
		<div className='text-myBlack font-semibold w-20 h-8 wrapper flex items-center justify-center rounded-md  border'>
			<button
				className='w-full text-center font-medium font-dmSans text-xl'
				onClick={onDecrement}
			>
				-
			</button>
			<span className='w-full text-center font-medium font-dmSans text-base border-r-2 border-l-2'>
				{value}
			</span>
			<button
				className='w-full text-center font-medium font-dmSans text-xl'
				onClick={onIncrement}
			>
				+
			</button>
		</div>
	);
};

export default QuantityAdjuster;
