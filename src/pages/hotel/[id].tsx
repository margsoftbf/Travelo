import { GetStaticPaths, GetStaticProps } from 'next';
import hotelsData from '../../data/Hotels.json';
import { Hotel } from '@/types/types';
import Header from '@/components/HotelPage/Header';
import Image from 'next/image';
import About from '@/components/ui/About';
import Reviews from '@/components/HotelPage/Reviews';
import LastMinute from '@/components/SearchListPage/LastMinute';
import Offers from '@/components/HotelPage/Offers';
import Rules from '@/components/HotelPage/Rules';
import SimilarHotels from '@/components/HotelPage/SimilarHotels';
import BookingForm from '@/components/HotelPage/BookingForm';
import ItemImage from '@/components/ui/ItemImage';
import ListWithIcons from '@/components/ui/ListWithIcons';
import HelpBooking from '@/components/SearchListPage/HelpBooking';

interface HotelDetailPageProps {
	hotel: Hotel | null;
	similarHotels: Hotel[];
}

const HotelDetailPage = ({ hotel, similarHotels }: HotelDetailPageProps) => {
	if (!hotel) {
		return <div>Hotel not found</div>;
	}

	return (
		<div className='relative overflow-hidden'>
			<div className='absolute w-full h-full -z-10'>
				<Image
					src='/assets/Background.png'
					alt={hotel.name}
					fill={true}
					className='object-cover'
					quality={100}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw'
					placeholder='blur'
					blurDataURL='/assets/Background.png'
				/>
			</div>
			<Header hotel={hotel} />
			<div className='max-w-7xl mx-auto relative bg-white px-4 md:px-2'>
				<div className='flex flex-col lg:flex-row items-center justify-center lg:items-start gap-4 w-full h-full py-4 relative'>
					<div className='w-full px-4 lg:w-4/6 flex flex-col items-center justify-center gap-4'>
						<ItemImage entity={{ image: hotel.image, name: hotel.name }} />
						<About description={hotel.description} />
						<ListWithIcons items={hotel.amenities} type='hotel' />
						<Reviews tips={hotel.roomTips} />
						<Offers offers={hotel.offers} />
						<Rules />
						<SimilarHotels hotels={similarHotels} />
					</div>
					<div className='w-full lg:w-2/6 flex flex-col gap-4'>
						<BookingForm hotel={hotel} />
						<HelpBooking />
						<LastMinute />
					</div>
				</div>
			</div>
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = hotelsData.map((hotel: any) => ({
		params: { id: hotel.id.toString() },
	}));

	return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id as string;
	const hotel = hotelsData.find((h: any) => h.id.toString() === id);

	const similarHotels = hotelsData
		.filter(
			(h) => h.locationString === hotel?.locationString && h.id !== hotel?.id
		)
		.slice(0, 2);

	return {
		props: { hotel: hotel ? hotel : null, similarHotels },
	};
};

export default HotelDetailPage;
