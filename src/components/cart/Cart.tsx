import { useSelector, useDispatch } from 'react-redux';
import { removeBooking } from '@/store/cartSlice';
import { CartState } from '@/types/types';
import { RootState } from '@/store/store';

const Cart = () => {
	const { bookings, totalPrice } = useSelector(
		(state: RootState) => state.cart
	);
	const dispatch = useDispatch();
	return (
		<div>
			{bookings.map(
				(
					booking,
					index 
				) => (
					<div key={index}>
						<p>Hotel ID: {booking.hotelId}</p>
						<p>Check-In: {booking.checkInDate}</p>{' '}
						<p>Check-Out: {booking.checkOutDate}</p>{' '}
						<p>Adults: {booking.adults}</p>
						<p>Children: {booking.children}</p>
						<button onClick={() => dispatch(removeBooking(booking.hotelId))}>
							Remove
						</button>
					</div>
				)
			)}
			<h3>Total Price: {totalPrice}</h3>
		</div>
	);
};

export default Cart;
