import React from 'react';

interface LocationSelectProps{
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const LocationSelect = ({id, label, value, onChange}: LocationSelectProps) => {
	return (
		<div className='flex flex-col w-full md:mt-0 '>
			<label
				htmlFor={id}
				className='text-xs font-dmSans text-softGrey font-semibold'
			>
				{label}
			</label>
			<select
				id={id}
				value={value}
				onChange={onChange}
				className='mt-1 block w-full text-xs rounded-md border-0  pl-2  py-1.5 font-dmSans text-myBlack shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-xs placeholder:text-text-myBlack sm:text-sm sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
			>
				<option value='inside'>Inside</option>
				<option value='outside'>Outside</option>
			</select>
		</div>
	);
};

export default LocationSelect;
