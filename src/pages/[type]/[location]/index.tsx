import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import hotelsData from '../../../data/Hotels.json';
import restaurantsData from '../../../data/Restaurant.json';
import attractionsData from '../../../data/Attractions.json';
import { Hotel, Restaurant, Attraction, AddressObj } from '@/types/types';
import Hero from '@/components/SearchListPage/Hero';
import Pagination from '@/components/SearchListPage/Pagination';
import SortDropdown from '@/components/SearchListPage/SortDropdown';
import ListingCard from '@/components/SearchListPage/ListingCard';
import FilterBar from '@/components/SearchListPage/FilterBar';
import { Background } from '../../../../public/assets/svg';

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

type SearchResult = Hotel | Restaurant | Attraction;

const LocationPage = () => {
	const router = useRouter();
	const { location, type } = router.query;
	const [currentPage, setCurrentPage] = useState(1);
	const resultsPerPage = 6;
	const [results, setResults] = useState<SearchResult[]>([]);
	const totalResults = results.length;
	const indexOfFirstResult = (currentPage - 1) * resultsPerPage;
	const indexOfLastResult = Math.min(
		indexOfFirstResult + resultsPerPage,
		totalResults
	);

	const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
				case 'Attractions':
					filteredResults = filterData<Attraction>(
						attractionsData as unknown as Attraction[],
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

	const handleSortChange = (sortType: string) => {
		let sortedResults = [...results];
		switch (sortType) {
			case 'name':
				sortedResults.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case 'rating':
				sortedResults.sort((a, b) => {
					if ('rating' in a && 'rating' in b) {
						return b.rating - a.rating;
					}
					return 0;
				});
				break;
			case 'popularity':
				sortedResults.sort((a, b) => {
					if ('numberOfReviews' in a && 'numberOfReviews' in b) {
						return b.numberOfReviews - a.numberOfReviews;
					}
					return 0;
				});
				break;
			default:
				break;
		}
		setResults(sortedResults);
	};

	return (
		<div className='relative overflow-hidden'>
			<Background className='absolute w-[100vw] h-[100vh] m-0 p-0 -z-10' />
			<Hero />
			<div className='max-w-6xl mx-auto lg:mt-6 z-20'>
				<div className='flex flex-col items-center justify-center gap-2 w-full lg:flex-row lg:items-start'>
					<div className='w-5/6 lg:w-2/6  mr-2 mt-12'>
						<div className='flex flex-col justify-between py-4'>
							<FilterBar />
						</div>
					</div>
					<div className='w-5/6'>
						<div className='py-4 flex flex-col justify-between gap-2 items-start md:flex-row md:items-center w-full '>
							<p className='text-myBlack font-dmSans text-base leading-5 font-semibold order-2 md:order-1'>
								Showing {indexOfFirstResult + 1}–{indexOfLastResult} of{' '}
								{totalResults} Results
							</p>
							<SortDropdown onSortChange={handleSortChange} />
						</div>
						<ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							{currentResults.map((item, index) => (
								<li key={index} className='bg-neutral'>
									<ListingCard item={item} />
								</li>
							))}
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
