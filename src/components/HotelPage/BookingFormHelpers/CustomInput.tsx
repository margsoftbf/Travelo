import React, { forwardRef } from 'react';
import { Calendar } from '../../../../public/assets/svg';

interface CustomInputProps {
	value?: string;
	onClick?: () => void;
	hasError?: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
	({ value, onClick, hasError }, ref) => (
		<div
			className={`relative w-full text-[12px] rounded-md py-1 mt-1 pr-10 font-dmSans text-myBlack ring-1 pl-2 ring-inset outline-none ring-gray-300 placeholder:text-myBlack sm:leading-6 ${
				hasError ? 'border-red-500 border' : ''
			}`}
			onClick={onClick}
		>
			<input
				ref={ref}
				type='text'
				className={`block w-full text-[12px] text-black placeholder:text-black outline-none ${
					hasError
						? 'border-red-500 ring-red-500'
						: 'border-gray-300 ring-gray-300'
				}`}
				value={value || ''}
				readOnly
				placeholder='Select date'
			/>
			<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
				<Calendar className='h-4 w-4 text-gray-400' aria-hidden='true' />
			</div>
		</div>
	)
);

export default CustomInput;
