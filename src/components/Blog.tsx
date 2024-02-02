import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import { blogPosts } from '@/data/data';
import { XMarkIcon } from '@heroicons/react/24/outline';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { BlogPostTypes } from '@/types/types';
import { Comments } from '../../public/assets/svg';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

const Blog = () => {
	const { ref, controls } = useScrollAnimation();

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedPost, setSelectedPost] = useState<BlogPostTypes | null>(null);

	const openModal = (post: BlogPostTypes) => {
		setSelectedPost(post);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setSelectedPost(null);
		setModalIsOpen(false);
	};
	return (
		<motion.div
			className='relative w-full mx-auto'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 1.2, type: 'ease-in' }}
		>
			<div className='max-w-8xl mx-auto relative'>
				<div className='max-w-4xl mx-auto flex flex-col justify-center items-center gap-2 pt-6 pb-4 px-6'>
					<p className='font-dmSans font-bold text-base text-primary tracking-wider'>
						ARTICLES
					</p>
					<p className='font-dmSans text-3xl font-bold text-center text-myBlack'>
						Latest News & Articles from the Blog Postss
					</p>
				</div>
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
				{selectedPost && (
					<Modal
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						contentLabel='Example Modal'
						className='inset-0 flex relative max-h-[80%] justify-center items-center z-50 overflow-y-auto mx-4 my-12 top-12 outline-none'
						overlayClassName='fixed top-0 left-0 right-0 bottom-0 bg-black/95 flex justify-center items-center z-50'
					>
						<div className='bg-white rounded-md p-4 mx-auto max-w-8xl px-6 lg:px-8 text-white relative overflow-y-auto max-h-[80vh]'>
							<button
								className='text-black absolute right-2 top-2 z-50'
								onClick={closeModal}
							>
								<XMarkIcon className='h-6 w-6' />
							</button>
							<div className='flex flex-col items-start justify-between'>
								<div className='relative mt-6 w-full'>
									<Image
										src={selectedPost.imageUrl}
										alt='Laptop picture'
										width={1200}
										height={700}
										objectFit='cover'
										className='relative max-h-72 w-full object-cover rounded-2xl'
									/>
									<div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
								</div>
								<div className='max-w-xl'>
									<div className='mt-8 flex items-center gap-x-4 text-xs'>
										<time
											dateTime={selectedPost.datetime}
											className='text-gray-500'
										>
											{selectedPost.date}
										</time>
										<a
											href={selectedPost.category.href}
											className='relative rounded-full bg-myGray px-3 py-1.5 font-medium text-white '
										>
											{selectedPost.category.title}
										</a>
									</div>
									<div className='group relative'>
										<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
											<a href='#'>
												<span className='absolute inset-0' />
												{selectedPost.title}
											</a>
										</h3>
										<p className='mt-5 text-sm leading-6 text-gray-600'>
											{selectedPost.description}
										</p>
									</div>
									<div className='relative mt-8 flex items-center gap-x-4'>
										<div className='h-10 w-10 relative rounded-full overflow-hidden bg-gray-100'>
											<Image
												src={selectedPost.author.imageUrl}
												alt='Photo of author'
												width={40}
												height={40}
												objectFit='cover'
											/>
										</div>
										<div className='text-sm leading-6'>
											<p className='font-semibold text-gray-900'>
												<a href={selectedPost.author.href}>
													<span className='absolute inset-0' />
													{selectedPost.author.name}
												</a>
											</p>
											<p className='text-gray-600'>
												{selectedPost.author.role}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Modal>
				)}
			</div>
		</motion.div>
	);
};

export default Blog;
