import { InstagramIcon } from 'lucide-react';
import React from 'react'


type InstagramCardProps = {
    bgUrl?: string;
}

export default function InstagramCard({ bgUrl }: InstagramCardProps) {
    return (
        <div className='w-full h-full bg-center bg-cover bg-no-repeat relative group cursor-pointer' style={{
            backgroundImage: `url(${bgUrl})`
        }}>
            <div className='absolute inset-0 bg-black/80 border-primary border flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition duration-700'>
                <div className='border-3 border-white size-22 rounded-full flex justify-center items-center '>
                    <InstagramIcon className='h-10 w-10 text-white' />
                </div>
                <p className='text-neutral-300 text-lg mt-4 mb-6'>Follow us on Instagram</p>
                <h6 className='text-white font-semibold text-2xl'>@NewWave</h6>
            </div>

        </div>
    )
}
