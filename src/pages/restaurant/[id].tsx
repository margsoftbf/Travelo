import { GetStaticPaths, GetStaticProps } from 'next';
import restaurantsData from '../../data/Restaurant.json';
import { Restaurant } from '@/types/types';
import Image from 'next/image';
import RestaurantHeader from '@/components/RestaurantPage/Header';
import ItemImage from '@/components/ui/ItemImage';
import About from '@/components/ui/About';
import ListWithIcons from '@/components/ui/ListWithIcons';
import Reviews from '@/components/ui/Reviews';
import OpenHours from '@/components/RestaurantPage/OpenHours';
import Rules from '@/components/RestaurantPage/Rules';
import SimilarRestaurants from '@/components/RestaurantPage/SimilarRestaurants';
import LastMinute from '@/components/SearchListPage/LastMinute';
import ReservationForm from '@/components/RestaurantPage/ReservationForm';

interface RestaurantDetailPageProps {
	restaurant: Restaurant | null;
	similarRestaurants: Restaurant[];
}

const RestaurantDetailPage = ({
	restaurant,
	similarRestaurants,
}: RestaurantDetailPageProps) => {
	if (!restaurant || !restaurant.hours) {
		return <div>Restaurant not found or hours not available</div>;
	}

	return (
		<div className='relative overflow-hidden'>
			<div className='absolute w-full h-full -z-10'>
				<Image
					src='/assets/Background.png'
					alt='Background'
					fill={true}
					className='object-cover'
					quality={100}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw'
					placeholder='blur'
					blurDataURL='/assets/Background.png'
				/>
			</div>
			<RestaurantHeader restaurant={restaurant} />
			<div className='max-w-7xl mx-auto relative bg-white px-4 md:px-2'>
				<div className='flex flex-col items-center justify-center gap-2 w-full lg:flex-row lg:items-start h-full py-4'>
					<div className='w-5/6 flex flex-col  items-center justify-center gap-6'>
						<ItemImage
							entity={{ image: restaurant.image, name: restaurant.name }}
						/>
						<About description={restaurant.description} />
						<ListWithIcons items={restaurant.features} type='restaurant' />
						<Reviews />
						<OpenHours weekRanges={restaurant.hours.weekRanges || []} />
						<Rules />
						<SimilarRestaurants restaurants={similarRestaurants} />
					</div>
					<div className='w-5/6 lg:w-2/6 flex flex-col gap-4'>
						<ReservationForm restaurant={restaurant} />
						<LastMinute />
					</div>
				</div>
			</div>
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = restaurantsData
		.filter(
			(restaurant) => restaurant.id !== undefined && restaurant.id !== null
		)
		.map((restaurant) => ({
			params: { id: restaurant.id },
		}));

	return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id as string;

	const restaurant = restaurantsData.find((r: any) => r.id === id);

	const similarRestaurants = restaurantsData
		.filter(
			(r) =>
				r.locationString === restaurant?.locationString &&
				r.id !== restaurant?.id
		)
		.slice(0, 2);

	return {
		props: { restaurant: restaurant || null, similarRestaurants },
	};
};

export default RestaurantDetailPage;
