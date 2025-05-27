import React from 'react'
import Button from '@/components/ui/button';
import Link from 'next/link';

type ProcedureCardProps = {
    icon: React.ReactNode;
    title: string;
    href?: string;
}

export default function ProcedureCard({ icon, title, href }: ProcedureCardProps) {
    return (
        <div className='p-8'>
            <div className='bordered bg-transparent hover:bg-primary transition duration-500  py-12 px-8 flex flex-col items-center justify-center group/item text-primary hover:text-white'>
                {icon}
                <h1 className='text-2xl font-medium text-center mt-6 mb-12 text-white'>{title}</h1>
                <Link href={href || '#'} className='w-fit'>
                    <Button
                        className='w-full hover:!text-white hover:!border-white'
                        label='Read More'
                        dotClassName='group-hover/item:bg-black transition duration-500 group-hover:!bg-white'
                    />
                </Link>
            </div>
        </div>
    )
}
