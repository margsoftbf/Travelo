import { useSelector, useDispatch } from 'react-redux';
import { removeBooking } from '@/store/cartSlice';
import { RootState } from '@/store/store';
import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface CartProps {
	isCartOpen: boolean;
	toggleCart: () => void;
}

const Cart: React.FC<CartProps> = ({ isCartOpen, toggleCart }) => {
	const { bookings, totalPrice } = useSelector(
		(state: RootState) => state.cart
	);
	const dispatch = useDispatch();
	return (
		<Transition
			show={isCartOpen}
			enter='transition ease-out duration-200'
			enterFrom='opacity-0'
			enterTo='opacity-100'
			leave='transition ease-in duration-150'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
		>
			<div className='absolute top-1 right-0 mt-16 mr-4 bg-myBlack text-white shadow-lg rounded-md p-4 max-h-screen overflow-auto'>
				<XMarkIcon
					className='h-6 w-6 right-2 top-2 absolute cursor-pointer'
					onClick={toggleCart}
				/>
				{bookings.length === 0 ? (
					<p className='text-center p-3 mt-5'>Your cart is empty.</p>
				) : (
					<div className='mt-5'>
						{bookings.map((booking, index) => (
							<div key={index} className='mt-6'>
								<p>Hotel name: {booking.hotelId}</p>
								<p>Check-In: {booking.checkInDate}</p>{' '}
								<p>Check-Out: {booking.checkOutDate}</p>{' '}
								<p>Adults: {booking.adults}</p>
								<p>Children: {booking.children}</p>
								<button
									onClick={() => dispatch(removeBooking(booking.hotelId))}
								>
									Remove
								</button>
							</div>
						))}
						<h3>Total Price: {totalPrice}</h3>
					</div>
				)}
			</div>
		</Transition>
	);
};

export default Cart;
