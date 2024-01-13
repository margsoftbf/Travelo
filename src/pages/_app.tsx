import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<title>Travelo - Travel & Trip</title>
				<meta name='description' content='Travelo - Travel & Trip' />
				<link rel='icon' href='/favicon.ico' />
				<meta httpEquiv='Content-Language' content='en' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main className='m-auto'>
				<Navbar />
				<Component {...pageProps} />
			</main>
		</>
	);
}
