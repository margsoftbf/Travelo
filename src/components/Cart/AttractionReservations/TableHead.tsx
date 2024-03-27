import React from 'react';

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th
					scope='col'
					className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-0'
				>
					Place
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold  hidden md:table-cell'
				>
					Date
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold  hidden lg:table-cell'
				>
					Name
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold  hidden lg:table-cell'
				>
					Email
				</th>
				<th
					scope='col'
					className=' px-3 py-3.5 text-left text-sm font-semibold '
				>
					People
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold '
				>
					Price
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold '
				>
					Remove
				</th>
			</tr>
		</thead>
	);
};

export default TableHeader;
