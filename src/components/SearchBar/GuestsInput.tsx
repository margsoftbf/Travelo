import React from 'react';
import { Minus, Plus } from '../../../public/assets/svg';

interface GuestsInputProps {
    guest: number;
    setGuest: React.Dispatch<React.SetStateAction<number>>;
}

const GuestsInput: React.FC<GuestsInputProps> = ({ guest, setGuest }) => (
    <div className='flex flex-col w-full'>
        <label className='text-xs font-dmSans text-softGrey' htmlFor='guestNumber'>Guests</label>
        <div className='relative mt-1 rounded-md shadow-sm'>
            <div className='flex border-2 rounded-md'>
                <input
                    readOnly
                    id='guestNumber'
                    className='flex-1 text-[12px] text-left border-0 py-1 font-dmSans text-myBlack ring-inset outline-none pl-2 placeholder:text-text-myBlack sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                    type='number'
                    value={guest}
                />
                <div className='absolute inset-y-0 right-0 gap-1 flex items-center pr-2'>
                    <Minus aria-label='Decrease guest number' className='h-4 w-4 text-gray-400 cursor-pointer' aria-hidden='true' onClick={() => setGuest(guest > 1 ? guest - 1 : 1)} />
                    <Plus aria-label='Increase guest number' className='h-4 w-4 text-gray-400 cursor-pointer' aria-hidden='true' onClick={() => setGuest(guest < 8 ? guest + 1 : 8)} />
                </div>
            </div>
        </div>
    </div>
);

export default GuestsInput;