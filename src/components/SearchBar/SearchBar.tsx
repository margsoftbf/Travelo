import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/router';

import hotelsData from '../../data/Hotels.json';
import restaurantsData from '../../data/Restaurant.json';
import attractionsData from '../../data/Attractions.json';
import LocationInput from './LocationInput';

import TypeSelect from './TypeSelect';


const SearchBar = () => {
	const [query, setQuery] = useState('');
	const [type, setType] = useState('');
	const router = useRouter();

	const [errors, setErrors] = useState({
		location: '',
		type: '',
	});
	const allLocations = [...hotelsData, ...restaurantsData, ...attractionsData];
	const [suggestions, setSuggestions] = useState<string[]>([]);

	const filterData = (query: string): string[] => {
		const uniqueCities = new Set<string>();

		let exactMatch = false;
		allLocations.forEach((item) => {
			if (item.addressObj && item.addressObj.city) {
				const city = item.addressObj.city;

				if (city.toLowerCase() === query.toLowerCase()) {
					exactMatch = true;
				}

				if (city.toLowerCase().includes(query.toLowerCase())) {
					uniqueCities.add(city);
				}
			}
		});

		return exactMatch ? [] : Array.from(uniqueCities);
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
		};

		if (!query.trim()) {
			newErrors.location = 'Location is required';
		}

		if (!type) {
			newErrors.type = 'Type is required';
		}

		setErrors(newErrors);

		const isFormValid = !newErrors.location && !newErrors.type;

		if (isFormValid) {
			const typePath = type.toLowerCase();
			router.push(`/${typePath}/${query}`);
		}
	};

	return (
		<form
			className='flex flex-col md:flex-row items-center justify-center gap-4 p-4 pb-4 z-50 w-80 bg-white md:w-[600px] rounded-lg '
			onSubmit={handleSubmit}
		>
			<LocationInput
				query={query}
				setQuery={setQuery}
				suggestions={suggestions}
				handleLocationChange={handleLocationChange}
				handleSuggestionClick={handleSuggestionClick}
				errors={errors}
				variant='main'
			/>
			<TypeSelect type={type} setType={setType} hasError={!!errors.type} />

			<div className='flex justify-center items-end  w-full gap-3  '>
				<button
					typeof='submit'
					aria-label='submit'
					className='w-full h-10 rounded-md bg-primary flex items-center justify-center flex-shrink-0 hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
				>
					<span className='font-dmSans text-base text-white mr-2'>Search</span>
					<FiSearch className='w-5 h-5 text-white' />
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
