import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Logo } from '../../public/assets/svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ContactSection = dynamic(
	() => import('@/components/Navbar/ContactSection'),
	{
		ssr: false,
	}
);
const DesktopMenu = dynamic(() => import('@/components/Navbar/DesktopMenu'), {
	ssr: true,
});
const MobileMenu = dynamic(() => import('@/components/Navbar/MobileMenu'), {
	ssr: true,
});

const Navbar = () => {
	const router = useRouter();
	const isHomePage = router.pathname === '/';
	const { ref, controls } = useScrollAnimation();

	return (
		<motion.div
			className='bg-white sticky top-0 z-[250] header-underline lg:px-2'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: -50 },
			}}
			transition={{ duration: 0.5, type: 'ease-in' }}
		>
			<Disclosure as='nav' className=''>
				{({ open }) => (
					<>
						<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-0'>
							<div className='flex h-16 items-center justify-between relative'>
								<Link
									href='/'
									className='flex items-center gap-2 justify-center relative'
								>
									<Logo className='w-10 h-9' />
									<span className='text-black text-3xl font-[800] font-plusJakarta'>
										Travelo<span className='text-primary'>.</span>
									</span>
								</Link>
								<DesktopMenu isHomePage={isHomePage} />
								<ContactSection />
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
						<MobileMenu />
					</>
				)}
			</Disclosure>
		</motion.div>
	);
};

export default Navbar;
