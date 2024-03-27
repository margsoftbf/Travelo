import React from 'react';
import { Minus, Plus } from '../../../../public/assets/svg';

interface NumberSelectorProps {
	id: string;
	value: number;
	min: number;
	max: number;
	onChange: (newValue: number) => void;
}

const NumberSelector = (	{id,
    value,
    min,
    max,
    onChange}: NumberSelectorProps) => {

		const handleDecrement = () => {
			if (value > min) {
				onChange(value - 1);
			}
		};

		const handleIncrement = () => {
			if (value < max) {
				onChange(value + 1);
			}
		};

		return (
			<div className='flex flex-col w-full'>
				<label
					htmlFor={id}
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					Number of People:
				</label>
				<div className='relative mt-1 rounded-md shadow-sm'>
					<div className='flex'>
						<input
							id={id}
							type='number'
							className='mt-1 block w-full text-xs rounded-md border-0 pl-2 py-1.5 font-dmSans text-myBlack shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-xs placeholder:text-myBlack sm:text-sm sm:leading-6'
							value={value}
							onChange={(e) =>
								onChange(Math.max(min, Math.min(max, parseInt(e.target.value))))
							}
							min={min}
							max={max}
							readOnly
						/>
						<div className='absolute inset-y-0 right-0 gap-1 flex items-center pr-2'>
							<Minus
								aria-label='Decrease number'
								className='h-4 w-4 text-gray-400 cursor-pointer'
								onClick={handleDecrement}
								aria-hidden='true'
							/>
							<Plus
								aria-label='Increase number'
								className='h-4 w-4 text-gray-400 cursor-pointer'
								onClick={handleIncrement}
								aria-hidden='true'
							/>
						</div>
					</div>
				</div>
			</div>
		);
	};


export default NumberSelector;
