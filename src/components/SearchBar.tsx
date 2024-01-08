import React, { ChangeEvent, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
	Calendar,
	Hiking,
	Location,
	Minus,
	Plus,
} from '../../public/assets/svg';
import { useRouter } from 'next/router';

const SearchBar = () => {
	const [guest, setGuest] = useState(1);
	const [selectedDate, setSelectedDate] = useState('');
	const [query, setQuery] = useState('');
	const [type, setType] = useState('Hotels');
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/${type}/${query}`);
	};

	const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedDate(e.target.value);
	};

	return (
		<form
			className='flex flex-col md:flex-row items-center justify-center gap-2 p-4 bg-white z-50 w-80 md:w-[700px] lg:w-[900px] rounded-lg'
			onSubmit={handleSubmit}
		>
			<div className='flex flex-col w-full'>
				<label className='text-xs font-dmSans text-softGrey'>Location</label>
				<div className='relative mt-1 rounded-md shadow-sm'>
					<input
						type='text'
						name='location'
						id='location'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className='block w-full text-[12px] rounded-md font-dmSans border-0 py-1 pr-10 text-myBlack ring-1 pl-2 ring-inset outline-none ring-gray-300 placeholder:text-myBlack sm:leading-6'
						placeholder='Where to next'
					/>
					<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
						<Location className='h-4 w-4 text-gray-400' aria-hidden='true' />
					</div>
				</div>
			</div>

			<div className='flex flex-col w-full mt-2 md:mt-0'>
				<label className='text-xs font-dmSans text-softGrey'>Type</label>
				<div className='relative mt-1 rounded-md shadow-sm'>
					<select
						className='block w-full text-[12px]  rounded-md font-dmSans border-0 py-1 pr-10 text-myBlack ring-1 pl-2 ring-inset outline-none ring-gray-300 placeholder:text-myBlack sm:leading-6 appearance-none'
						value={type}
						onChange={(e) => setType(e.target.value)}
					>
						<option value='Hotels'>Hotels</option>
						<option value='Restaurants'>Restaurants</option>
						<option value='Things to do'>Things to do</option>
					</select>
					<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
						<Hiking className='h-5 w-5 text-gray-400' aria-hidden='true' />
					</div>
				</div>
			</div>

			<div className='flex flex-col w-full mt-2 md:mt-0'>
				<label className='text-xs font-dmSans text-softGrey'>Date From</label>
				<div className='relative mt-1 rounded-md shadow-sm'>
					<input
						className='block w-full text-[12px]  rounded-md border-0 py-1 pr-10 font-dmSans text-myBlack ring-1 pl-2 ring-inset outline-none ring-gray-300 placeholder:text-myBlack sm:leading-6'
						type='text'
						placeholder='Select date'
						onFocus={(e) => (e.target.type = 'date')}
						onBlur={(e) => (e.target.type = 'text')}
						value={selectedDate}
						onChange={handleDateChange}
					/>
					<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
						<Calendar className='h-4 w-4 text-gray-400' aria-hidden='true' />
					</div>
				</div>
			</div>

			<div className='flex flex-row w-full gap-2'>
				<div className='flex flex-col w-full'>
					<label className='text-xs font-dmSans text-softGrey'>Guests</label>
					<div className='relative mt-1 rounded-md shadow-sm'>
						<div className='flex border-2 rounded-md'>
							<input
								readOnly
								className='flex-1 text-[12px] text-left border-0 py-1 font-dmSans text-myBlack ring-inset outline-none pl-2 placeholder:text-text-myBlack  sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
								type='number'
								value={guest}
							/>
							<div className='absolute inset-y-0 right-0 gap-1 flex items-center pr-2'>
								<Minus
									className='h-4 w-4 text-gray-400 cursor-pointer'
									aria-hidden='true'
									onClick={() => setGuest(guest > 1 ? guest - 1 : 1)}
								/>
								<Plus
									className='h-4 w-4 text-gray-400 cursor-pointer'
									aria-hidden='true'
									onClick={() => setGuest(guest < 8 ? guest + 1 : 8)}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex justify-center items-end mb-0.5 gap-3 '>
					<button
						typeof='submit'
						className='w-16 h-8 rounded-md bg-primary flex items-center justify-center flex-shrink-0 hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
					>
						<FiSearch className='w-6 h-6 text-white' />
					</button>
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
