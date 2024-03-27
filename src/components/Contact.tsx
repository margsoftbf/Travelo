import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Object } from '../../public/assets/svg';
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
			id='contact'
			animate={controls}
			initial='hidden'
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 50 },
			}}
			transition={{ duration: 1.2, type: 'ease-in' }}
		>
			<div className='flex flex-row justify-end items-end'>
				<Object className='w-1/2 h-full absolute top-0 left-0' />
				<Object className='w-1/2 h-full absolute bottom-0 right-0' />
			</div>
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
		</motion.div>
	);
};

export default Contact;
