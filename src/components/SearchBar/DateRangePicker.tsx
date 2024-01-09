import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar } from '../../../public/assets/svg';

interface DateRangePickerProps {
	startDate: Date | null;
	endDate: Date | null;
	setDateRange: React.Dispatch<
		React.SetStateAction<[Date | null, Date | null]>
	>;
	hasError: boolean;
}

const CustomInput = forwardRef<HTMLInputElement, { value?: string; onClick?: () => void; hasError?: boolean }>(
    ({ value, onClick, hasError }, ref) => (
        <div className={`relative w-full text-[12px] rounded-md py-1 pr-10 font-dmSans text-myBlack ring-1 pl-2 ring-inset outline-none ring-gray-300 placeholder:text-myBlack sm:leading-6 ${hasError ? 'border-red-500 border' : ''}`}>
            <input
                ref={ref}
                type="text"
                className="block w-full"
                value={value || ''}
                onClick={onClick}
                readOnly
                placeholder="Select date range"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <Calendar className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </div>
        </div>
    )
);


const DateRangePicker: React.FC<DateRangePickerProps> = ({ startDate, endDate, setDateRange, hasError }) => (
    <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => setDateRange(update)}
        customInput={<CustomInput hasError={hasError} />}
        isClearable={false}
        popperPlacement="bottom"
        wrapperClassName="w-full"
    />
);

export default DateRangePicker;