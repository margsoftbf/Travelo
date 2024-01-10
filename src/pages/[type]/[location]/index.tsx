import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import hotelsData from '../../../data/Hotels.json';
import restaurantsData from '../../../data/Restaurant.json';
import thingsToDoData from '../../../data/ThingsToDo.json';
import { Hotel, Restaurant, Attraction, AddressObj } from '@/types/types';
import Hero from '@/components/SearchListPage/Hero';
import Pagination from '@/components/SearchListPage/Pagination';

function filterData<T extends { addressObj?: AddressObj }>(
	data: T[],
	query: string
): T[] {
	return data.filter((item) => {
		const city = item.addressObj?.city?.toLowerCase() || '';
		const country = item.addressObj?.country?.toLowerCase() || '';
		const queryLower = query.toLowerCase();
		return city.includes(queryLower) || country.includes(queryLower);
	});
}

const LocationPage = () => {
	const router = useRouter();
	const { location, type } = router.query;
	const [currentPage, setCurrentPage] = useState(1);
	const resultsPerPage = 6;
	const [results, setResults] = useState<Hotel[] | Restaurant[] | Attraction[]>(
		[]
	);

	useEffect(() => {
		if (typeof location === 'string' && typeof type === 'string') {
			let filteredResults: Hotel[] | Restaurant[] | Attraction[] = [];

			switch (type) {
				case 'Hotels':
					filteredResults = filterData<Hotel>(
						hotelsData as unknown as Hotel[],
						location
					);
					break;
				case 'Restaurants':
					filteredResults = filterData<Restaurant>(
						restaurantsData as unknown as Restaurant[],
						location
					);
					break;
				case 'Things to do':
					filteredResults = filterData<Attraction>(
						thingsToDoData as unknown as Attraction[],
						location
					);
					break;
				default:
					console.log('Error');
					break;
			}

			setResults(filteredResults);
		}
	}, [location, type]);

	const indexOfLastResult = currentPage * resultsPerPage;
	const indexOfFirstResult = indexOfLastResult - resultsPerPage;
	const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<div className='relative'>
			<Hero />
			<div className='max-w-5xl mx-auto'>
				<div className='flex flex-col items-center justify-center gap-2 w-full lg:flex-row lg:items-start'>
					<div className='w-5/6 lg:w-1/6  mr-2 mt-12'>
						<div className='flex flex-col justify-between '>Filter</div>
					</div>
					<div className='w-5/6'>
						<div className='py-4 flex justify-between items-center w-full '>
							<p>Showing Result</p>
							<p>Sort</p>
						</div>
						<ul>
							{currentResults.map((item, index) => {
								const detailPageLink =
									item.type === 'HOTEL'
										? `/hotels/${item.id}`
										: item.type === 'RESTAURANT'
										? `/restaurants/${item.id}`
										: `/attractions/${item.id}`;

								return (
									<li key={index}>
										<Link href={detailPageLink}>{item.name}</Link>
									</li>
								);
							})}
						</ul>
						<Pagination
							resultsPerPage={resultsPerPage}
							totalResults={results.length}
							paginate={paginate}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LocationPage;
