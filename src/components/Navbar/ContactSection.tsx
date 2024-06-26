import { FaPhoneVolume } from 'react-icons/fa6';
import { useRouter } from 'next/router';
import { MdShoppingCartCheckout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { useState } from 'react';
import LoginModal from '../Auth/LoginModal';
const ContactSection = () => {
	const router = useRouter();
	const goToCart = () => {
		router.push('/cart');
	};

	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<div className='hidden lg:flex h-16 items-center justify-between relative'>
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
							<p className='text-xs text-white font-dmSans'>Call anytime</p>
							<p className='text-base font-semibold text-white font-dmSans'>
								(101) 222-3333
							</p>
						</div>
						<div className='after-divider'></div>
					</div>
					<div className='flex items-center gap-3'>
						<button
							onClick={goToCart}
							type='button'
							className='relative flex text-white hover:text-myBlackTwo ease-in-out duration-300 transition  text-sm outline-none'
						>
							<span className='absolute -inset-1.5' />
							<span className='sr-only'>Go To Cart</span>
							<MdShoppingCartCheckout className='h-7 w-7 ' aria-hidden='true' />
						</button>
						<button
							onClick={openModal}
							type='button'
							className='relative flex text-white hover:text-myBlackTwo ease-in-out duration-300 transition  text-sm outline-none'
						>
							<span className='absolute -inset-1.5' />
							<span className='sr-only'>Go To Cart</span>
							<CgProfile className='h-7 w-7 ' aria-hidden='true' />
						</button>
					</div>
				</div>
					<LoginModal isOpen={modalOpen} closeModal={closeModal}/>
			</div>
		</div>
	);
};

export default ContactSection;
