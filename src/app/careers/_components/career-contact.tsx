import React from 'react'
import Image from 'next/image'
import CareerForm from './form'
import AnimatedText from '@/components/effects/animate-text'

export default function CareerSection() {
    return (
        <div className='grid grid-cols-12  justify-center items-center px-6 lg:px-0'>
            <div className='col-span-12 lg:col-span-5 lg:mr-20 h-[500px] sm:h-[650px] md:h-[750px] relative  '>
                <Image fill src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Contact-Form-Img-1-1337x1536.png" alt="Query 1" className='object-cover bg-center' />

                <div className='absolute p-8 pt-16 bottom-0 flex justify-center items-center bg-gradient-to-t from-background  to-[#11131900]  w-full gap-6'>
                    <Image src="/icons/message.svg" width={100} height={100} alt="message Icon" />
                    <div>
                        <h6 className='text-xl'> 24/7 Contact Support</h6>
                        <p>info@example.com</p>
                    </div>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-7 lg:pr-5 '>
                <div className='break-words w-full text-center flex items-center justify-center max-w-11/12 relative my-14'>
                    <AnimatedText
                        text="If You Have Any Doubts Contact Us"
                        className="text-4xl md:text-5xl font-bold text-white my-8 leading-14 flex flex-wrap tracking-wide"
                        once={false}
                    />
                </div>
                <CareerForm />
            </div>
        </div>
    )
}