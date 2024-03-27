import React, { ChangeEvent } from 'react';

interface InputFieldProps {
	label: string;
	type: string;
	id: string;
	name: string;
	autoComplete: string;
	value: string | number;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onInput?: (e: ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	customClasses?: string;
}
const InputField = ({
	label,
	type,
	id,
	name,
	autoComplete,
	value,
	onChange,
	onInput,
	error,
	customClasses = '',
}: InputFieldProps) => (
	<div className={`${customClasses}`}>
		<label htmlFor={id} className='block text-sm font-medium text-gray-700'>
			{label}
		</label>
		<div className='mt-1'>
			<input
				type={type}
				id={id}
				name={name}
				autoComplete={autoComplete}
				value={value}
				onChange={onChange}
				onInput={onInput}
				className={`block w-full rounded-md text-xs px-2 py-2 shadow-sm outline-none sm:text-sm ${
					error ? 'border-red-500' : 'border-gray-300'
				}`}
			/>
			{error && (
				<p className='text-red-500 text-xs font-semibold mt-1'>{error}</p>
			)}
		</div>
	</div>
);

export default InputField;
