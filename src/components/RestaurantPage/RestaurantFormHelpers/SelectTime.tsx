import React from 'react';

interface SelectTimeProps {
	id: string;
	type: string;
	label: string;
	error?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectTime = ({
	id,
	type,
	label,
	error,
	value,
	onChange,
}: SelectTimeProps) => {
	return (
		<div className='flex flex-col w-full md:mt-0 '>
			<label
				htmlFor={id}
				className='text-xs font-dmSans text-softGrey font-semibold'
			>
				{error ? (
					<p className='text-red-500 text-xs italic'>{error}</p>
				) : (
					<p>{label}</p>
				)}
			</label>
			<input
				type={type}
				id={id}
				value={value}
				step='300'
				onChange={onChange}
				className='mt-1 block w-full text-xs rounded-md border-0  pl-2  py-1.5 font-dmSans text-myBlack shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-xs placeholder:text-text-myBlack sm:text-sm sm:leading-6'
			/>
		</div>
	);
};

export default SelectTime;
