import Image from 'next/image';
import React from 'react';

interface CruisesMapProps {
	mapImageUrl: string;
}

const CruisesMap = ({ mapImageUrl }: CruisesMapProps) => {
	if (!mapImageUrl) return null;
	return (
		<div className='w-full mt-4 relative flex flex-col justify-start gap-4'>
			<p className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				Cruises Map
			</p>
			<div className='w-96 h-60 lg:h-72 relative '>
				<Image
					src={mapImageUrl}
					alt='Map a cruises'
					fill={true}
					className='object-contain rounded-lg'
					quality={100}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw'
					placeholder='blur'
					blurDataURL={mapImageUrl}
				/>
			</div>
		</div>
	);
};

export default CruisesMap;
