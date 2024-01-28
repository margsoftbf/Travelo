import { navigation } from '@/data/data';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

interface DesktopMenuProps {
	isHomePage: boolean;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ isHomePage }) => {
	return (
		<div>
			<div className='flex items-center'>
				<div className='hidden lg:ml-6 lg:block'>
					<div className='flex space-x-6 '>
						{navigation.map((item) =>
							isHomePage && !item.href.startsWith('/') ? (
								<ScrollLink
									name={item.name}
									key={item.name}
									to={item.href}
									aria-label={item.name}
									smooth={true}
									offset={-60}
									className='text-base font-semibold leading-6 text-softGrey font-openSans hover:text-primary ease-in-out duration-300 transition cursor-pointer '
								>
									{item.name}
								</ScrollLink>
							) : (
								<Link
									key={item.name}
									href={item.href}
									aria-label={item.name}
									className='text-sm lg:text-base text-softGrey font-semibold leading-6 font-openSans hover:text-primary ease-in-out duration-300 transition cursor-pointer'
								>
									{item.name}
								</Link>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DesktopMenu;
