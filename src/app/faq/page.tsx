import AnimatedText from '@/components/effects/animate-text'
import FAQAccordion, { FAQItem } from '@/components/faq'
import SectionHead from '@/components/headings/section-head'
import { PageBanner } from '@/components/page-banner'
import React from 'react'
import Image from 'next/image'
import * as motion from "motion/react-client";
import { Dots } from '@/components/icons'


const websitesFAQs: FAQItem[] = [
    {
        id: "item-1",
        question: "What Is A Digital Platform?",
        answer:
            "Malesuada fames ac turpis egestas maecenas pharetra. Dis parturient montes nascetur ridiculus mus mauris. Augue lacus viverra vitae congue eu conseq.",
    },
    {
        id: "item-2",
        question: "How Can A Digital Platform Helps Your Business Grow?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
        id: "item-3",
        question: "How Do I Book My Slot To Meet With Your Technical Team?",
        answer:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
]

export default function FAQ() {
    return (
        <div className="px-5">
            <PageBanner
                title="FAQ"
                backgroundImage={"/images/office.png"}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
            />
            <div className='flex items-center gap-28 overflow-y-hidden'>

                <div className='min-w-5/12 max-w-5/12  pr-4'>
                    <SectionHead title="Our Expert Answers" show={{
                        start: true,
                    }} animate />
                    <AnimatedText
                        text={'Websites & Apps'}
                        className="text-4xl md:text-[2.8rem]  mt-6 font-bold mb-10"
                    />
                    <FAQAccordion
                        title="Websites & Apps"
                        faqs={websitesFAQs}
                        defaultOpenItem="item-1"
                    />
                </div>
                <div className='w-full border border-primary py-10 pl-0 flex flex-col justify-end relative'>
                    <motion.div
                        initial={{ y: -44 }}
                        animate={{ y: 44 }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    >
                        <Image src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Home-3-Faq-Img-1-965x1024.png" alt="FAQ Image" width={1200} height={900} className="relative right-16 w-full " />
                    </motion.div>
                    <motion.div
                        initial={{ y: -44 }}
                        animate={{ y: 40 }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute right-0 bottom-0 w-[400px] h-[400px]"
                    >
                        <Dots />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
