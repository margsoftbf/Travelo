import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Hero from '@/components/SearchListPage/Hero';
import FilterBar from '@/components/SearchListPage/FilterBar';
import LastMinute from '@/components/SearchListPage/LastMinute';
import SortDropdown from '@/components/SearchListPage/SortDropdown';
import Pagination from '@/components/SearchListPage/Pagination';
import ListingCard from '@/components/SearchListPage/ListingCard';
import hotelsData from '../../data/Hotels.json';
import { Hotel } from '@/types/types';
import { Background2 } from '../../../public/assets/svg';

interface HotelsPageProps {
	hotels: Hotel[];
	totalResults: number;
	page: number;
	resultsPerPage: number;
}

const HotelsPage: React.FC<HotelsPageProps> = ({
	hotels,
	totalResults,
	page,
	resultsPerPage,
}) => {
	const router = useRouter();
	const indexOfFirstResult = (page - 1) * resultsPerPage + 1;
	const indexOfLastResult = Math.min(page * resultsPerPage, totalResults);

	const paginate = (pageNumber: number) => {
		const currentPath = router.pathname;
		const currentQuery = { ...router.query, page: pageNumber.toString() };
		router.push({
			pathname: currentPath,
			query: currentQuery,
		});
	};

	const handleSortChange = (sortType: string) => {
		const currentPath = router.pathname;
		const currentQuery = { ...router.query, sortBy: sortType, page: '1' };
		router.push({
			pathname: currentPath,
			query: currentQuery,
		});
	};

	return (
		<div className='relative overflow-hidden pb-8'>
			<Background2 className='absolute w-[100vw] h-[100vh] m-0 p-0 -z-10' />
			<Hero />
			<div className='max-w-7xl mx-auto lg:mt-6 z-20 px-2'>
				<div className='flex flex-col items-center justify-center gap-2 w-full lg:flex-row lg:items-start'>
					<div className='w-5/6 lg:w-2/6  mr-2 mt-12 order-2 lg:order-1'>
						<div className='flex flex-col justify-between py-4 gap-4 '>
							<FilterBar />
							<LastMinute />
						</div>
					</div>
					<div className='w-5/6 order-1'>
						<div className='py-4 flex flex-col justify-between gap-2 items-start md:flex-row md:items-center w-full '>
							<p className='text-myBlack font-dmSans text-base leading-5 font-semibold order-2 md:order-1'>
								Showing {indexOfFirstResult}–{indexOfLastResult} of{' '}
								{totalResults} Results
							</p>
							<SortDropdown onSortChange={handleSortChange} />
						</div>
						{hotels.length === 0 ? (
							<div className='text-center mt-2'>
								<span className='p-3 rounded-md bg-myBlack text-white font-dmSans text-base leading-5 font-semibold'>
									Not Found
								</span>
							</div>
						) : (
							<ul className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
								{hotels.map((item, index) => (
									<li key={index}>
										<ListingCard item={item} />
									</li>
								))}
							</ul>
						)}
						<Pagination
							resultsPerPage={resultsPerPage}
							totalResults={totalResults}
							currentPage={page}
							paginate={paginate}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const location = context.params?.location as string;
	const page = parseInt(context.query.page as string) || 1;
	const sortBy = (context.query.sortBy as string) || 'name';
	const resultsPerPage = 6;

	const filteredHotels = hotelsData.filter(
		(hotel) => hotel.addressObj?.city?.toLowerCase() === location.toLowerCase()
	);

	switch (sortBy) {
		case 'name':
			filteredHotels.sort((a, b) => a.name.localeCompare(b.name));
			break;
		case 'rating':
			filteredHotels.sort((a, b) => {
				if ('rating' in a && 'rating' in b) {
					return b.rating - a.rating;
				}
				return 0;
			});
			break;
		case 'popularity':
			filteredHotels.sort((a, b) => {
				if ('numberOfReviews' in a && 'numberOfReviews' in b) {
					return b.numberOfReviews - a.numberOfReviews;
				}
				return 0;
			});
			break;
		default:
			break;
	}

	const totalResults = filteredHotels.length;
	const indexOfFirstResult = (page - 1) * resultsPerPage;
	const currentResults = filteredHotels.slice(
		indexOfFirstResult,
		indexOfFirstResult + resultsPerPage
	);

	return {
		props: { hotels: currentResults, totalResults, page, resultsPerPage },
	};
};

export default HotelsPage;
