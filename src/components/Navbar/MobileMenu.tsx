import { Disclosure } from '@headlessui/react';
import { navigation } from '@/data/data';
import { useRouter } from 'next/router';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { useState } from 'react';
import LoginModal from '../Auth/LoginModal';
interface MobileMenuProps {
	close: () => void;
}

const MobileMenu = ({ close }: MobileMenuProps) => {
	const router = useRouter();
	const goToCart = () => {
		router.push('/cart');
		close();
	};

	const handleMenuItemClick = (path: string) => {
		router.push(path);
		close();
	};

	
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);


	return (
		<div>
			<Disclosure.Panel className='lg:hidden bg-gray-200'>
				<div className='space-y-1 px-2 pb-3 pt-2'>
					{navigation.map((item) => (
						<Disclosure.Button
							key={item.name}
							aria-label={item.description || item.name}
							onClick={(e) => {
								handleMenuItemClick(item.href);
							}}
							className='w-full  text-left block rounded-md  px-3 py-2 text-base font-medium text-myBlack hover:bg-myBlackTwo hover:text-white'
						>
							{item.name}
						</Disclosure.Button>
					))}
				</div>
				<div className='border-t border-gray-700/20 pb-3 pt-4'>
					<div className='flex items-center justify-end gap-4 px-5'>
						<div className='bg-myBlack hover:bg-primary ease-in-out duration-300 transition w-10 h-10 flex items-center justify-center rounded-full'>
							<button
								type='button'
								onClick={openModal}
								className='relative flex text-white  ease-in-out duration-300 transition  text-sm outline-none'
							>
								<span className='absolute -inset-1.5' />
								<span className='sr-only'>Go To Profile</span>
								<CgProfile className='h-7 w-7 ' aria-hidden='true' />
							</button>
						</div>
						<div className='bg-myBlack hover:bg-primary ease-in-out duration-300 transition w-10 h-10 flex items-center justify-center rounded-full'>
							<button
								type='button'
								onClick={goToCart}
								className='relative flex text-white    text-sm outline-none'
							>
								<span className='absolute -inset-1.5' />
								<span className='sr-only'>Go To Cart</span>
								<MdShoppingCartCheckout
									className='h-6 w-6 '
									aria-hidden='true'
								/>
							</button>
						</div>
					</div>
				</div>
				<LoginModal isOpen={modalOpen} closeModal={closeModal}/>
			</Disclosure.Panel>
		</div>
	);
};

export default MobileMenu;
