import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import hotelsData from '../../data/Hotels.json';
import { Hotel } from '@/types/types';

interface HotelsPageProps {
	hotels: Hotel[];
}

const HotelsPage: React.FC<HotelsPageProps> = ({ hotels }) => {
	return (
		<div>
			<h1>Hotels</h1>
			{hotels.map((hotel) => (
				<div key={hotel.id}>
					<Link href={`/hotel/${hotel.id}`}>{hotel.name}</Link>
				</div>
			))}
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const location = context.params?.location as string;
	console.log('Location: ', location);
    const filteredHotels = hotelsData.filter(
        (hotel) => hotel.addressObj?.city?.toLowerCase() === location.toLowerCase()
      );
    
	console.log('Filtered Hotels: ', filteredHotels);
	return { props: { hotels: filteredHotels } };
};

export default HotelsPage;
