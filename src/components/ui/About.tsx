import React from 'react';

interface AboutProps {
	description: string | null;
}
const About: React.FC<AboutProps> = ({ description }) => {
	const defaultDescription =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa accusamus doloribus qui blanditiis dolorum eos, voluptate repudiandae magni eveniet porro cumque? Quis ducimus esse minus aperiam obcaecati numquam tempora, dolorum voluptatum quaerat quisquam praesentium quae nesciunt nihil optio velit, autem hic. Non, ipsam obcaecati eaque ducimus quibusdam magni aperiam facilis?';

	return (
		<div className='mt-4 flex flex-col gap-2'>
			<p className='text-myBlack font-dmSans text-2xl font-bold tracking-tighter'>
				About
			</p>
			<p className='text-softGrey font-dmSans text-sm font-medium leading-5'>
				{description || defaultDescription}
			</p>
		</div>
	);
};

export default About;
