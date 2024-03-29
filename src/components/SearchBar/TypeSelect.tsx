import React from 'react';
import { Hiking } from '../../../public/assets/svg';
import { TypeSelectProps } from '@/types/types';

const TypeSelect = ({ type, setType, hasError }: TypeSelectProps) => (
	<div className='flex flex-col w-full mt-2 md:mt-0 relative'>
		<label
			htmlFor='typeSelect'
			className={`text-xs font-dmSans absolute z-20 left-2.5 -top-1 bg-white ${
				hasError ? 'text-red-500 font-bold' : 'text-softGrey'
			}`}
		>
			{hasError ? 'Type required' : 'Type'}
		</label>
		<div className='relative mt-1 rounded-md shadow-sm'>
			<select
				id='typeSelect'
				className={`block w-full text-[12px] rounded-md font-dmSans border-0 py-2 pr-10 text-myBlack ring-1 pl-2 ring-inset outline-none ring-gray-300 placeholder:text-myBlack sm:leading-6 appearance-none ${
					hasError ? 'border-red-500' : 'border-0 border-gray-300'
				}`}
				value={type}
				onChange={(e) => setType(e.target.value)}
			>
				<option value='' disabled>
					Please select
				</option>
				<option value='Hotels'>Hotels</option>
				<option value='Restaurants'>Restaurants</option>
				<option value='Attractions'>Attractions</option>
			</select>
			<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
				<Hiking className='h-5 w-5 text-gray-400' aria-hidden='true' />
			</div>
		</div>
	</div>
);

export default TypeSelect;
