import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				coveredByGrace: ['Covered By Your Grace', 'sans-serif'],
				dmSans: ['DM Sans', 'sans-serif'],
				plusJakarta: ['Plus Jakarta Sans', 'sans-serif'],
			},
			colors: {
				primary: '#CB4845',
				myBlack: '#2D2330',
				myBlackTwo: '#4A3E4E',
				neutral: '#FAF5EE',
				softGrey: '#736D75',
				light: '#EBE6DE',
				darkLight: '#928496',
				pinkRed: '#CF356C',
				blackLine: '#403344',
			},
			maxWidth: {
				'8xl': '1440px',
			},
		},
	},
	plugins: [],
};
export default config;
