import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/router';
import 'react-datepicker/dist/react-datepicker.css';
import hotelsData from '../../data/Hotels.json';
import restaurantsData from '../../data/Restaurant.json';
import thingsToDoData from '../../data/ThingsToDo.json';
import LocationInput from './LocationInput';
import DateRangePicker from './DateRangePicker';
import TypeSelect from './TypeSelect';
import GuestsInput from './GuestsInput';

const SearchBar = () => {
	const [guest, setGuest] = useState(1);
	const [query, setQuery] = useState('');
	const [type, setType] = useState('');
	const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
		null,
		null,
	]);
	const [startDate, endDate] = dateRange;
	const router = useRouter();

	const [errors, setErrors] = useState({
		location: '',
		type: '',
		dateRange: '',
	});
	const allLocations = [...hotelsData, ...restaurantsData, ...thingsToDoData];
	const [suggestions, setSuggestions] = useState<string[]>([]);

	const filterData = (query: string): string[] => {
		const uniqueCities = new Set<string>();

		allLocations.forEach((item) => {
			if (item.addressObj && item.addressObj.city) {
				const city = item.addressObj.city;

				if (city.toLowerCase().includes(query.toLowerCase())) {
					uniqueCities.add(city);
				}
			}
		});

		return Array.from(uniqueCities);
	};

	const handleLocationChange = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		const value = e.target.value;
		setQuery(value);

		if (value.length > 2) {
			const filteredSuggestions = filterData(value);
			setSuggestions(filteredSuggestions);
		} else {
			setSuggestions([]);
		}
	};

	const handleSuggestionClick = (suggestion: string): void => {
		setQuery(suggestion);
		setSuggestions([]);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let newErrors = {
			location: '',
			type: '',
			dateRange: '',
		};

		if (!query.trim()) {
			newErrors.location = 'Location is required';
		}

		if (!type) {
			newErrors.type = 'Type is required';
		}

		if (!startDate || !endDate) {
			newErrors.dateRange = 'Date range is required';
		}

		setErrors(newErrors);

		const isFormValid =
			!newErrors.location && !newErrors.type && !newErrors.dateRange;

		if (isFormValid) {
			router.push(`/${type}/${query}`);
		}
	};

	return (
		<form
			className='flex flex-col md:flex-row items-center justify-center gap-2 p-4 pb-6 bg-white z-50 w-80 md:w-[700px] lg:w-[900px] rounded-lg'
			onSubmit={handleSubmit}
		>
			<LocationInput
				query={query}
				setQuery={setQuery}
				suggestions={suggestions}
				handleLocationChange={handleLocationChange}
				handleSuggestionClick={handleSuggestionClick}
				errors={errors}
			/>
			<TypeSelect type={type} setType={setType} hasError={!!errors.type} />

			<div className='flex flex-col w-full mt-2 md:mt-0'>
				<label
					className={`text-xs font-dmSans ${
						errors.dateRange ? 'text-red-500' : 'text-softGrey'
					}`}
				>
					{errors.dateRange ? 'Date required' : 'Date Range'}
				</label>
				<div className='relative mt-1 rounded-md shadow-sm'>
					<DateRangePicker
						startDate={startDate}
						endDate={endDate}
						setDateRange={setDateRange}
						hasError={!!errors.dateRange}
					/>
				</div>
			</div>

			<div className='flex flex-row w-full gap-2'>
				<GuestsInput guest={guest} setGuest={setGuest} />
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
