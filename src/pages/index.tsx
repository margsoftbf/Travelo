import About from '@/components/About';
import CategorySelector from '@/components/CategorySelector';
import MostFavouritePlace from '@/components/MostFavouritePlace';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'));

export default function Home() {
	return (
		<main className='m-auto overflow-hidden'>
			<Hero />
			<About />
			<MostFavouritePlace />
			<CategorySelector />
		</main>
	);
}
