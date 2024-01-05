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
			</Head>
			<Component {...pageProps} />
		</>
	);
}
