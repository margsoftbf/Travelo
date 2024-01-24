import React from 'react';

interface OpenHoursProps {
	weekRanges: {
		openHours: string;
		closeHours: string;
	}[][];
}
const OpenHours: React.FC<OpenHoursProps> = ({ weekRanges }) => {


	const daysOfWeek = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];


	return (
		<div className='w-full mt-4 flex flex-col gap-2'>
			<p className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				Opening Hours
			</p>
			<table className='w-full text-sm text-left text-gray-500 mt-2'>
				<thead className='text-xs text-white uppercase bg-primary'>
					<tr>
						<th scope='col' className='px-6 py-2'>
							Day
						</th>
						<th scope='col' className='px-6 py-2'>
							Hours
						</th>
					</tr>
				</thead>
				<tbody>
					{weekRanges.map((day, index) => (
						<tr
							key={index}
							className='bg-gray-100 text-softGrey border-b group hover:bg-myBlack duration-300'
						>
							<td className='px-6 py-2 group-hover:text-white'>
								{daysOfWeek[index] || `Day ${index + 1}`}
							</td>
							<td className='px-6 py-2 group-hover:text-white'>
								{day.length > 0
									? `${day[0].openHours} - ${day[0].closeHours}`
									: 'Closed'}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default OpenHours;
