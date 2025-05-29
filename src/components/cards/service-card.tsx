import React from 'react'
import Image from 'next/image';
import { getImageUrl } from '@/lib/utils';
import ButtonLine from '../headings/button-line';
import Link from 'next/link';

type serviceCardProps = {
    title: string;
    imageUrl: string;
    href?: string;
}

export default function ServiceCard({ title, imageUrl, href }: serviceCardProps) {
    return (
        <div className='p-6'>
            <Link href={href || '#'} className='group/item relative overflow-hidden '>
                <div className="w-full h-full relative group overflow-hidden  min-w-40 min-h-40">
                    <Image src={getImageUrl(imageUrl)} alt={title} fill layout="responsive" className="object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className='bg-black/60 text-white backdrop-blur-3xl hidden group-hover:block absolute inset-0  p-4 text-center z-10 bottom-0'>
                        <ButtonLine title='Read More' />
                    </div>
                </div>
            </Link>
            <div className='mt-4'>
                <h3 className='text-xl font-semibold'>{title}</h3>
            </div>
        </div>
    )
}
