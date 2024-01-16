import '../styles/globals.css';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import ErrorBoundary from '@/components/ErrorBoundary';

const DynamicNavbar = dynamic(() => import('@/components/Navbar'), {
	loading: () => <p>Loading Navbar...</p>,
	ssr: true,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<title>Travelo - Travel & Trip</title>
				<meta name='description' content='Travelo - Travel & Trip' />
				<link rel='icon' href='/favicon.ico' />
				<meta httpEquiv='Content-Language' content='en' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5'
				/>
			</Head>
			<main className='m-auto'>
				<DynamicNavbar />
				<ErrorBoundary>
					<Component {...pageProps} />
				</ErrorBoundary>
			</main>
		</Provider>
	);
}
