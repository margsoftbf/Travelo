import Link from 'next/link';
import { Hotel, Restaurant, Attraction } from '@/types/types';

interface ListingCardProps {
	item: Hotel | Restaurant | Attraction;
}

const ListingCard: React.FC<ListingCardProps> = ({ item }) => {
	const detailPageLink =
		item.type === 'HOTEL'
			? `/hotels/${item.id}`
			: item.type === 'RESTAURANT'
			? `/restaurants/${item.id}`
			: `/attractions/${item.id}`;

	return (
		<div className='border rounded shadow p-4'>
			<Link href={detailPageLink}>{item.name}</Link>
			{item.type !== 'RESTAURANT' && (
				<p className='text-sm font-semibold'>Price: ${item.rating}</p>
			)}
		</div>
	);
};

export default ListingCard;
