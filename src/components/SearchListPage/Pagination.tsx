import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
interface PaginationProps {
	resultsPerPage: number;
	totalResults: number;
	paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	resultsPerPage,
	totalResults,
	paginate,
}) => {
	const pageCount = Math.ceil(totalResults / resultsPerPage);
	const [currentPage, setCurrentPage] = useState(1);

	const handlePaginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		paginate(pageNumber);
	};

	return (
		<nav>
			<ul className='pagination flex gap-2 items-center mt-4'>
				{currentPage > 1 && (
					<li>
						<button
							onClick={() => handlePaginate(currentPage - 1)}
							className='w-9 h-9 border rounded-md flex items-center justify-center hover:bg-softGrey hover:text-white transition duration-200 ease-linear'
						>
							<ChevronLeftIcon className='w-4 h-4' />
						</button>
					</li>
				)}

				{Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => (
					<li key={number} className='page-item'>
						<button
							onClick={() => handlePaginate(number)}
							className={`font-dmSans w-9 h-9 rounded-md ${
								number === currentPage
									? 'bg-primary text-white'
									: ' border hover:bg-softGrey hover:text-white transition duration-200 ease-linear'
							}`}
						>
							{number}
						</button>
					</li>
				))}

				{currentPage < pageCount && (
					<li>
						<button
							onClick={() => handlePaginate(currentPage + 1)}
							className='w-9 h-9 border rounded-md flex items-center justify-center hover:bg-softGrey hover:text-white transition duration-200 ease-linear'
						>
							<ChevronRightIcon className='w-4 h-4' />
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Pagination;
