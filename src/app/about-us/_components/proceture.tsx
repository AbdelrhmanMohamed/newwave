import SectionHead from '@/components/headings/section-head';
import React from 'react'
import ProcedureCard from './proceture-card';


type ProcedureProps = {
    bgUrl?: string;
    title: string;
}

export default function ProcedureSection({ bgUrl, title }: ProcedureProps) {
    return (
        <div className='h-[800px] relative bg-background'>
            <div className='py-24 px-4 z-10 relative'>
                <div className='text-center flex flex-col items-center justify-center'>
                    <SectionHead title='Procedure' show={{
                        start: true,
                        end: true,
                    }} animate />
                </div>
                <h1 className='text-5xl text-center font-semibold mt-6 mb-12'>{title}</h1>
                <div className='grid grid-cols-1 lg:grid-cols-4'>
                    {/** Procedure Cards */}
                    <ProcedureCard iconUrl='/icons/find.svg' title='Find Solution' />
                    <ProcedureCard iconUrl='/icons/idea.svg' title='Explore Ideas' />
                    <ProcedureCard iconUrl='/icons/integrate.svg' title='Integrate Solutions' />
                    <ProcedureCard iconUrl='/icons/target.svg' title='Target Outcomes' />
                </div>
            </div>
            <div className='bg-cover pointer-events-none absolute top-0 bg-center mix-blend-luminosity opacity-10 w-full h-full' style={{
                backgroundImage: `url(${bgUrl})`,
            }} />

        </div>
    )
}
