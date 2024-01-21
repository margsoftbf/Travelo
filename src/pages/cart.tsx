import { useSelector, useDispatch } from 'react-redux';
import { setOrderTotal } from '@/store/cartSlice';
import { RootState } from '@/store/store';
import { Background2 } from '../../public/assets/svg';
import Link from 'next/link';
import { useState } from 'react';
import BreadCrumb from '@/components/common/BreadCrumb';
import HotelsReservation from '@/components/Cart/HotelsReservation';
import EmptyCart from '@/components/Cart/EmptyCart';
import CouponForm from '@/components/Cart/CouponForm';
import ProceedToCheckout from '@/components/Cart/ProceedToCheckout';

const CartPage = () => {
	const { bookings, totalPrice } = useSelector(
		(state: RootState) => state.cart
	);
	const dispatch = useDispatch();
	const [couponApplied, setCouponApplied] = useState(false);
	const tax = 0.07;
	const discountRate = 0.2;
	const discountedPrice = couponApplied
		? totalPrice * (1 - discountRate)
		: totalPrice;
	const orderTotal = discountedPrice + discountedPrice * tax;

	const handleProceedToCheckout = () => {
		dispatch(setOrderTotal(orderTotal));
	};

	const handleCouponApply = (isApplied: boolean, discountRate: number) => {
		setCouponApplied(isApplied);

		const newDiscountedPrice = isApplied
			? totalPrice * (1 - discountRate)
			: totalPrice;
		const newOrderTotal = newDiscountedPrice + newDiscountedPrice * tax;
		setOrderTotal(newOrderTotal);
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
				{bookings.length === 0 ? (
					<EmptyCart />
				) : (
					<div className='relative'>
						<div className=' mt-1 flow-root'>
							<HotelsReservation />
							<div className='subt flex relative flex-col md:flex-row justify-between'>
								<CouponForm onApplyCoupon={handleCouponApply} />
								<ProceedToCheckout
									totalPrice={totalPrice}
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
