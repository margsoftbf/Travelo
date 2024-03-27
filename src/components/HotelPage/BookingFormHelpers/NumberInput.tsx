import React from 'react';
import { Minus, Plus } from '../../../../public/assets/svg';

interface NumberInputProps {
	id: string;
	label: string;
	value: number;
	setValue: React.Dispatch<React.SetStateAction<number>>;
	min: number;
	max: number;
}

const NumberInput = ({
	label,
	id,
	value,
	setValue,
	min,
	max,
}: NumberInputProps) => {
	return (
		<div className='flex flex-col w-full'>
			<label
				htmlFor={id}
				className='text-xs font-dmSans text-softGrey font-semibold'
			>
				{label}:
			</label>
			<div className='relative mt-1 rounded-md shadow-sm'>
				<div className='flex'>
					<input
						type='number'
						id={id}
						value={value}
						min={min}
						className='flex-1 text-[12px] text-left border-2 rounded-md py-1 font-dmSans text-myBlack ring-inset outline-none pl-2 placeholder:text-text-myBlack sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
						onChange={(e) =>
							setValue(Math.max(1, Math.min(8, parseInt(e.target.value))))
						}
					/>
					<div className='absolute inset-y-0 right-0 gap-1 flex items-center pr-2'>
						<Minus
							aria-label='Decrease guest number'
							className='h-4 w-4 text-gray-400 cursor-pointer'
							aria-hidden='true'
							onClick={() => setValue(value > min ? value - 1 : min)}
						/>
						<Plus
							aria-label='Increase guest number'
							className='h-4 w-4 text-gray-400 cursor-pointer'
							aria-hidden='true'
							onClick={() => setValue(value < max ? value + 1 : max)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NumberInput;
