import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CategorySelectorTypes } from '@/types/types';
import categoryData from '@/data/CategorySelector.json';
import Image from 'next/image';
import Header from '@/components/CategoryPage/Header';
import LastMinute from '@/components/SearchListPage/LastMinute';
import ItemImage from '@/components/ui/ItemImage';
import About from '@/components/ui/About';
import Reviews from '@/components/ui/Reviews';
import TourRules from '@/components/AttractionPage/Rules';
import CruisesMap from '@/components/CategoryPage/CruisesMap';

interface DetailPageProps {
	data: CategorySelectorTypes;
}

const DetailPage = ({ data }: DetailPageProps) => {
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
			<Header data={data} />
			<div className='max-w-7xl mx-auto relative bg-white px-4 md:px-2'>
				<div className='flex flex-col items-center justify-center gap-2 w-full lg:flex-row lg:items-start h-full py-4'>
					<div className='w-5/6 flex flex-col  items-center justify-center gap-6'>
						<ItemImage entity={{ image: data.image, name: data.localName }} />
						<About description={data.description} />
						{data.type === 'Cruises' && data.mapImage && (
							<CruisesMap mapImageUrl={data.mapImage} />
						)}
						<Reviews />
						<TourRules />
					</div>
					<div className='w-5/6 lg:w-2/6 flex flex-col gap-4'>
						<LastMinute />
					</div>
				</div>
			</div>
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = categoryData.map((item: CategorySelectorTypes) => ({
		params: { type: item.type.toLowerCase(), id: item.id },
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { type, id } = params as { type: string; id: string };
	const data = categoryData.find(
		(item: CategorySelectorTypes) =>
			item.type.toLowerCase() === type && item.id === id
	);

	return { props: { data } };
};

export default DetailPage;
