// import AnimatedText from '@/components/effects/animate-text'
// import SectionHead from '@/components/headings/section-head'
import { PageBanner } from '@/components/page-banner'
import React from 'react'
import * as motion from "motion/react-client";
import CareerCard from '@/components/cards/career-card'
import ContactSide from '@/components/contact-side';
import InstagramCard from '@/components/cards/instagram-card';
import { LampIcon } from '@/components/icons';
import { Metadata } from 'next';
import fetchContentType from '@/lib/strapi/fetchContentType';
import { generateMetadataObject } from '@/lib/shared/metadata';
import { Career, CareerPageData } from '@/types/career';
import { console } from 'inspector';
import Image from 'next/image';
import { getGlobalData } from '@/lib/shared/globalData';
import AnimatedText from '@/components/effects/animate-text';
import CareerForm from './_components/form';
import { getImageUrl } from '@/lib/utils';



export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await fetchContentType("career-page", {
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


async function getCareerData() {
    try {
        const res = await fetchContentType('career-page', {
            'populate': {
                'cover': {
                    fields: ['url'],
                },
                'reach_us_image': {
                    fields: ['url'],
                },
                'contact_support_image': {
                    fields: ['url'],
                },
                'header': {
                    populate: "*",
                },
            },
        }, true)
        return res as CareerPageData;
    } catch (error) {
        console.error("Error fetching base FAQ page data:", error);
        return {} as CareerPageData;
    }
}

async function getCareers(): Promise<Career[] | null> {
    try {
        const res = await fetchContentType(
            "careers",
            {
                populate: "*",
            });
        return res?.data as Career[] | null;
    } catch (error) {
        console.error("Error fetching base FAQ group data:", error);
        return null;
    }
}



export default async function CareerPage() {
    const pageData = await getCareerData();
    const careers = await getCareers();
    const globalData = await getGlobalData();


    return (
        <div>
            <PageBanner
                title={pageData?.title || "Career"}
                backgroundImage={getImageUrl(pageData?.cover?.url) || "/images/office.png"}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: pageData?.title || "Career" }]}
            />
            {/*  Section */}
            <motion.section
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                }}
                className="xl:pl-12 px-6 py-20 lg:py-26 flex gap-8 flex-col lg:flex-row"
            >
                <div className="flex items-start md:items-center lg:items-start flex-col md:flex-row text-left gap-6 md:gap-12 xl:gap-12 w-full justify-start -mt-1 min-w-[60%]">
                    {/* {pageData?.header?.icon ? (
                        <Image
                            width={100}
                            height={100}
                            loading="lazy"
                            src={pageData?.header?.icon?.url ? `${process.env.NEXT_PUBLIC_API_URL}${pageData?.header?.icon?.url}` : "/images/office.png"}
                            alt="Career Icon"
                            className='object-cover min-w-16 min-h-16 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 text-primary'
                        />
                    ) : (
                        <LampIcon className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 text-primary" />
                    )} */}
                    <LampIcon className="text-primary w-16 h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 lg:min-w-22 lg:min-h-22 md:min-h-20 md:min-w-20 min-w-16 min-h-16" />

                    <h2 className="text-4xl md:text-[2.5rem] xl:text-[3rem] font-bold text-primary leading-12 md:leading-16">
                        {pageData?.header?.title || "Begin Your Career With Us"}
                    </h2>
                </div>
                <div className="text-neutral-400 w-full text-[1rem] text-left ">
                    <p>
                        {pageData?.header?.description}
                    </p>
                </div>
            </motion.section>
            {/** Reach Us Section */}
            <div className='grid grid-cols-12 px-4 gap-4 lg:gap-12'>
                <div className='col-span-12 lg:col-span-8'>
                    {(careers || []).map((job, index) => (
                        <CareerCard
                            key={index}
                            jobTitle={job.title}
                            jobDescription={`${job.location} - ${job.job_type}`}
                            href={job.slug ? `/careers/${job.slug}` : '#'}
                        />
                    ))}
                </div>
                <div className='col-span-12 lg:col-span-4'>
                    <ContactSide
                        title={pageData?.reach_us || 'Reach Us'}
                        description={pageData?.reach_us_description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                        imgUrl={getImageUrl(pageData?.reach_us_image?.url) || "/images/office.png"}
                        enquiries_title={pageData?.mail_us || 'Mail Us'}
                        enquiries_emails_1={globalData?.email1 || 'info@example.com'}
                        enquiries_emails_2={globalData?.email2 || globalData.email_career || 'info@example.com'}
                        className='p-6 md:p-6 xl:p-10 ' />

                </div>
            </div>

            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                }}
                className="py-24"
            >
                <div className='grid grid-cols-12  justify-center items-center px-6 lg:px-0'>
                    <div className='col-span-12 lg:col-span-5 lg:mr-20 h-[500px] sm:h-[650px] md:h-[750px] relative  '>
                        <Image fill src={getImageUrl(pageData?.contact_support_image?.url)} alt="Query 1" className='object-cover bg-center' />

                        <div className='absolute p-8 pt-16 bottom-0 flex justify-center items-center bg-gradient-to-t from-background  to-[#11131900]  w-full gap-6'>
                            <Image src="/icons/message.svg" width={100} height={100} alt="message Icon" />
                            <div>
                                <h6 className='text-xl'>{pageData?.contact_support_title || " 24/7 Contact Support"}</h6>
                                <p>{globalData?.email1 || "info@.com"}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-7 lg:pr-5 '>
                        <div className='break-words w-full text-center flex items-center justify-center max-w-11/12 relative my-14'>
                            <AnimatedText
                                text={pageData?.contact_form_title || "If You Have Any Doubts Contact Us"}
                                className="text-4xl md:text-5xl font-bold text-white my-8 leading-14 flex flex-wrap tracking-wide"
                                once={false}
                            />
                        </div>
                        <CareerForm careers={careers || []} />
                    </div>
                </div>
            </motion.section>
            <motion.section
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                }}
                className="px-4 py-20"
            >
                <div className='flex overflow-hidden flex-nowrap gap-4 h-[420px] sm:h-[350px] md:h-[290px] lg:h-[270px] xl:h-[320px] items-center justify-center'>
                    <InstagramCard
                        bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
                    />
                    <InstagramCard
                        bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
                        className='hidden sm:block'

                    />
                    <InstagramCard
                        bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
                        className='hidden md:block'

                    />
                    <InstagramCard
                        bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
                        className='hidden lg:block'

                    />
                </div>
            </motion.section>
        </div>
    )
}
