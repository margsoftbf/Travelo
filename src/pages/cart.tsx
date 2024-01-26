import { useSelector, useDispatch } from 'react-redux';
import { setOrderTotal } from '@/store/cartSlice';
import { RootState } from '@/store/store';
import { Background2 } from '../../public/assets/svg';
import { useEffect, useState } from 'react';
import BreadCrumb from '@/components/common/BreadCrumb';
import HotelsReservation from '@/components/Cart/HotelsReservation';
import EmptyCart from '@/components/Cart/EmptyCart';
import CouponForm from '@/components/Cart/CouponForm';
import ProceedToCheckout from '@/components/Cart/ProceedToCheckout';
import RestaurantReservation from '@/components/Cart/RestaurantReservation';
import AttractionReservation from '@/components/Cart/AttractionReservation';

const CartPage = () => {
	const { bookings, totalPrice, restaurantBooking, attractionBooking } =
		useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();
	const [couponApplied, setCouponApplied] = useState(false);
	const tax = 0.07;
	const discountRate = 0.2;
	const restaurantBookingPrice = 50;

	const totalAttractionBookingPrice = attractionBooking.reduce(
		(total, booking) => {
			const price = parseFloat(booking.selectedOffer.price.replace('$', ''));
			return total + price;
		},
		0
	);
	const totalRestaurantBookingPrice =
		restaurantBooking.length * restaurantBookingPrice;
	const updatedTotalPrice =
		totalPrice + totalRestaurantBookingPrice + totalAttractionBookingPrice;
	const discountedPrice = couponApplied
		? updatedTotalPrice * (1 - discountRate)
		: updatedTotalPrice;

	const orderTotal = couponApplied
		? discountedPrice + discountedPrice * tax
		: updatedTotalPrice + updatedTotalPrice * tax;

	const calculateOrderTotal = () => {
		const orderTotal = couponApplied
			? discountedPrice + discountedPrice * tax
			: updatedTotalPrice + updatedTotalPrice * tax;
		dispatch(setOrderTotal(orderTotal));
	};

	useEffect(() => {
		calculateOrderTotal();
	}, [couponApplied, totalPrice, restaurantBooking, attractionBooking]);

	const handleProceedToCheckout = () => {
		calculateOrderTotal();
	};

	const handleCouponApply = (isApplied: boolean, discountRate: number) => {
		setCouponApplied(isApplied);
		calculateOrderTotal();
	};

	const breadcrumbSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Cart', current: true },
	];
	return (
		<div className='relative overflow-hidden pb-8 '>
			<Background2 className='absolute w-[100vw] h-[100vh] m-0 p-0 -z-10' />
			<div className='py-6 w-full bg-neutral'>
				<div className='flex flex-col justify-center items-center bg-neutral'>
					<h1 className='text-myBlack  font-coveredByGrace text-6xl font-bold text-center tracking-widest'>
						Cart
					</h1>
					<BreadCrumb pathSegments={breadcrumbSegments} />
				</div>
			</div>

			<div className='mx-auto p-4 max-w-7xl bg-white'>
				{bookings.length === 0 &&
				restaurantBooking.length === 0 &&
				attractionBooking.length === 0 ? (
					<EmptyCart />
				) : (
					<div className='relative'>
						<div className=' mt-1 flow-root'>
							<div className='flex flex-col gap-10'>
								{bookings.length > 0 && <HotelsReservation />}
								{restaurantBooking.length > 0 && <RestaurantReservation />}
								{attractionBooking.length > 0 && <AttractionReservation />}
							</div>
							<div className='subt flex relative flex-col md:flex-row justify-between'>
								<CouponForm onApplyCoupon={handleCouponApply} />
								<ProceedToCheckout
									subtotal={updatedTotalPrice}
									tax={tax}
									orderTotal={orderTotal}
									onCheckout={handleProceedToCheckout}
								/>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartPage;
