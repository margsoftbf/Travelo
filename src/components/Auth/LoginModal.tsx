import React from 'react';
import { Modal, Box, Fade, Backdrop } from '@mui/material';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface LoginModalProps {
	isOpen: boolean;
	closeModal: () => void;
}

const LoginModal = ({ isOpen, closeModal }: LoginModalProps) => {
	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={isOpen}
				onClose={closeModal}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={isOpen}>
					<Box className='py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[90vh] rounded-lg w-72 xs:w-96 md:w-[600px] lg:mx-auto p-4 shadow-lg flex flex-col font-poppins overflow-y-auto bg-white justify-center items-center z-70 '>
						<XMarkIcon
							className='w-7 h-7 text-black absolute right-2 top-2 cursor-pointer'
							onClick={closeModal}
						/>
						<div className='sm:mx-auto sm:w-full sm:max-w-md'>
							<h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
								Sign in to your account
							</h2>
						</div>
						<div className='mt-2 sm:mx-auto sm:w-full sm:max-w-[480px]'>
							<div className='bg-white px-6 py-12 sm:rounded-lg sm:px-12'>
								<form className='space-y-6'>
									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Email address
										</label>
										<div className='mt-2'>
											<input
												id='email'
												name='email'
												type='email'
												autoComplete='email'
												defaultValue={'test@test.com'}
												required
												className='block w-full pl-2 rounded-md border-0 py-2.5 font-semibold text-gray-900 shadow-sm bg-neutral placeholder:text-gray-400  sm:text-sm sm:leading-6'
											/>
										</div>
									</div>
									<div>
										<label
											htmlFor='password'
											className='block text-sm font-medium leading-6 text-gray-900'
										>
											Password
										</label>
										<div className='mt-2'>
											<input
												id='password'
												name='password'
												type='password'
												autoComplete='current-password'
												defaultValue={'admin123'}
												required
												className='block w-full pl-2 rounded-md border-0 py-2.5 text-gray-900 shadow-sm bg-neutral font-semibold placeholder:text-gray-400 sm:text-sm sm:leading-6'
											/>
										</div>
									</div>

									<div className='flex flex-col md:flex-row md:items-center justify-between'>
										<div className='flex items-center'>
											<input
												id='remember-me'
												name='remember-me'
												type='checkbox'
												className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
											/>
											<label
												htmlFor='remember-me'
												className='ml-3 block text-sm leading-6 text-gray-900'
											>
												Remember me
											</label>
										</div>
									</div>

									<div>
										<button
											type='submit'
											className='w-full h-12 font-dmSans font-medium rounded-md bg-primary flex items-center text-white p-2 justify-center flex-shrink-0 hover:bg-myBlack duration-300 ease-in-out transition cursor-pointer'
										>
											Sign in
										</button>
									</div>
								</form>
							</div>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default LoginModal;
