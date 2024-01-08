import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import hotelsData from '../../../data/Hotels.json';
import restaurantsData from '../../../data/Restaurant.json';
import thingsToDoData from '../../../data/ThingsToDo.json';
import { Hotel, Restaurant, Attraction, AddressObj } from '@/types/types';

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

	return (
		<div>
			<h1>Wyniki dla {location}</h1>
			<ul>
				{results.map((item, index) => {
					const detailPageLink =
						item.type === 'HOTEL'
							? `/hotels/${item.id}`
							: item.type === 'RESTAURANT'
							? `/restaurants/${item.id}`
							: `/attractions/${item.id}`;

					return (
						<li key={index}>
							<Link href={detailPageLink}>
								{item.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default LocationPage;
