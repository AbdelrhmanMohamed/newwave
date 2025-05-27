/* eslint-disable @next/next/no-img-element */
import StrokeNumber from '@/components/stroke-number';
import { Play } from 'lucide-react';
import React from 'react'
import * as motion from "motion/react-client";


type ProcedureProps = {
    bgUrl?: string;
    title: string;
}

export default function MarketingSection({ bgUrl }: ProcedureProps) {
    return (
        <div className='relative bg-background'>
            {/* Content container */}
            <div className="z-10 pt-32 pb-20 px-16 relative">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="flex flex-col items-center text-center container mx-auto max-w-5xl">
                    {/* Main heading */}
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-14 mb-8">
                        It&apos;s Time To Take Your Digital Marketing
                        <div className="flex items-center justify-center gap-3 my-2">
                            <div className="w-32 h-14 rounded-full overflow-hidden">
                                <img
                                    src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/content-image-small-size-4.png"
                                    alt="Marketing visual"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            To The Next Level
                            <div className="flex -space-x-2">
                                <img
                                    src="https://img.heroui.chat/image/avatar?w=50&h=50&u=team1"
                                    alt="Team member"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://img.heroui.chat/image/avatar?w=50&h=50&u=team2"
                                    alt="Team member"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                                <img
                                    src="https://img.heroui.chat/image/avatar?w=50&h=50&u=team3"
                                    alt="Team member"
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                            </div>
                            We Are
                        </div>
                        Always Here To Help You Grow Your Business
                        <span className='size-11 mx-4 relative top-0.5 rounded-full inline-flex justify-center text-white p-1 bg-primary'>
                            <span className='border border-white rounded-full w-full h-full flex items-center justify-center'>
                                <span className='bg-white rounded-full p-1'>
                                    <Play className="w-4 h-4 text-primary fill-primary " />
                                </span>
                            </span>
                        </span>

                    </h1>
                </motion.div>
                {/* Stats section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-12 w-full justify-center items-center">
                    <div className="flex items-center text-left gap-12">
                        <StrokeNumber animate number={10} className='text-[7rem]' />
                        <span className='text-2xl text-neutral-300 leading-10'> Years Experience</span>
                    </div>
                    <div className="flex items-center text-left gap-12">
                        <StrokeNumber animate number={12} className='text-[7rem]' />
                        <span className='text-2xl text-neutral-300 leading-10'> Professional Key Peoples</span>
                    </div>
                    <div className="flex items-center text-left gap-12">
                        <StrokeNumber animate number={50} className='text-[7rem]' />
                        <span className='text-2xl text-neutral-300 leading-10'> Clients Statisfied</span>

                    </div>
                    <div className="flex items-center text-left gap-12">
                        <StrokeNumber animate number={90} className='text-[7rem]' />
                        <span className='text-2xl text-neutral-300 leading-10'> Projects Compeleted</span>
                    </div>
                </div>
            </div>
            <div className='bg-cover pointer-events-none absolute top-0 bg-center mix-blend-luminosity opacity-15 w-full h-full' style={{
                backgroundImage: `url(${bgUrl})`,
            }} />

        </div>
    )
}