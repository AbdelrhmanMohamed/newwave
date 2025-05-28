import AnimatedText from '@/components/effects/animate-text'
import FAQAccordion from '@/components/faq'
import SectionHead from '@/components/headings/section-head'
import { PageBanner } from '@/components/page-banner'
import React from 'react'
import Image from 'next/image'
import { Dots } from '@/components/icons'
import { generateMetadataObject } from '@/lib/shared/metadata'
import fetchContentType from '@/lib/strapi/fetchContentType'
import { Metadata } from 'next'
import { FAQGroup, FAQPageData } from '@/types/faq'
import MotionClient from './_components/motion-client'


export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await fetchContentType("faq-page", {
        populate: {
            seo: {
                populate: "*",
            },
        }
    }, true)
    const seo = pageData?.seo;
    const metadata = generateMetadataObject(seo);
    return metadata;
}


async function getFaqData() {
    try {
        const res = await fetchContentType('faq-page', {
            'populate': {
                'cover': {
                    fields: ['url'],
                },
            },
        }, true)
        return res as FAQPageData;
    } catch (error) {
        console.error("Error fetching base FAQ page data:", error);
        return {} as FAQPageData;
    }
}


async function getFAQGroup(): Promise<FAQGroup[] | null> {
    try {
        const res = await fetchContentType(
            "faq-groups",
            {
                populate: "*",
            });

        return res?.data as FAQGroup[] | null;
    } catch (error) {
        console.error("Error fetching base FAQ group data:", error);
        return null;
    }
}

export default async function FAQ() {
    const faqPageData = await getFaqData()
    const faqGroups = await getFAQGroup();
    if (!faqGroups || faqGroups.length === 0) {
        console.warn("No FAQ groups found");
        return <div className="text-center py-20">No FAQ data available</div>;
    }


    return (
        <div className="">
            <PageBanner
                title={faqPageData?.title || "FAQ"}
                backgroundImage={faqPageData?.cover?.url ? `${process.env.NEXT_PUBLIC_API_URL}${faqPageData?.cover?.url}` : "/images/office.png"}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: faqPageData?.title || "FAQ" }]}
            />
            {faqGroups.map((group, index) => {
                const isEven = (index: number) => index % 2 === 0;
                return (
                    <div key={group.id} className='py-20 md:pb-20 lg:pb-40'>
                        <div
                            className={`flex flex-wrap items-start flex-col-reverse lg:flex-row lg:flex-nowrap gap-28 overflow-y-hidden px-5`}>
                            <div
                                className={`min-w-full max-w-full lg:min-w-[46%] lg:max-w-[46%] ${isEven(index) ? 'pr-1 md:pr-8' : 'pl-1 md:pl-8'}`}>
                                <SectionHead title="Our Expert Answers" show={{
                                    start: true,
                                }} animate />
                                <AnimatedText
                                    text={group.title}
                                    className="text-4xl md:text-[2.8rem]  mt-6 font-bold mb-10"
                                />
                                <FAQAccordion
                                    faqs={group.faqs}
                                    defaultOpenItem="item-1"
                                />
                            </div>
                            <div className={`w-11/12 sm:w-10/12 md:w-11/12 border border-primary py-10 pl-0 flex flex-col justify-end relative ${isEven(index) ? 'ml-auto order-1' : 'mr-auto order-1 lg:-order-1'}`}>
                                <MotionClient
                                    initial={{ y: -44 }}
                                    animate={{ y: 44, }}
                                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                                    className={`relative h-[420px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[650px] flex items-center justify-center ${isEven(index) ? 'right-12 sm:right-24' : 'left-12 sm:left-24'}`}
                                >
                                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}${group.image?.url}`} alt="FAQ Image" fill className="object-cover" />
                                </MotionClient>
                                <MotionClient
                                    initial={{ y: -44 }}
                                    animate={{ y: 40 }}
                                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                                    className={`absolute hidden sm:block ${isEven(index) ? 'right-0 bottom-0' : 'left-0 bottom-0'} w-[450px] h-[450px]`}
                                >
                                    <Dots />
                                </MotionClient>
                            </div>
                        </div>
                    </div>
                )
            })}
            {/* <div className='py-20 pb-40'>
                <div className='flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap gap-28 overflow-y-hidden px-5'>
                    <div className='min-w-full max-w-full lg:min-w-[46%] lg:max-w-[46%] pr-8'>
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
                            animate={{ y: 44, }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                            className='relative right-24 w-full h-[450px] md:h-[500px] lg:h-[600px] xl:h-[650px] flex items-center justify-center'
                        >
                            <Image src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Home-3-Faq-Img-1-965x1024.png" alt="FAQ Image" fill className="object-cover" />
                        </motion.div>
                        <motion.div
                            initial={{ y: -44 }}
                            animate={{ y: 40 }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                            className="absolute right-0 bottom-0 w-[450px] h-[450px]"
                        >
                            <Dots />
                        </motion.div>
                    </div>
                </div>
            </div> */}
        </div >
    )
}
