import Image from 'next/image';
import React from 'react';
import { BlogPostTypes } from '@/types/types';
import { Comments } from '../../../public/assets/svg';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

interface BlogPostsListProps {
	blogPosts: BlogPostTypes[];
	openModal: (post: BlogPostTypes) => void;
}

const BlogPostsList = ({ blogPosts, openModal }: BlogPostsListProps) => {
	return (
		<div className='mx-auto mt-2 flex flex-wrap justify-center gap-8 p-4 lg:gap-x-8'>
			{blogPosts.map((post) => (
				<article
					key={post.id}
					onClick={() => openModal(post)}
					className='relative isolate w-96 h-[450px]  flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 cursor-pointer'
				>
					<img
						src={post.imageUrl}
						alt='post image'
						className='absolute inset-0 -z-10 h-full w-full object-cover'
					/>
					<div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
					<div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />

					<div className='bg-white px-4 py-2 h-44 rounded-md relative font-dmSans'>
						<div className='absolute bg-primary w-16 h-16 right-0 -top-12 flex items-center justify-center text-center text-xs text-white font-semibold rounded-md'>
							{post.date}
						</div>
						<div className='flex flex-wrap items-center  gap-y-1 overflow-hidden text-sm leading-6 text-black mt-6 divide-x gap-2'>
							<div className='flex items-center'>
								<div className='flex gap-x-2.5 text-myBlack font-semibold'>
									<Image
										src={post.author.imageUrl}
										width={384}
										height={450}
										alt='Blog post picture'
										className='h-6 w-6 rounded-full'
									/>
									{post.author.name}
								</div>
							</div>
							<div className='hidden md:flex items-center text-myBlack font-medium pl-2'>
								<Comments className='w-5 h-5' />
								<p className='pl-2'>{post.comments} comments</p>
							</div>
						</div>
						<div className='divide-y-2 gap-y-2 flex flex-col'>
							<h3 className='mt-4 text-lg font-semibold leading-6 text-myBlack'>
								{post.title}
							</h3>
							<div className='flex justify-between items-center pt-2 '>
								<p className=' text-softGrey font-semibold text-[14px] font-dmSans cursor-pointer group duration-300 ease-in-out transition hover:text-primary'>
									Read More
								</p>
								<ArrowLongRightIcon className='w-6 h-6 group duration-300 ease-in-out transition hover:text-primary cursor-pointer' />
							</div>
						</div>
					</div>
				</article>
			))}
		</div>
	);
};

export default BlogPostsList;
