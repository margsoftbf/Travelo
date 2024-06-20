import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import CustomInput from './CustomInput';

interface DateHotelSelectorProps {
	checkInDate: string;
	checkOutDate: string;
	setCheckInDate: (date: string) => void;
	setCheckOutDate: (date: string) => void;
	checkInDateError: boolean;
	checkOutDateError: boolean;
	handleDateChange: (
		date: Date | null,
		setDate: (dateStr: string) => void,
		isCheckInDate?: boolean
	) => void;
}

const DateHotelSelector = ({
	checkInDate,
	checkOutDate,
	setCheckInDate,
	setCheckOutDate,
	checkInDateError,
	checkOutDateError,
	handleDateChange,
}: DateHotelSelectorProps) => {
	return (
		<div>
			<div
				className={`flex flex-col w-full md:mt-0 md:mb-2 ${
					checkInDateError ? 'text-red-500' : ''
				}`}
			>
				<label
					htmlFor='checkInDate'
					className={`text-xs font-dmSans text-softGrey font-semibold `}
				>
					Check-in Date:
				</label>
				<DatePicker
					selected={
						checkInDate ? moment(checkInDate, 'YYYY-MM-DD').toDate() : null
					}
					onChange={(date) => handleDateChange(date, setCheckInDate, true)}
					customInput={<CustomInput hasError={checkInDateError} />}
					dateFormat='yyyy-MM-dd'
				/>
				{checkInDateError && (
					<p className='text-red-500 text-xs italic'>Select Check In Date</p>
				)}
			</div>
			<div
				className={`flex flex-col w-full md:mt-0 ${
					checkOutDateError ? 'text-red-500' : ''
				}`}
			>
				<label
					htmlFor='checkOutDate'
					className='text-xs font-dmSans text-softGrey font-semibold'
				>
					Check-out Date:
				</label>
				<DatePicker
					selected={
						checkOutDate ? moment(checkOutDate, 'YYYY-MM-DD').toDate() : null
					}
					onChange={(date) => handleDateChange(date, setCheckOutDate)}
					customInput={<CustomInput hasError={checkOutDateError} />}
					dateFormat='yyyy-MM-dd'
				/>
				{checkOutDateError && (
					<p className='text-red-500 text-xs italic'>Select Check Out Date</p>
				)}
			</div>
		</div>
	);
};

export default DateHotelSelector;
