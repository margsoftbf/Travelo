import About from '@/components/About';
import Blog from '@/components/Blog';
import CategorySelector from '@/components/CategorySelector';
import ChooseUs from '@/components/ChooseUs';
import Gallery from '@/components/Gallery';
import MostFavouritePlace from '@/components/MostFavouritePlace';
import Testimonial from '@/components/Testimonial';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/Hero'));

export default function Home() {
	return (
		<main className='m-auto overflow-hidden'>
			<Hero />
			<About />
			<MostFavouritePlace />
			<ChooseUs />
			<CategorySelector />
			<Blog />
			<Testimonial />
			<Gallery />
		</main>
	);
}
