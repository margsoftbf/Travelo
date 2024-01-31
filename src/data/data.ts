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

import { BlogPostTypes } from '@/types/types';
export const blogPosts: BlogPostTypes[] = [
	{
		id: 1,
		title: 'Guide to the Best Hiking Trails in the Alps',
		href: '#',
		description:
			'Discover scenic routes in the Alps! Our guide will help you plan an unforgettable trip by highlighting the most beautiful trails, best rest spots, and tips for preparing for your mountain adventure.',
		imageUrl: '/assets/blog/hiking.webp',
		date: 'Jan 20, 2024',
		datetime: '2024-01-20',
		comments: 5,
		category: { title: 'Adventure', href: '#' },
		author: {
			name: 'Alex Johnson',
			role: 'Mountain Guide',
			href: '#',
			imageUrl: '/assets/people/avatar-angela-gray.webp',
		},
	},
	{
		id: 2,
		title: '5 Essential Tips for Every Traveler',
		href: '#',
		description:
			'Traveling is a passion and an adventure, but it also requires proper preparation. Discover our top 5 tips that will make your journeys safer and more fulfilling.',
		imageUrl: '/assets/blog/traveler.webp',
		date: 'Feb 5, 2024',
		datetime: '2024-02-05',
		comments: 3,
		category: { title: 'Tips', href: '#' },
		author: {
			name: 'Sara Smith',
			role: 'Experienced Traveler',
			href: '#',
			imageUrl: '/assets/people/avatar-nathan-peterson.webp',
		},
	},
	{
		id: 3,
		title: 'Exploring the Hidden Gems of the Amalfi Coast',
		href: '#',
		description:
			'Join us as we uncover the Amalfi Coasts lesser-known spots. From secluded beaches to quaint villages, learn how to avoid the crowds and experience the true beauty of this iconic destination at a leisurely pace.',
		imageUrl: '/assets/blog/exploring.webp',
		date: 'Mar 15, 2024',
		datetime: '2024-03-15',
		comments: 7,
		category: { title: 'Exploration', href: '#' },
		author: {
			name: 'Marco Bianchi',
			role: 'Travel Blogger',
			href: '#',
			imageUrl: '/assets/people/avatar-rizky-hasanuddin.webp',
		},
	},
];
