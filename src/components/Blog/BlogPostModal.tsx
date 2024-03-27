import React from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { BlogPostTypes } from '@/types/types';

interface BlogPostProps {
	isOpen: boolean;
	onRequestClose: () => void;
	post: BlogPostTypes | null;
}
const BlogPostModal = ({ isOpen, onRequestClose, post }: BlogPostProps) => {
	if (!post) return null;

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel='Example Modal'
			className='inset-0 flex relative max-h-[80%] justify-center items-center z-50 overflow-y-auto mx-4 my-12 top-12 outline-none'
			overlayClassName='fixed top-0 left-0 right-0 bottom-0 bg-black/95 flex justify-center items-center z-50'
		>
			<div className='bg-white rounded-md p-4 mx-auto max-w-8xl px-6 lg:px-8 text-white relative overflow-y-auto max-h-[80vh]'>
				<button
					className='text-black absolute right-2 top-2 z-50'
					onClick={onRequestClose}
				>
					<XMarkIcon className='h-6 w-6' />
				</button>
				<div className='flex flex-col items-start justify-between'>
					<div className='relative mt-6 w-full'>
						<Image
							src={post.imageUrl}
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
							<time dateTime={post.datetime} className='text-gray-500'>
								{post.date}
							</time>
							<a
								href={post.category.href}
								className='relative rounded-full bg-myGray px-3 py-1.5 font-medium text-white '
							>
								{post.category.title}
							</a>
						</div>
						<div className='group relative'>
							<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
								<a href='#'>
									<span className='absolute inset-0' />
									{post.title}
								</a>
							</h3>
							<p className='mt-5 text-sm leading-6 text-gray-600'>
								{post.description}
							</p>
						</div>
						<div className='relative mt-8 flex items-center gap-x-4'>
							<div className='h-10 w-10 relative rounded-full overflow-hidden bg-gray-100'>
								<Image
									src={post.author.imageUrl}
									alt='Photo of author'
									width={40}
									height={40}
									objectFit='cover'
								/>
							</div>
							<div className='text-sm leading-6'>
								<p className='font-semibold text-gray-900'>
									<a href={post.author.href}>
										<span className='absolute inset-0' />
										{post.author.name}
									</a>
								</p>
								<p className='text-gray-600'>{post.author.role}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default BlogPostModal;
