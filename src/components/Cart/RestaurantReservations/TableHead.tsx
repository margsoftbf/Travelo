import React from 'react';

const TableHead = () => {
	return (
		<thead>
			<tr>
				<th
					scope='col'
					className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
				>
					Place
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden md:table-cell'
				>
					Date
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'
				>
					Time
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'
				>
					Name
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell'
				>
					Email
				</th>
				<th
					scope='col'
					className=' px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
				>
					People
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
