import React, { useState } from 'react';
import LocationInput from '../SearchBar/LocationInput';
import { FiSearch } from 'react-icons/fi';
import TypeSelect from '../SearchBar/TypeSelect';
import { useRouter } from 'next/router';
import hotelsData from '../../data/Hotels.json';
import restaurantsData from '../../data/Restaurant.json';
import attractionsData from '../../data/Attractions.json';

const FilterBar = () => {
	const router = useRouter();
	const [query, setQuery] = useState('');
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const [type, setType] = useState('');

	const [errors, setErrors] = useState({
		location: '',
		type: '',
	});

	const filterData = (query: string): string[] => {
		const uniqueCities = new Set<string>();
		const allLocations = [
			...hotelsData,
			...restaurantsData,
			...attractionsData,
		];

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

	const validateForm = () => {
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
		return !newErrors.location && !newErrors.type;
	};

	const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);

		if (value.length > 2) {
			const filteredSuggestions = filterData(value);
			setSuggestions(filteredSuggestions);
		} else {
			setSuggestions([]);
		}
	};

	const handleSuggestionClick = (suggestion: string) => {
		setQuery(suggestion);
		setSuggestions([]);
	};

	const handleSubmit = () => {
		if (validateForm()) {
			const typePath = type.toLowerCase();
			router.push(`/${typePath}/${query}`);
		}
	};

	return (
		<div className='p-4 border rounded shadow z-20 bg-white  space-y-3 relative'>
			<LocationInput
				query={query}
				setQuery={setQuery}
				suggestions={suggestions}
				handleLocationChange={handleLocationChange}
				handleSuggestionClick={handleSuggestionClick}
				errors={errors}
				variant='filter'
			/>

			<TypeSelect type={type} setType={setType} hasError={!!errors.type} />

			
			<button
				onClick={handleSubmit}
				className='mt-8 w-full flex justify-center items-center font-semibold p-2 gap-2 rounded-md bg-primary text-white hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
				aria-label='search'
			>
				<FiSearch className='w-5 h-5' />
				<span>Search</span>
			</button>
		</div>
	);
};

export default FilterBar;
