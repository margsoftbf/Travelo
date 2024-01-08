import { GetStaticPaths, GetStaticProps } from 'next';
import hotelsData from '../../data/Hotels.json';
import { Hotel } from '@/types/types';

interface HotelDetailPageProps {
	hotel: Hotel | null;
}

const HotelDetailPage = ({ hotel }: HotelDetailPageProps) => {
	if (!hotel) {
		return <div>Hotel not found</div>;
	}

	return (
		<div>
			<h1>{hotel.name}</h1>
			<p>{hotel.description}</p>
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
  
    return {
        props: { hotel: hotel ? hotel : null },
      };
  };

export default HotelDetailPage;
