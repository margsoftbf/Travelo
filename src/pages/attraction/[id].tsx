import { GetStaticPaths, GetStaticProps } from 'next';
import attractionsData from '../../data/Attractions.json';
import { Attraction } from '@/types/types';
import Image from 'next/image';
import AttractionHeader from '@/components/AttractionPage/Header';
import LastMinute from '@/components/SearchListPage/LastMinute';
import ItemImage from '@/components/ui/ItemImage';
import About from '@/components/ui/About';
import Reviews from '@/components/ui/Reviews';
import Offers from '@/components/AttractionPage/Offers';
import TourRules from '@/components/AttractionPage/Rules';
import SimilarAttractions from '@/components/AttractionPage/SimilarAttractions';
import BookingFormAttraction from '@/components/AttractionPage/BookingForm';

interface AttractionDetailProps {
	attraction: Attraction | null;
	similarAttractions: Attraction[];
}

const AttractionDetailPage = ({
	attraction,
	similarAttractions,
}: AttractionDetailProps) => {
	if (!attraction) {
		return <div>Attraction not found</div>;
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
			<AttractionHeader attraction={attraction} />
			<div className='max-w-7xl mx-auto relative bg-white px-4 md:px-2'>
				<div className='flex flex-col items-center justify-center gap-2 w-full lg:flex-row lg:items-start h-full py-4'>
					<div className='w-5/6 flex flex-col  items-center justify-center gap-6'>
						<ItemImage
							entity={{ image: attraction.image, name: attraction.name }}
						/>
						<About description={attraction.description} />
						<Reviews />
						<Offers attraction={attraction && attraction.offerGroup ? attraction.offerGroup.offerList : []} />
						<TourRules />
						<SimilarAttractions attractions={similarAttractions} />
					</div>
					<div className='w-5/6 lg:w-2/6 flex flex-col gap-4'>
						<BookingFormAttraction attraction={attraction} />
						<LastMinute />
					</div>
				</div>
			</div>
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = attractionsData.map((attraction) => ({
		params: { id: attraction.id },
	}));

	return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id;

	const attraction = attractionsData.find((a) => a.id === id);

	const similarAttractions = attractionsData
		.filter(
			(a) =>
				a.locationString === attraction?.locationString &&
				a.id !== attraction?.id
		)
		.slice(0, 2);

	if (!attraction) {
		return { notFound: true };
	}

	return {
		props: { attraction, similarAttractions },
	};
};

export default AttractionDetailPage;
