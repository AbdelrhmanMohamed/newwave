import SectionHead from '@/components/headings/section-head';
import React from 'react'
import ProcedureCard from './proceture-card';
import * as motion from "motion/react-client";
import AnimatedText from '@/components/effects/animate-text';
import { Process } from '@/types/about-us';

type ProcedureProps = {
    bgUrl?: string;
    title: string;
    proceses: Process[]
}

export default function ProcedureSection({ bgUrl, title, proceses }: ProcedureProps) {
    console.log("ProcedureSection rendered with processes:", `${process.env.NEXT_PUBLIC_API_URL}${proceses[0].icon?.url}`);
    return (
        <div className='relative bg-background'>
            <div className='py-24 px-4 z-10 relative'>
                <div className='text-center flex flex-col items-center justify-center'>
                    <motion.div
                        initial={{ x: 40 }}
                        whileInView={{ x: 0 }}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        <SectionHead title='Procedure' show={{
                            start: true,
                            end: true,
                        }} animate />
                    </motion.div>
                </div>
                <div className='break-words w-full text-center flex items-center justify-center'>
                    <AnimatedText
                        text={title}
                        className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white my-8 leading-14 flex flex-wrap "
                        once={false}
                    />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4'>
                    {proceses.map((item) => (
                        <ProcedureCard
                            key={item.id}
                            IconUrl={item.icon?.url || ''}
                            title={item.title}
                            href={`/#`}
                        />
                    ))}
                    {/** Procedure Cards */}
                    {/* <ProcedureCard icon={
                        <FindIcon />
                    } title='Find Solution' />
                    <ProcedureCard icon={
                        <LampIcon />
                    } title='Explore Ideas' />
                    <ProcedureCard icon={
                        <IntegrateIcon />
                    } title='Integrate Solutions' />
                    <ProcedureCard icon={
                        <TargetIcon />
                    } title='Target Outcomes' /> */}
                </div>
            </div>
            <div className='bg-cover pointer-events-none bg-black absolute top-0 bg-center mix-blend-luminosity opacity-10 w-full h-full' style={{
                backgroundImage: `url(${bgUrl})`,
            }} />

        </div>
    )
}
