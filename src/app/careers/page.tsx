// import AnimatedText from '@/components/effects/animate-text'
// import SectionHead from '@/components/headings/section-head'
import { PageBanner } from '@/components/page-banner'
import React from 'react'
import * as motion from "motion/react-client";
import CareerCard from '@/components/cards/career-card'
import ContactSide from '@/components/contact-side';
import CareerSection from './_components/career-contact';
import InstagramCard from '@/components/cards/instagram-card';
import { LampIcon } from '@/components/icons';
import { Metadata } from 'next';
import fetchContentType from '@/lib/strapi/fetchContentType';
import { generateMetadataObject } from '@/lib/shared/metadata';
import { Career, CareerPageData } from '@/types/career';
import { console } from 'inspector';
import Image from 'next/image';
import { getGlobalData } from '@/lib/shared/globalData';



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

    console.log("Careers Data:", careers);
    console.log("Career Page Data:", pageData);
    console.log("Global Data:", globalData);

    return (
        <div>
            <PageBanner
                title={pageData?.title || "Career"}
                backgroundImage={pageData?.cover?.url ? `${process.env.NEXT_PUBLIC_API_URL}${pageData?.cover?.url}` : "/images/office.png"}
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
                <div className="flex items-start md:items-center lg:items-start flex-col md:flex-row  text-left gap-6 md:gap-12 xl:gap-16 w-full justify-start xl:w-7/12 ">
                    {pageData?.header?.icon ? (
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
                    )}

                    <h2 className="text-4xl md:text-[2.5rem] xl:text-[3.4rem] font-bold text-primary leading-12 md:leading-16">
                        {pageData?.header?.title || "Begin Your Career With Us"}
                    </h2>
                </div>
                <div className="text-neutral-400 w-full text-left lg:w-5/12">
                    <p>
                        {pageData?.header?.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
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
                        imgUrl={pageData?.reach_us_image?.url ? `${process.env.NEXT_PUBLIC_API_URL}${pageData?.reach_us_image?.url}` : 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/career-img-768x501.jpg'}
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
                <CareerSection />
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
