import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Background2 } from '../../public/assets/svg';
import BreadCrumb from '@/components/common/BreadCrumb';
import { PaymentFormDataTypes, getNumberOfNights } from '@/types/types';
import { clearCart } from '@/store/cartSlice';
import Link from 'next/link';
import Image from 'next/image';
import Form from '@/components/Checkout/Form';
import MobileOrderSummary from '@/components/Checkout/MobileOrderSummary';
import DesktopOrderSummary from '@/components/Checkout/DesktopOrderSummary';
const CheckoutPage = () => {
	const {
		bookings,
		totalPrice,
		orderTotal,
		restaurantBooking,
		attractionBooking,
	} = useSelector((state: RootState) => state.cart);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const dispatch = useDispatch();
	const taxes = 0.07;
	const total = orderTotal;
	const totalAttractionBookingPrice = attractionBooking.reduce(
		(total, booking) => {
			const price = parseFloat(booking.selectedOffer.price.replace('$', ''));
			return total + price;
		},
		0
	);
	const restaurantReservationPrice = 50;
	const totalBookingPrice = bookings.reduce((acc, booking) => {
		const numberOfNights = getNumberOfNights(
			booking.checkInDate ?? '',
			booking.checkOutDate ?? ''
		);
		return acc + numberOfNights * booking.pricePerNight;
	}, 0);

	const totalRestaurantBookingPrice =
		restaurantBooking.length * restaurantReservationPrice;
	const updatedTotalPrice =
		totalBookingPrice +
		totalRestaurantBookingPrice +
		totalAttractionBookingPrice;

	const initialFormData: PaymentFormDataTypes = {
		email: '',
		nameOnCard: '',
		cardNumber: '',
		expirationDate: '',
		cvc: '',
		address: '',
		city: '',
		state: '',
		postalCode: '',
	};

	const [formData, setFormData] =
		useState<PaymentFormDataTypes>(initialFormData);
	const [errors, setErrors] = useState<Partial<PaymentFormDataTypes>>({});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleInputMax = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.id === 'cardNumber') {
			e.target.value = e.target.value.slice(0, 16);
		} else if (e.target.id === 'cvc') {
			e.target.value = e.target.value.slice(0, 3);
		} else if (e.target.id === 'postalCode') {
			e.target.value = e.target.value.slice(0, 5);
		}
	};

	const validateForm = (): boolean => {
		let isValid = true;
		let newErrors: Partial<PaymentFormDataTypes> = {};

		if (!formData.email) {
			newErrors.email = 'Email is required';
			isValid = false;
		}
		if (!formData.nameOnCard) {
			newErrors.nameOnCard = 'Name is required';
			isValid = false;
		}
		if (!formData.cardNumber) {
			newErrors.cardNumber = 'Card number is required';
			isValid = false;
		} else if (formData.cardNumber.length < 16) {
			newErrors.cardNumber = 'Card number must be 16 digits';
			isValid = false;
		}

		if (!formData.expirationDate) {
			newErrors.expirationDate = 'Expiration date is required';
			isValid = false;
		} else if (
			!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formData.expirationDate)
		) {
			newErrors.expirationDate = 'Invalid date format (MM/YY)';
			isValid = false;
		}

		if (!formData.cvc) {
			newErrors.cvc = 'CVC is required';
			isValid = false;
		} else if (formData.cvc.length < 3) {
			newErrors.cvc = 'CVC must be 3 digits';
			isValid = false;
		}

		if (!formData.address) {
			newErrors.address = 'Address is required';
			isValid = false;
		}
		if (!formData.city) {
			newErrors.city = 'City is required';
			isValid = false;
		}
		if (!formData.state) {
			newErrors.state = 'State is required';
			isValid = false;
		}
		if (!formData.state) {
			newErrors.state = 'State is required';
			isValid = false;
		}

		if (!formData.postalCode) {
			newErrors.postalCode = 'Postal Code required';
			isValid = false;
		} else if (formData.postalCode.length < 5) {
			newErrors.postalCode = 'Postal must be 5 digits';
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (validateForm()) {
			setIsFormSubmitted(true);
			setTimeout(() => setIsFormSubmitted(false), 3000);

			setFormData(initialFormData);
			setFormSubmitted(true);
			dispatch(clearCart());
		}
	};

	const breadcrumbSegments = [
		{ name: 'Home', href: '/', current: false },
		{ name: 'Checkout', current: true },
	];

	console.log(orderTotal);
	return (
		<div className='relative overflow-hidden pb-8 font-dmSans'>
			<Background2 className='absolute w-[100vw] h-[100vh] m-0 p-0 -z-10' />
			<div className='py-6 w-full bg-neutral'>
				<div className='flex flex-col justify-center items-center bg-neutral'>
					<h1 className='text-myBlack  font-coveredByGrace text-6xl font-bold text-center tracking-widest'>
						Checkout
					</h1>
					<BreadCrumb pathSegments={breadcrumbSegments} />
				</div>
			</div>
			<div className='mx-auto p-4 max-w-7xl bg-white'>
				{formSubmitted ? (
					<div className='flex flex-col items-center justify-center relative'>
						<div className='w-48 h-48 md:w-72 md:h-72 relative'>
							<Image
								src='/assets/successPayment.webp'
								alt='Success payment'
								fill={true}
								className='object-cover'
								quality={100}
								sizes='(max-width: 768px) 768px, (max-width: 1200px) 1200px, 100vw'
								placeholder='blur'
								priority={true}
								blurDataURL='/assets/successPayment.webp'
							/>
						</div>
						<p className='font-dmSans text-3xl font-medium text-myBlack my-4'>
							Thank you for your{' '}
							<span className='text-primary font-bold'>reservation!</span>
						</p>
						<p className='font-dmSans text-center'>
							Your booking has been successfully processed.
						</p>
						<Link
							href='/'
							className='mt-8 w-48 flex justify-center items-center font-semibold p-2 gap-2 rounded-md bg-primary text-white hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
						>
							Back to Homepage
						</Link>
					</div>
				) : (
					<main className='lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden'>
						<section aria-labelledby='order-heading' className='lg:hidden'>
							<MobileOrderSummary
								restaurantBooking={restaurantBooking}
								attractionBooking={attractionBooking}
								bookings={bookings}
								totalPrice={updatedTotalPrice}
								orderTotal={orderTotal}
								taxes={taxes}
							/>
						</section>
						<div className='flex w-full justify-center gap-2 mt-4 '>
							<DesktopOrderSummary
								restaurantBooking={restaurantBooking}
								attractionBooking={attractionBooking}
								bookings={bookings}
								totalPrice={updatedTotalPrice}
								orderTotal={orderTotal}
								taxes={taxes}
							/>
							<section
								aria-labelledby='payment-heading'
								className='w-full lg:w-1/2 overflow-y-auto'
							>
								<div className='mx-auto max-w-lg bg-neutral rounded-md border px-4 py-4'>
									<Form
										formData={formData}
										setFormData={setFormData}
										errors={errors}
										handleInputChange={handleInputChange}
										handleInputMax={handleInputMax}
										handleSubmit={handleSubmit}
										total={total}
									/>
								</div>
							</section>
						</div>
					</main>
				)}
			</div>
		</div>
	);
};

export default CheckoutPage;
