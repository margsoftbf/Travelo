import Link from 'next/link';

interface BreadCrumbProps {
	pathSegments: Array<{
		name: string;
		href?: string;
		current?: boolean;
	}>;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ pathSegments }) => {
	return (
		<span className='bg-myBlack/80 p-2 mt-2 rounded-md text-[14px] px-2'>
			{pathSegments.map((item, index) => (
				<span key={index} className='inline-flex items-center font-dmSans'>
					{item.current ? (
						<span
							className={`text-red-500 font-semibold ${
								index < pathSegments.length - 1 ? 'mr-2' : ''
							}`}
						>
							{item.name}
						</span>
					) : (
						<Link
							href={item.href || '#'}
							className={`text-white hover:text-red-500 ${
								index < pathSegments.length - 1 ? 'mr-0' : ''
							}`}
						>
							{item.name}
						</Link>
					)}
					{index < pathSegments.length - 1 && (
						<span className='mx-1 text-red-500 font-bold'>/</span>
					)}
				</span>
			))}
		</span>
	);
};

export default BreadCrumb;
