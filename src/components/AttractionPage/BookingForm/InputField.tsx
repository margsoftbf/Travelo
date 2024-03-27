import React from 'react';

interface InputFieldProps {
	id: string;
	type?: string;
	placeholder: string;
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
}

const InputField = ({
	id,
	type = 'text',
	placeholder,
	label,
	value,
	onChange,
	error,
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
			id={id}
			type={type}
			placeholder={placeholder}
			className={`mt-1 block w-full text-xs rounded-md border-0 pl-2 py-1 font-dmSans text-myBlack shadow-sm outline-none ring-1 ring-inset placeholder:text-xs placeholder:text-myBlack sm:text-sm sm:leading-6 ${
				error ? 'ring-red-400' : 'ring-gray-300'
			}`}
			value={value}
			onChange={onChange}
		/>
	</div>
    )
};

export default InputField;
