import React from 'react'
import Image from 'next/image';
import { getImageUrl } from '@/lib/utils';
import ButtonLine from '../headings/button-line';
import Link from 'next/link';

type serviceCardProps = {
    title: string;
    imageUrl: string;
    href?: string;
    description: string;
}

export default function ProjectCard({ title, imageUrl, description, href }: serviceCardProps) {
    return (
        <div className="w-full h-full relative group overflow-hidden min-w-40 min-h-40">
            <Image src={getImageUrl(imageUrl)} alt={title} fill layout="responsive" className="object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className='bg-black/60 backdrop-blur-3xl text-white hidden group-hover:block absolute inset-0  p-4 text-center z-10 bottom-0'>
                <h2 className='text-2xl font-semibold mb-2'>{title}</h2>
                <p className='text-sm mb-4'>{description}</p>
                <Link href={href || "#"}>
                    <ButtonLine title='Read More' />
                </Link>
            </div>
        </div>
    )
}
