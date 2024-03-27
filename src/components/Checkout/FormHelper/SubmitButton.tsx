import React from 'react';

interface SubmitButtonProps {
	total: number;
}
const SubmitButton = ({ total }: SubmitButtonProps) => {
	return (
		<button
			type='submit'
			className='mt-6 w-full rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-myBlack duration-300 transition ease-in-out '
		>
			Pay ${total.toFixed(2)}
		</button>
	);
};

export default SubmitButton;
