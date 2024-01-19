import { useSelector, useDispatch } from 'react-redux';
import { removeBooking } from '@/store/cartSlice';
import { RootState } from '@/store/store';
import Link from 'next/link';

const CartPage = () => {
	const { bookings, totalPrice } = useSelector(
		(state: RootState) => state.cart
	);
	const dispatch = useDispatch();

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-xl font-bold my-4'>Your Cart</h1>
			{bookings.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div>
					{bookings.map((booking, index) => (
						<div key={index} className='mb-4'>
							<p>Hotel name: {booking.hotelId}</p>
							<p>Check-In: {booking.checkInDate}</p>
							<p>Check-Out: {booking.checkOutDate}</p>
							<p>Adults: {booking.adults}</p>
							<p>Children: {booking.children}</p>
							<button
								onClick={() => dispatch(removeBooking(booking.hotelId))}
								className='text-red-500 hover:text-red-600'
							>
								Remove
							</button>
						</div>
					))}
					<h2>Total Price: {totalPrice}</h2>
				</div>
			)}
			<Link
				href='/checkout'
				className='mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
			>
				Proceed to Checkout
			</Link>
		</div>
	);
};

export default CartPage;
