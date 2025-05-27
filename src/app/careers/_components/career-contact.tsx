import React from 'react'
import Image from 'next/image'
import CareerForm from './form'

export default function CareerSection() {
    return (
        <div className='grid grid-cols-12  justify-center items-center'>
            <div className='col-span-5 mr-20 h-[700px] relative'>
                <Image fill src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Contact-Form-Img-1-1337x1536.png" alt="Query 1" className='opacity-85' />
                <div className='absolute p-8 pt-16 bottom-0 flex justify-center items-center bg-gradient-to-t from-background  to-[#11131900]  w-full gap-6'>
                    <Image src="/icons/message.svg" width={100} height={100} alt="message Icon" />
                    <div>
                        <h6 className='text-xl'> 24/7 Contact Support</h6>
                        <p>info@example.com</p>
                    </div>
                </div>
            </div>
            <div className='col-span-7 pr-5'>
                <h2 className='text-5xl font-bold max-w-11/12 relative mb-14'>If You Have Any Doubts Contact Us</h2>
                <CareerForm />
            </div>
        </div>
    )
}