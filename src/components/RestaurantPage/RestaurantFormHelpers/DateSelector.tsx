import CustomInput from '@/components/HotelPage/BookingFormHelpers/CustomInput';
import React from 'react';
import DatePicker from 'react-datepicker';

interface DateSelectorProps {
	id: string;
	label: string;
	selectedDate: Date | null;
	setSelectedDate: (date: Date | null) => void;
	checkDateError: boolean;
	today: Date;
	error?: string;
}

const DateSelector = ({
	id,
	label,
	selectedDate,
	setSelectedDate,
	checkDateError,
	today,
	error,
}: DateSelectorProps) => {
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
			<DatePicker
				id={id}
				selected={selectedDate}
				onChange={(date) => setSelectedDate(date)}
				customInput={<CustomInput hasError={checkDateError} />}
				dateFormat='yyyy-MM-dd'
				minDate={today}
			/>
		</div>
	);
};

export default DateSelector;
