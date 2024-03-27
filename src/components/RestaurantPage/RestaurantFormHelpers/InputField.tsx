import React, { ChangeEvent } from 'react';

interface InputFieldProps {
	id: string;
	label: string;
	error?: string;
	type: string;
	value: string | number;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
}

const InputField = ({
	id,
	label,
	error,
	type,
	value,
	onChange,
	placeholder,
}: InputFieldProps) => {
	return (
		<div className='flex flex-col w-full md:mt-0 '>
			<label
				htmlFor={id}
				className='text-xs font-dmSans text-softGrey font-semibold'
			>
				{error ? (
					<p className='text-red-500 text-xs italic'>{error}</p>
				) : (
					<p>{label}</p>
				)}
			</label>
			<input
				type={type}
				id={id}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={`mt-1 block w-full text-xs rounded-md border-0  pl-2  py-1.5 font-dmSans text-myBlack shadow-sm outline-none ring-1 ring-inset  placeholder:text-xs placeholder:text-myBlack sm:text-sm sm:leading-6 ${
					error ? 'ring-red-400' : 'ring-gray-300'
				}`}
			/>
		</div>
	);
};

export default InputField;
