import React, { useState } from 'react';
import { blogPosts } from '@/data/data';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { BlogPostTypes } from '@/types/types';
import BlogPostsList from './Blog/BlogPostsList';
import BlogPostModal from './Blog/BlogPostModal';

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
			id='blog'
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
						Latest News & Articles from the Blog Posts
					</p>
				</div>
				<BlogPostsList blogPosts={blogPosts} openModal={openModal} />

				<BlogPostModal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					post={selectedPost}
				/>
			</div>
		</motion.div>
	);
};

export default Blog;
