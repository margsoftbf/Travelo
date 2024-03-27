import React, { ChangeEvent, FormEvent } from 'react';
import { PaymentFormDataTypes } from '@/types/types';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import InputField from './FormHelper/InputField';
import ApplePayButton from './FormHelper/ApplePayButton';
import SubmitButton from './FormHelper/SubmitButton';

interface FormProps {
	formData: PaymentFormDataTypes;
	setFormData: React.Dispatch<React.SetStateAction<PaymentFormDataTypes>>;
	errors: Partial<PaymentFormDataTypes>;
	handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleInputMax: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: FormEvent) => void;
	total: number;
}

const Form = ({
	formData,
	setFormData,
	errors,
	handleInputChange,
	handleInputMax,
	handleSubmit,
	total,
}: FormProps) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className='grid grid-cols-12 gap-x-4 gap-y-6'>
				<InputField
					customClasses='col-span-full'
					label='Email address'
					type='email'
					id='email'
					name='email'
					autoComplete='email'
					value={formData.email}
					onChange={handleInputChange}
					error={errors.email}
				/>
				<InputField
					customClasses='col-span-full'
					label='Name on card'
					type='text'
					id='nameOnCard'
					name='nameOnCard'
					autoComplete='cc-name'
					value={formData.nameOnCard}
					onChange={handleInputChange}
					error={errors.nameOnCard}
				/>
				<InputField
					customClasses='col-span-full'
					label='Card number'
					type='number'
					id='cardNumber'
					name='cardNumber'
					autoComplete='cc-number'
					value={formData.cardNumber}
					onChange={handleInputChange}
					onInput={handleInputMax}
					error={errors.cardNumber}
				/>
				<InputField
					customClasses='col-span-8 sm:col-span-9'
					label='Expiration date (MM/YY)'
					type='number'
					id='expirationDate'
					name='expirationDate'
					autoComplete='cc-exp'
					value={formData.expirationDate}
					onChange={handleInputChange}
					error={errors.expirationDate}
				/>
				<InputField
					customClasses='col-span-4 sm:col-span-3'
					label='CVC'
					type='number'
					id='cvc'
					name='cvc'
					autoComplete='csc'
					value={formData.cvc}
					onChange={handleInputChange}
					onInput={handleInputMax}
					error={errors.cvc}
				/>
				<InputField
					customClasses='col-span-full'
					label='Address'
					type='text'
					id='address'
					name='address'
					autoComplete='street-address'
					value={formData.address}
					onChange={handleInputChange}
					error={errors.address}
				/>
				<InputField
					customClasses='col-span-full sm:col-span-4'
					label='City'
					type='text'
					id='city'
					name='city'
					autoComplete='address-level2'
					value={formData.city}
					onChange={handleInputChange}
					error={errors.city}
				/>
				<InputField
					customClasses='col-span-full sm:col-span-4'
					label='State / Province'
					type='text'
					id='state'
					name='state'
					autoComplete='address-level1'
					value={formData.state}
					onChange={handleInputChange}
					error={errors.state}
				/>
				<InputField
					customClasses='col-span-full sm:col-span-4'
					label='Postal Code'
					type='number'
					id='postalCode'
					name='postalCode'
					autoComplete='postal-code'
					value={formData.postalCode}
					onChange={handleInputChange}
					onInput={handleInputMax}
					error={errors.postalCode}
				/>
			</div>

			<div className='mt-6 flex space-x-2'>
				<div className='flex h-5 items-center'>
					<input
						id='same-as-shipping'
						name='same-as-shipping'
						type='checkbox'
						defaultChecked
						className='h-4 w-4 rounded border-gray-300 text-xs px-2 py-2  outline-none'
					/>
				</div>
				<label
					htmlFor='same-as-shipping'
					className='text-sm font-medium text-gray-900'
				>
					Billing address is the same as shipping address
				</label>
			</div>
			<div className='flex flex-col gap-2'>
				<SubmitButton total={total}/>
				<ApplePayButton />
			</div>
			<p className='mt-6 flex justify-center text-sm font-medium text-gray-500'>
				<LockClosedIcon
					className='mr-1.5 h-5 w-5 text-gray-400'
					aria-hidden='true'
				/>
				Payment details stored in plain text
			</p>
		</form>
	);
};

export default Form;
