import React from 'react'
import Image from 'next/image'
import QuerriesForm from '@/components/querries-form'
import * as motion from "motion/react-client";

export default function Querries() {
    return (
        <div className='grid grid-cols-12 gap-14 justify-center items-center'>
            <motion.div initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                }} className='col-span-5 w-full h-[700px] relative'>
                <Image fill src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Contact-Form-Img-1-1337x1536.png" alt="Query 1" className='opacity-85' />
                <div className='absolute p-8 pt-16 bottom-0 flex justify-center items-center bg-gradient-to-t from-background  to-[#11131900]  w-full gap-6'>
                    <Image src="/icons/message.svg" width={100} height={100} alt="message Icon" />
                    <div>
                        <h6 className='text-xl'> 24/7 Contact Support</h6>
                        <p>info@example.com</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,

                }}
                className='col-span-7 pr-16'>
                <h2 className='text-5xl font-bold max-w-10/12 relative mb-14'>Do you have any querries please reach us</h2>
                <QuerriesForm />
            </motion.div>
        </div>
    )
}
