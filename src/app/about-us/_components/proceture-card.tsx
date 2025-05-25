import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/button';
import Link from 'next/link';

type ProcedureCardProps = {
    iconUrl: string;
    title: string;
    href?: string;
}

export default function ProcedureCard({ iconUrl, title, href }: ProcedureCardProps) {
    return (
        <div className='p-8'>
            <div className='bordered bg-transparent hover:bg-primary transition duration-500  py-12 px-8 flex flex-col items-center justify-center group'>
                <Image src={iconUrl} alt={title} width={120} height={120} className='group-hover:opacity-0 transition duration-500' />
                <h1 className='text-2xl font-medium text-center mt-6 mb-12'>{title}</h1>
                <Link href={href || '#'} className='w-fit'>
                    <Button
                        className='w-full'
                        label='Read More'
                        dotClassName='group-hover:bg-black transition duration-500'
                    />
                </Link>
            </div>
        </div>
    )
}
