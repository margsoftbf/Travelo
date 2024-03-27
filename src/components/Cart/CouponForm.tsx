import { useState } from 'react';


interface CouponFormProps {
    onApplyCoupon: (isApplied: boolean, discountRate: number) => void;
  }

const CouponForm = ({onApplyCoupon}: CouponFormProps) => {
  

	const [couponCode, setCouponCode] = useState('');
	const [couponApplied, setCouponApplied] = useState(false);
	const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
	const discountRate = 0.2;

	const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCouponCode(e.target.value);
	};


    const handleApplyCoupon = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasAttemptedSubmit(true);
        if (couponCode === 'SPECIAL20') {
            setCouponApplied(true);
            onApplyCoupon(true, discountRate); 
        } else {
            setCouponApplied(false);
            onApplyCoupon(false, discountRate); 
        }
      };


	return (
		<div className='w-full md:w-1/2 pr-4'>
			<form className='mt-5 flex gap-4' onSubmit={handleApplyCoupon}>
				<div className='w-full'>
					<label htmlFor='coupon' className='sr-only'>
						Coupon
					</label>
					<input
						type='text'
						name='coupon'
						id='coupon'
						value={couponCode}
						onChange={handleCouponChange}
						className='block  border-none w-full outline-none rounded-md text-sm ring-1 px-2 font-dmSans py-3 text-gray-900 bg-neutral shadow-sm ring-[#d6cdc1] placeholder:text-softGrey'
						placeholder='Enter Coupon Code: "SPECIAL20"'
					/>
				</div>
				<button
					type='submit'
					className='w-full items-center justify-center rounded-md flex  font-semibold p-2 gap-2 bg-primary text-white hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
				>
					Apply Coupon
				</button>
			</form>
			{hasAttemptedSubmit && !couponApplied && (
				<p className='text-red-500 mt-1 font-dmSans font-medium'>
					Wrong coupon code!
				</p>
			)}
			{couponApplied && (
				<p className='text-green-500 mt-1 font-dmSans font-medium'>
					Coupon applied!
				</p>
			)}
		</div>
	);
};

export default CouponForm;
