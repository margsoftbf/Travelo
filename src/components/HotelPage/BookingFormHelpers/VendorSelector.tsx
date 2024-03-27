import { Offer } from '@/types/types';
import React from 'react';

interface VendorSelectorProps {
	offers: Offer[];
	selectedVendor: string;
	onVendorChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const VendorSelector = ({
	offers,
	selectedVendor,
	onVendorChange,
}: VendorSelectorProps) => {
	return (
		<div className='flex flex-col w-full md:mt-0 '>
			<label
				htmlFor='vendor'
				className='text-xs font-dmSans text-softGrey font-semibold'
			>
				Choose a vendor:
			</label>
			<select
				id='vendor'
				className='mt-1 flex-1 text-[12px] text-left border-2 rounded-md py-1 font-dmSans text-myBlack ring-inset outline-none placeholder:text-text-myBlack sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
				value={selectedVendor}
				onChange={onVendorChange}
			>
				{offers.map((offer, index) => (
					<option key={index} value={offer.vendor}>
						{offer.vendor} (${offer.pricePerNight})
					</option>
				))}
			</select>
		</div>
	);
};

export default VendorSelector;
