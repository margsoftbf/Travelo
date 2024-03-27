import React from 'react';

const TableHead = () => {
	return (
		<thead>
			<tr>
				<th
					scope='col'
					className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
				>
					Hotel
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden md:table-cell'
				>
					Check-in Date
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden md:table-cell'
				>
					Check-out Date
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'
				>
					Adults
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'
				>
					Children
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
				>
					Price
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
				>
					Remove
				</th>
			</tr>
		</thead>
	);
};

export default TableHead;
