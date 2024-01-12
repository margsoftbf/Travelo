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
		<p className='bg-neutral p-1 rounded-md text-[14px] px-2'>
			{pathSegments.map((item, index) => (
				<span key={index} className='inline-flex items-center'>
					{item.current ? (
						<span
							className={`text-red-500 ${
								index < pathSegments.length - 1 ? 'mr-2' : ''
							}`}
						>
							{item.name}
						</span>
					) : (
						<Link
							href={item.href || '#'}
							className={`text-myBlack hover:text-primary ${
								index < pathSegments.length - 1 ? 'mr-0' : ''
							}`}
						>
							{item.name}
						</Link>
					)}
					{index < pathSegments.length - 1 && (
						<span
							className={`mx-1 ${
								item.current ? 'text-red-500' : 'text-myBlack'
							}`}
						>
							/
						</span>
					)}
				</span>
			))}
		</p>
	);
};

export default BreadCrumb;
