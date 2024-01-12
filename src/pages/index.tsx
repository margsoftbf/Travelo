import Hero from '@/components/Hero';
import HeroPicks from '@/components/HeroPicks';

export default function Home() {
	return (
		<main className='m-auto overflow-hidden'>
			<Hero />
			<HeroPicks />
		</main>
	);
}
