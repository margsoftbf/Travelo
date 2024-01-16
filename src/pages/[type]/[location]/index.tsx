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
import { Background2 } from '../../../../public/assets/svg';
import LastMinute from '@/components/SearchListPage/LastMinute';
import { GetServerSidePropsContext } from 'next';

console.log('Hotels data:', hotelsData);
console.log('Restaurants data:', restaurantsData);
console.log('Attractions data:', attractionsData);

function filterData<T extends { addressObj?: AddressObj }>(
	data: T[],
	query: string
): T[] {
	console.log('Data to filter:', data);
	console.log('Filter query:', query);

	const filteredData = data.filter((item) => {
		const city = item.addressObj?.city?.toLowerCase() || '';
		const country = item.addressObj?.country?.toLowerCase() || '';
		const queryLower = query.toLowerCase();
		return city.includes(queryLower) || country.includes(queryLower);
	});

	console.log('Filtered data:', filteredData);
	return filteredData;
}

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	console.log('Context query:', context.query);
	const { location, type } = context.query as {
		location: string;
		type: string;
	};

	let filteredResults: Hotel[] | Restaurant[] | Attraction[] = [];

	switch (type) {
		case 'Hotels':
			filteredResults = filterData<Hotel>(hotelsData as Hotel[], location);
			break;
		case 'Restaurants':
			filteredResults = filterData<Restaurant>(
				restaurantsData as Restaurant[],
				location
			);
			break;
		case 'Attractions':
			filteredResults = filterData<Attraction>(
				attractionsData as Attraction[],
				location
			);
			break;
		default:
			console.log('Error: Invalid type or location');
			filteredResults = [];
			break;
	}
	console.log('Filtered results:', filteredResults);
	return { props: { filteredResults } };
};

type SearchResult = Hotel | Restaurant | Attraction;
type LocationPageProps = {
	filteredResults: Hotel[] | Restaurant[] | Attraction[];
};

const LocationPage: React.FC<LocationPageProps> = ({ filteredResults }) => {
	console.log('Filtered Results on render:', filteredResults);
	const [currentPage, setCurrentPage] = useState(1);
	const resultsPerPage = 6;
	const totalResults = filteredResults.length;
	const [currentResults, setCurrentResults] = useState<SearchResult[]>([]);

	const indexOfFirstResult = (currentPage - 1) * resultsPerPage;
	const indexOfLastResult = Math.min(
		indexOfFirstResult + resultsPerPage,
		totalResults
	);

	useEffect(() => {
		console.log('Current page:', currentPage);
		setCurrentResults(
			filteredResults.slice(indexOfFirstResult, indexOfLastResult)
		);
	}, [currentPage, filteredResults, indexOfFirstResult, indexOfLastResult]);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const handleSortChange = (sortType: string) => {
		let sortedResults = [...filteredResults];
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
		setCurrentPage(1);
		setCurrentResults(sortedResults.slice(0, resultsPerPage));
	};

	return (
		<div className='relative overflow-hidden pb-8'>
			<Background2 className='absolute w-[100vw] h-[100vh] m-0 p-0 -z-10' />
			<Hero />

			<div className='max-w-7xl mx-auto lg:mt-6 z-20 px-2'>
				<div className='flex flex-col items-center justify-center gap-2 w-full lg:flex-row lg:items-start'>
					<div className='w-5/6 lg:w-2/6  mr-2 mt-12'>
						<div className='flex flex-col justify-between py-4 gap-4'>
							<FilterBar />
							<LastMinute />
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
						{currentResults.length === 0 ? (
							<div className='text-center mt-2'>
								<span className='p-3 rounded-md bg-myBlack text-white font-dmSans text-base leading-5 font-semibold'>
									Not Found
								</span>
							</div>
						) : (
							<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
								{currentResults.map((item, index) => (
									<li key={index}>
										<ListingCard item={item} />
									</li>
								))}
							</ul>
						)}
						<Pagination
							resultsPerPage={resultsPerPage}
							totalResults={totalResults}
							currentPage={currentPage}
							paginate={paginate}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LocationPage;
