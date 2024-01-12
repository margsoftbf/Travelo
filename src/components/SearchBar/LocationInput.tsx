import React from 'react';
import { Location } from '../../../public/assets/svg';
import { LocationInputProps } from '@/types/types';

const LocationInput: React.FC<LocationInputProps> = ({
	query,
	setQuery,
	suggestions,
	handleLocationChange,
	handleSuggestionClick,
	errors,
	variant,
}) => {
	const baseClass =
		'block w-full text-[12px] rounded-md font-dmSans py-1 pr-10 text-myBlack ring-1 pl-2 ring-inset outline-none ring-gray-300 placeholder:text-myBlack sm:leading-6';

	const variantClass =
		variant === 'filter' ? 'ring-none placeholder:text-myBlack' : '';

	const inputClass = `${baseClass} ${variantClass} ${
		errors.location ? 'border-red-500 border' : 'border-0 border-gray-300'
	}`;

	return (
		<div className='flex flex-col w-full relative'>
			<label
				className={`text-xs font-dmSans ${
					errors.location ? 'text-red-500' : 'text-softGrey'
				}`}
			>
				{errors.location ? 'Location required' : 'Location'}
			</label>
			<div className='relative mt-1 rounded-md shadow-sm'>
				<input
					type='text'
					name='location'
					id='location'
					value={query}
					onChange={handleLocationChange}
					className={inputClass}
					placeholder='Where to next'
				/>
				{suggestions.length > 0 && (
					<ul className='absolute z-10 list-none bg-gray-200 mt-1 rounded-md w-full'>
						{suggestions.map((suggestion, index) => (
							<li
								key={index}
								onClick={() => handleSuggestionClick(suggestion)}
								className='flex items-center p-2 cursor-pointer hover:bg-gray-300 hover:rounded-md'
							>
								<Location className='h-4 w-4 text-gray-400 mr-2' />
								{suggestion}
							</li>
						))}
					</ul>
				)}
				<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
					<Location className='h-4 w-4 text-gray-400' aria-hidden='true' />
				</div>
			</div>
		</div>
	);
};

export default LocationInput;
