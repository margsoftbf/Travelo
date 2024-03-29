import About from '@/components/About';
import Blog from '@/components/Blog';
import CategorySelector from '@/components/CategorySelector';
import ChooseUs from '@/components/ChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import MostFavouriteHotels from '@/components/MostFavouriteHotels';
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
			<MostFavouriteHotels />
			<CategorySelector />
			<Blog />
			<Testimonial />
			<Gallery />
			<Contact />
			<Footer />
		</main>
	);
}
