import React from 'react';
import Link from 'next/link';

interface ProceedToCheckoutProps {
    totalPrice: number;
    tax: number;
	orderTotal: number;
	onCheckout: () => void;
}
const ProceedToCheckout: React.FC<ProceedToCheckoutProps> = ({totalPrice, tax, orderTotal, onCheckout}) => {
	return (
		<div className='w-full md:w-1/2 mt-4 '>
			<section
				aria-labelledby='summary-heading'
				className='rounded-lg bg-neutral px-4 py-6 sm:p-6 lg:col-span-5 lg:p-8'
			>
				<h2 id='summary-heading' className='text-lg font-medium text-gray-900'>
					Order summary
				</h2>

				<div className='mt-6 space-y-4'>
					<div className='flex items-center justify-between'>
						<div className='text-sm text-gray-600'>Subtotal</div>
						<div className='text-sm font-medium text-gray-900'>
							${totalPrice.toFixed(2)}
						</div>
					</div>
					<div className='flex items-center justify-between border-t border-gray-200 pt-4'>
						<div className='flex text-sm text-gray-600'>
							<span>Tax estimate</span>
						</div>
						<div className='text-sm font-medium text-gray-900'>
							${(totalPrice * tax).toFixed(2)}
						</div>
					</div>
					<div className='flex items-center justify-between border-t border-gray-200 pt-4'>
						<div className='text-base font-medium text-gray-900'>
							Order total
						</div>
						<div className='text-base font-medium text-gray-900'>
							${orderTotal.toFixed(2)}
						</div>
					</div>
				</div>

				<div className='mt-6'>
					<Link href='/checkout'>
						<button
							onClick={onCheckout}
							className='w-full items-center py-3 justify-center rounded-md flex  font-semibold p-2 gap-2 bg-primary text-white hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
						>
							Proceed to Checkout
						</button>
					</Link>
				</div>
			</section>
		</div>
	);
};

export default ProceedToCheckout;
