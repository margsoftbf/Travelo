import {
	Cruises,
	Fishing,
	HikingCat,
	Tent,
	Trailers,
} from '../../public/assets/svg';

export const categories = [
	{ name: 'Cruises', slug: 'cruises', icon: Cruises },
	{ name: 'Fishing', slug: 'fishing', icon: Fishing },
	{ name: 'Hiking', slug: 'hiking', icon: HikingCat },
	{ name: 'Camping', slug: 'camping', icon: Tent },
	{ name: 'Trailers', slug: 'trailers', icon: Trailers },
];
export const navigation = [
	{
		name: 'About Us',
		href: 'about',
		description: 'Learn more about our company',
	},
	{
		name: 'Tour',
		href: 'tour',
		description: 'Check best tour of the world.',
	},
	{
		name: 'Category',
		href: 'category',
		description: 'Check category like fishing, hiking, ski.',
	},
	{
		name: 'Blog',
		href: 'blog',
		description: 'Check our blog.',
	},
	{
		name: 'Cart',
		href: '/cart',
		description: 'Your cart.',
	},
	{ name: 'Contact Us', href: 'contact', description: 'Contact with us' },
];

export const peopleReviews = [
	{
		id: 1,
		img: '/assets/people/avatar-nathan-peterson.webp',
		name: 'Nathan Peterson',
		imgAlt: 'Nathan Peterson Avatar',
		text: 'Excellent collaboration and communication. The project was completed on time and met all expectations. Definitely recommend!',
		rating: 5,
		date: '06.02.2023',
	},
	{
		id: 2,
		img: '/assets/people/avatar-angela-gray.webp',
		imgAlt: 'Angela Gray Avatar',
		name: 'Angela Gray',
		text: 'Excellent collaboration and communication. The project was completed on time and met all expectations. Definitely recommend!',
		rating: 4,
		date: '06.12.2023',
	},
	{
		id: 3,
		img: '/assets/people/avatar-mark-webber.webp',
		imgAlt: 'Mark Webber Avatar',
		name: 'Angela Gray',
		text: 'Excellent collaboration and communication. The project was completed on time and met all expectations. Definitely recommend!',
		rating: 4,
		date: '06.12.2023',
	},
	{
		id: 4,
		img: '/assets/people/avatar-anna-kim.webp',
		imgAlt: 'Anna Kim Avatar',
		name: 'Anna Kim',
		text: 'Excellent collaboration and communication. The project was completed on time and met all expectations. Definitely recommend!',
		rating: 4,
		date: '06.12.2023',
	},
	{
		id: 5,
		img: '/assets/people/avatar-jacob-thompson.webp',
		imgAlt: 'Jacob Thompson Avatar',
		name: 'Jacob Thompson',
		text: 'Excellent collaboration and communication. The project was completed on time and met all expectations. Definitely recommend!',
		rating: 4,
		date: '06.12.2023',
	},
	{
		id: 6,
		img: '/assets/people/avatar-kimberly-smith.webp',
		imgAlt: 'Kimberly Smith Avatar',
		name: 'Kimberly Smith',
		text: 'Excellent collaboration and communication. The project was completed on time and met all expectations. Definitely recommend!',
		rating: 4,
		date: '06.12.2023',
	},
	{
		id: 7,
		img: '/assets/people/avatar-rizky-hasanuddin.webp',
		imgAlt: 'Rizky Hasanuddin Avatar',
		name: 'Rizky Hasanuddin',
		text: 'Excellent collaboration and communication. The project was completed on time and met all expectations. Definitely recommend!',
		rating: 4,
		date: '06.12.2023',
	},
];
