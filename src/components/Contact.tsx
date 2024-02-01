import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';

import { ContactDataTypes } from '@/types/types';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const Contact = () => {
	const initialFormData = {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		message: '',
	};

	const [formData, setFormData] = useState<ContactDataTypes>(initialFormData);
	const [errors, setErrors] = useState<Partial<ContactDataTypes>>({});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const validateForm = () => {
		const newErrors: Partial<ContactDataTypes> = {};
		const phoneNumberNumeric = Number(formData.phoneNumber);
		if (!formData.firstName.trim() || formData.firstName.trim().length < 3)
			newErrors.firstName = 'First name must be at least 3 characters';

		if (!formData.lastName.trim() || formData.lastName.trim().length < 3)
			newErrors.lastName = 'Last name must be at least 3 characters';

		if (!formData.email.trim()) newErrors.email = 'Email is required';
		if (!formData.phoneNumber.trim()) {
			newErrors.phoneNumber = 'Phone Number is required';
		} else if (
			isNaN(phoneNumberNumeric) ||
			!Number.isInteger(phoneNumberNumeric)
		) {
			newErrors.phoneNumber = 'Phone Number must be a number';
		} else if (formData.phoneNumber.trim().length < 9) {
			newErrors.phoneNumber = 'Phone Number must be at least 9 digits';
		}
		if (!formData.message.trim() || formData.message.trim().length < 3)
			newErrors.message = 'Message must be at least 3 characters';

		return newErrors;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const formErrors = validateForm();
		setErrors(formErrors);

		if (Object.keys(formErrors).length === 0) {
			setIsFormSubmitted(true);
			setTimeout(() => setIsFormSubmitted(false), 3000);
			setFormData(initialFormData);
		}
	};

	const { ref, controls } = useScrollAnimation();

	return (
		<motion.div
			className='relative w-full mx-auto bg-neutral'
			ref={ref}
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 1.2, type: 'ease-in' }}
		>
			<div className='max-w-8xl mx-auto relative'>
				<div className='max-w-4xl mx-auto flex flex-col justify-center items-center gap-2 pt-6 pb-4 px-6'>
					<p className='font-dmSans font-bold text-base text-primary tracking-wider'>
						Contact Us
					</p>
					<p className='font-dmSans text-3xl font-bold text-center text-myBlack'>
						Feel Free to Write us Anytime
					</p>
				</div>
				<form onSubmit={handleSubmit} className='p-6'>
					<div className='mx-auto max-w-3xl'>
						<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
							<div>
								<label
									htmlFor='firstName'
									className='block text-sm font-semibold leading-6 text-myBlack'
								>
									First name
								</label>
								<div className='mt-2.5 my-2'>
									<input
										type='text'
										name='firstName'
										id='firstName'
										autoComplete='given-name'
										value={formData.firstName}
										onChange={handleInputChange}
										className={`block border w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-myGray sm:text-sm sm:leading-6 ${
											errors.firstName ? ' border-red-500' : 'border-secondary'
										}`}
									/>
									{errors.firstName && (
										<p className='absolute text-red-500 text-xs font-semibold my-1'>
											{errors.firstName}
										</p>
									)}
								</div>
							</div>
							<div>
								<label
									htmlFor='lastName'
									className='block text-sm font-semibold leading-6 text-myBlack'
								>
									Last name
								</label>
								<div className='mt-2.5'>
									<input
										type='text'
										name='lastName'
										id='lastName'
										autoComplete='family-name'
										value={formData.lastName}
										onChange={handleInputChange}
										className={`block border w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-myGray sm:text-sm sm:leading-6 ${
											errors.lastName ? ' border-red-500' : 'border-secondary'
										}`}
									/>
									{errors.lastName && (
										<p className='absolute text-red-500 text-xs font-semibold my-1'>
											{errors.lastName}
										</p>
									)}
								</div>
							</div>
							<div className='sm:col-span-1 mt-2s'>
								<label
									htmlFor='email'
									className='block text-sm font-semibold leading-6 text-myBlack'
								>
									Email
								</label>
								<div className='mt-2.5'>
									<input
										type='email'
										name='email'
										id='email'
										autoComplete='email'
										value={formData.email}
										onChange={handleInputChange}
										className={`block border w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-myGray sm:text-sm sm:leading-6 ${
											errors.email ? ' border-red-500' : 'border-secondary'
										}`}
									/>
									{errors.email && (
										<p className='absolute text-red-500 text-xs font-semibold my-1'>
											{errors.email}
										</p>
									)}
								</div>
							</div>
							<div className='sm:col-span-1'>
								<label
									htmlFor='phoneNumber'
									className='block text-sm font-semibold leading-6 text-myBlack'
								>
									Phone number
								</label>
								<div className='mt-2.5'>
									<input
										type='number'
										name='phoneNumber'
										id='phoneNumber'
										autoComplete='tel'
										value={formData.phoneNumber}
										onChange={handleInputChange}
										className={`block border w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-myGray sm:text-sm sm:leading-6 ${
											errors.phoneNumber
												? ' border-red-500'
												: 'border-secondary'
										}`}
									/>
									{errors.phoneNumber && (
										<p className='absolute text-red-500 text-xs font-semibold my-1'>
											{errors.phoneNumber}
										</p>
									)}
								</div>
							</div>
							<div className='sm:col-span-2 mt-2'>
								<label
									htmlFor='message'
									className='block text-sm font-semibold leading-6 text-myBlack'
								>
									Message
								</label>
								<div className='mt-2.5'>
									<textarea
										name='message'
										id='message'
										rows={4}
										value={formData.message}
										onChange={handleInputChange}
										className={`block border w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-myGray sm:text-sm sm:leading-6 ${
											errors.message ? ' border-red-500' : 'border-secondary'
										}`}
									/>
									{errors.message && (
										<p className='absolute text-red-500 text-xs font-semibold my-1'>
											{errors.message}
										</p>
									)}
								</div>
							</div>
						</div>
						<div className='mt-8 flex justify-center'>
							<button
								type='submit'
								className='w-48 h-12 font-dmSans font-medium rounded-md bg-primary flex items-center text-white p-2 justify-center flex-shrink-0 hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
							>
								Send message
							</button>
						</div>
					</div>
				</form>
				{isFormSubmitted && <div>Your message has been sent!</div>}
			</div>
			{/* <div className='mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2'>
				<div className='relative px-6 pb-20 pt-12 lg:static lg:px-8'>
					<div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
						<div className='flex gap-2 relative'>
							<h2 className='font-lemonada text-myOrange font-dmSans font-semibold'>
								Contact Us
							</h2>
						</div>
						<p className='mt-6 text-4xl font-coveredByGrace  text-myBlack font-bakilda'>
							Have Any Question? We Are Here to Listen From You
						</p>
						<p className='mt-6 text-sm  text-myGray font-openSans'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
							deleniti? Est perspiciatis suscipit porro rem. Nam velit eius ea!
							Sunt architecto mollitia ad officiis neque quas voluptas delectus
							expedita saepe.
						</p>
						<div className='mt-10 space-y-8 text-base leading-7 text-myBlack'>
							<div className='flex gap-x-4 items-center'>
								<div className='flex items-center justify-center bg-primary rounded-full w-9 h-9'>
									<span className='sr-only'>Address</span>
									<BuildingOffice2Icon
										className='h-6 w-6 text-white'
										aria-hidden='true'
									/>
								</div>
								<div className='text-myBlack'>
									12 Central Park
									<br />
									New York, NY 90726
								</div>
							</div>
							<div className='flex gap-x-4 items-center'>
								<div className='flex items-center justify-center bg-primary rounded-full w-9 h-9'>
									<span className='sr-only'>Telephone</span>
									<PhoneIcon
										className='h-6 w-6 text-white'
										aria-hidden='true'
									/>
								</div>
								<div>
									<a className='text-myBlack' href='tel:+1 (555) 234-5678'>
										+1 (555) 234-5678
									</a>
								</div>
							</div>
							<div className='flex gap-x-4 items-center'>
								<div className='flex items-center justify-center bg-primary rounded-full w-9 h-9'>
									<span className='sr-only'>Email</span>
									<EnvelopeIcon
										className='h-7 w-6 text-white'
										aria-hidden='true'
									/>
								</div>
								<div>
									<a className='text-myBlack' href='mailto:hello@example.com'>
										hello@example.com
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</motion.div>
	);
};

export default Contact;
