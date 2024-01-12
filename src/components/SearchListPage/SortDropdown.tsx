import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface SortDropdownProps {
	onSortChange: (sortType: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ onSortChange }) => {
	return (
		<div className=' bg-neutral flex items-center justify-center rounded-md relative md:order-2'>
			<select
				onChange={(e) => onSortChange(e.target.value)}
				className='bg-neutral rounded-md text-softGrey font-dmSans text-[14px] font-semibold leading-relaxed outline-none cursor-pointer appearance-none py-1.5 pl-3 pr-10'
			>
				<option value='name' className='p-2 bg-neutral'>
					Sort by name
				</option>
				<option value='rating'>Sort by ratings</option>
				<option value='popularity'>Sort by popular</option>
			</select>
			<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
				<ChevronDownIcon className='w-4 h-4 text-primary' />
			</div>
		</div>
	);
};

export default SortDropdown;
