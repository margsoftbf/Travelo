import { categories } from '@/data/data';
import React, { useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { AnimatePresence, motion } from 'framer-motion';
import categoryData from '@/data/CategorySelector.json';
import ListingCard from './ui/ListingCard';
const CategorySelector = () => {
	const { ref, controls } = useScrollAnimation();

	const [selectedCategory, setSelectedCategory] = useState(categories[0].slug);
	const filteredData = categoryData.filter(
		(item) => item.type.toLowerCase() === selectedCategory
	);

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			className='bg-[#241C26] py-4'
			id='category'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 1.2, type: 'ease-in' }}
		>
			<div className='max-w-7xl mx-auto relative'>
				<div className='max-w-4xl mx-auto flex flex-col justify-center items-center gap-2 mt-4 pb-4'>
					<p className='font-coveredByGrace font-medium text-2xl text-primary tracking-wider'>
						Explore the world
					</p>
					<p className='font-dmSans text-3xl font-bold text-center text-neutral'>
						Tour Select By Type
					</p>
				</div>
				<div className='flex flex-row flex-wrap justify-center items-center gap-2 mx-4 mt-4'>
					{categories.map((category) => (
						<button
							key={category.slug}
							className={`inline-flex items-center justify-start gap-3 text-base font-dmSans  hover:bg-neutral hover:text-black  rounded-md font-openSans w-56 px-2.5 py-2.5 uppercase shadow-sm hover:bg-myOrange  transition duration-300 ease-in-out flex-shrink-0 font-bold ${
								selectedCategory === category.slug
									? 'bg-neutral text-black'
									: 'bg-myBlackTwo text-white'
							}`}
							onClick={() => setSelectedCategory(category.slug)}
						>
							{React.createElement(category.icon, {
								className: 'w-10 h-10',
							})}
							{category.name}
						</button>
					))}
				</div>
				<div className='max-w-6xl mx-auto flex items-center justify-center w-full  px-4 md:px-0'>
					<AnimatePresence>
						<div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4'>
							{filteredData.map((item) => (
								<motion.div
									key={item.id}
									className='p-2 mt-4'
									variants={cardVariants}
									initial='hidden'
									animate='visible'
									exit='hidden'
									transition={{ duration: 0.5 }}
								>
									<ListingCard item={item} />
								</motion.div>
							))}
						</div>
					</AnimatePresence>
				</div>
			</div>
		</motion.div>
	);
};

export default CategorySelector;
