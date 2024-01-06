import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
	Bars3Icon,
	BellIcon,
	ShoppingBagIcon,
	UserCircleIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { Logo } from '../../public/assets/svg';
import { navigation } from '@/data/data';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { FaPhoneVolume } from 'react-icons/fa6';

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
	const router = useRouter();
	const isHomePage = router.pathname === '/';

	return (
		<div className='bg-white sticky top-0 z-[250] header-underline'>
			<Disclosure as='nav' className=''>
				{({ open }) => (
					<>
						<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
							<div className='flex h-16 items-center justify-between relative'>
								<div className='flex items-center gap-2 justify-center relative'>
									<Logo className='w-10 h-9' />
									<span className='text-black text-3xl font-[800] font-plusJakarta'>
										Travelo<span className='text-primary'>.</span>
									</span>
								</div>
								<div className='flex items-center'>
									<div className='hidden sm:ml-6 sm:block'>
										<div className='flex space-x-6 '>
											{navigation.map((item) =>
												isHomePage && !item.href.startsWith('/') ? (
													<ScrollLink
														name={item.name}
														key={item.name}
														to={item.href}
														aria-label={item.description || item.name}
														smooth={true}
														offset={-60}
														className='text-sm lg:text-base font-semibold leading-6 text-softGrey font-openSans hover:text-primary ease-in-out duration-300 transition cursor-pointer'
													>
														{item.name}
													</ScrollLink>
												) : (
													<Link
														key={item.name}
														href={`#${item.href}`}
														aria-label={item.description || item.name}
														onClick={(e) => {
															e.preventDefault();
														}}
														className='text-sm lg:text-base text-myBlackTwo font-semibold leading-6 font-openSans hover:text-primary ease-in-out duration-300 transition cursor-pointer'
													>
														{item.name}
													</Link>
												)
											)}
										</div>
									</div>
								</div>
								<div className='hidden lg:px-8 bg-primary h-full lg:flex'>
									<div className='flex items-center gap-8'>
										<div className='flex items-center justify-center gap-2 relative'>
											<div>
												<button
													type='button'
													className=' w-9 h-9 relative rounded-full bg-white p-1 text-gray-400 hover:text-white flex items-center justify-center'
												>
													<span className='absolute -inset-1.5' />
													<span className='sr-only'>Call anytime</span>
													<FaPhoneVolume
														className='h-4 w-4 text-primary'
														aria-hidden='true'
													/>
												</button>
											</div>
											<div>
												<p className='text-xs text-white font-dmSans'>
													Call anytime
												</p>
												<p className='text-base font-semibold text-white font-dmSans'>
													(101) 222-3333
												</p>
											</div>
											<div className='after-divider'></div>
										</div>
										<div className='flex items-center'>
											<button
												type='button'
												className='relative flex text-white hover:text-myBlackTwo ease-in-out duration-300 transition  text-sm outline-none'
											>
												<span className='absolute -inset-1.5' />
												<span className='sr-only'>Go To Cart</span>
												<ShoppingBagIcon
													className='h-7 w-7 '
													aria-hidden='true'
												/>
											</button>
											<Menu as='div' className='relative ml-3'>
												<div>
													<Menu.Button className='relative flex text-white hover:text-myBlackTwo ease-in-out duration-300 transition  text-sm outline-none'>
														<span className='absolute -inset-1.5' />
														<span className='sr-only'>Open user menu</span>
														<UserCircleIcon
															className='h-7 w-7 '
															aria-hidden='true'
														/>
													</Menu.Button>
												</div>
											</Menu>
										</div>
									</div>
								</div>
								<div className='-mr-2 flex sm:hidden'>
									<Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-myBlackTwo hover:text-white focus:outline-none '>
										<span className='absolute -inset-0.5' />
										<span className='sr-only'>Open main menu</span>
										{open ? (
											<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
										) : (
											<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
										)}
									</Disclosure.Button>
								</div>
							</div>
						</div>

						<Disclosure.Panel className='sm:hidden '>
							<div className='space-y-1 px-2 pb-3 pt-2'>
								{navigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										aria-label={item.description || item.name}
										onClick={(e) => {
											e.preventDefault();
										}}
										className='w-full  text-left block rounded-md  px-3 py-2 text-base font-medium text-myBlack hover:bg-myBlackTwo hover:text-white'
									>
										{item.name}
									</Disclosure.Button>
								))}
							</div>
							<div className='border-t border-gray-700/20 pb-3 pt-4'>
								<div className='flex items-center justify-end gap-4 px-5'>
									<div className='bg-primary w-10 h-10 flex items-center justify-center rounded-full'>
										<button
											type='button'
											className='relative flex text-white ease-in-out duration-300 transition  text-sm outline-none'
										>
											<span className='absolute -inset-1.5' />
											<span className='sr-only'>Go To Cart</span>
											<UserCircleIcon className='h-7 w-7 ' aria-hidden='true' />
										</button>
									</div>
									<div className='bg-primary w-10 h-10 flex items-center justify-center rounded-full'>
										<button
											type='button'
											className='relative flex text-white ease-in-out duration-300 transition  text-sm outline-none'
										>
											<span className='absolute -inset-1.5' />
											<span className='sr-only'>Go To Cart</span>
											<ShoppingBagIcon
												className='h-6 w-6 '
												aria-hidden='true'
											/>
										</button>
									</div>
								</div>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</div>
	);
};

export default Navbar;
