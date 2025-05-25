import React from 'react'
import Image from 'next/image'
import SectionHead from '@/components/headings/section-head';
import ButtonLine from '@/components/headings/button-line';
import AnimatedText from '@/components/effects/animate-text';

type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
    section: string;
}

export default function Card({ title, description, section, imageUrl }: CardProps) {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-0 items-center justify-center'>
            {/** left content */}
            <div className='grid-cols-1 flex-1 space-y-2 border border-primary lg:border-r-0 xl:p-14 lg:p-12  md:p-12 sm:p-10 p-8'>
                <SectionHead title={section} show={{
                    start: true,
                }} animate />
                <div className='break-words'>
                    <AnimatedText
                        text={title}
                        className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl  font-bold text-white my-8 leading-14 flex flex-wrap"
                    />
                </div>

                <p className='text-base text-neutral-400 mb-16'>{description}</p>
                <ButtonLine title='Read More' />
            </div>
            {/** right Image */}
            <div className='flex-none grid-cols-1 justify-self-end relative w-full h-[450px] lg:h-[600px] order-first lg:order-last'>
                <Image src={imageUrl} alt='Card Image' fill className='object-cover' />
            </div>
        </div>
    )
}
