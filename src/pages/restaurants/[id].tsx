import { GetStaticPaths, GetStaticProps } from 'next';
import restaurantsData from '../../data/Restaurant.json';
import { Restaurant } from '@/types/types';

const RestaurantDetailPage = ({
	restaurant,
}: {
	restaurant: Restaurant | null;
}) => {
	if (!restaurant) {
		return <div>Restaurant not found</div>;
	}

	return (
		<div>
			<h1>{restaurant.name}</h1>
			<p>{restaurant.description}</p>
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = restaurantsData
		.filter((restaurant) => restaurant.id && typeof restaurant.id === 'string')
		.map((restaurant) => ({
			params: { id: restaurant.id },
		}));

	return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id as string;
	const restaurant = restaurantsData.find((r) => r.id === id);

	return {
		props: { restaurant: restaurant || null },
	};
};

export default RestaurantDetailPage;
