import Link from 'next/link';
import React from 'react'
import { ChevronLeftIcon } from '../icons';
import ButtonLine from '../headings/button-line';

type CareerCardProps = {
    jobTitle: string;
    jobDescription: string;
    href: string;
}

export default function CareerCard({ jobTitle, jobDescription, href }: CareerCardProps) {
    return (
        <div className="group/edit relative  w-full bg-black border border-primary text-neutral-400 py-8 px-16 hover:bg-primary hover:text-white transition-all duration-500 flex justify-between items-center mb-4">
            <div>
                <h3 className="text-[1.8rem] font-semibold">
                    {jobTitle}
                </h3>
                <p className="mt-1 text-sm">
                    {jobDescription}
                </p>
            </div>
            <div className='flex items-center gap-4'>
                <Link href={href} className='invisible opacity-0 group-hover/edit:opacity-100 transition-all duration-500 group-hover/edit:block group-hover/edit:visible translate-x-20' >
                    <ButtonLine title='View more' className='hover:text-black' isBlack />
                </Link>
                <ChevronLeftIcon className='text-primary visible group-hover/edit:opacity-0 transition-all duration-500 relative group-hover/edit:translate-x-8 group-hover/edit:invisible' />
            </div>
        </div>
    )
}
