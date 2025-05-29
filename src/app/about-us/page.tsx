import React from 'react'
import SkillCard from './_components/skill-card'
import { PageBanner } from '@/components/page-banner'
import * as motion from "motion/react-client";
import ProcedureSection from './_components/proceture';
import MarketingSection from './_components/marketing';
import InstagramCard from '@/components/cards/instagram-card';
import Querries from './_components/querries';
import Stepper from '@/components/steper';
import SectionHead from '@/components/headings/section-head';
import AnimatedText from '@/components/effects/animate-text';
import { generateMetadataObject } from '@/lib/shared/metadata';
import fetchContentType from '@/lib/strapi/fetchContentType';
import { Metadata } from 'next';
import { AboutUsData } from '@/types/about-us';


export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await fetchContentType("about-us-page", {
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


async function getAboutUsData() {
    try {
        const res = await fetchContentType('about-us-page', {
            'populate': {
                'cover': {
                    fields: ['url'],
                },
                'header': {
                    populate: "*",
                },
                'proceture': {
                    populate: "*",
                },
                'impact_highlights': {
                    populate: "*",
                },
            },
        }, true)
        return res as AboutUsData;
    } catch (error) {
        console.error("Error fetching base About Us page data:", error);
        return {} as AboutUsData;
    }
}


export default async function AboutUsPage() {
    const aboutUsData = await getAboutUsData();
    if (!aboutUsData) {
        return <div className="text-center py-20">No data found</div>;
    }

    return (
        <div>
            <PageBanner
                title={aboutUsData.title || "About Us"}
                backgroundImage={aboutUsData.cover ? `${process.env.NEXT_PUBLIC_API_URL}${aboutUsData.cover.url}` : "/images/office.png"}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: aboutUsData.title || "About Us" }]}
            />
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                }}
                className="px-4 pt-20"
            >
                <SkillCard
                    title='Advance Technology Tools & Platforms'
                    description='Pulvinar proin gravida hendrerit lectus. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Habitant morbi tristique senectus et netus et. Id ornare arcu odio ut sem nulla.'
                    section='Analytical Skill'
                    imageUrl='https://gaaga.wpengine.com/wp-content/uploads/2023/06/gaaga-Process-Content-Img-1-1.png'
                />
            </motion.section>
            <div className='my-20'>
                <ProcedureSection
                    title={aboutUsData.proceture_title || "Our Procedure"}
                    bgUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Process-Icon-Box-Bg-Img-1-scaled.jpg"
                    proceses={aboutUsData.proceture || []}
                />
            </div>
            <div className="px-4 py-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.5,
                    }}
                    className='flex flex-col items-center justify-center text-center mb-10'
                >
                    <SectionHead title="Know Us" show={{
                        end: true,
                        start: true,
                    }} animate />
                    <AnimatedText text="What Kind Of Service We Offer" className='text-3xl md:text-4xl xl:text-5xl font-bold mt-6 mb-10 tracking-wide text-center justify-center' />

                </motion.div>
                <Stepper steps={[
                    {
                        title: "Gather The Ideas",
                        description: "Curabitur at pretium odio, sit amet tincidunt erat. Pellentesque fringilla rutrum nisl, nec vulputate libero mattis vel. Integer bibendum metus ac metus varius, eget vestibulum arcu. Sed vehicula mattis purus.",
                        imgUrl: "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-2.png"
                    },
                    {
                        title: "Create Modules",
                        description: "Curabitur at pretium odio, sit amet tincidunt erat. Pellentesque fringilla rutrum nisl, nec vulputate libero mattis vel. Integer bibendum metus ac metus varius, eget vestibulum arcu. Sed vehicula mattis purus.",
                        imgUrl: "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-2.png"
                    },
                    {
                        title: "Integrate & Execute",
                        description: "Curabitur at pretium odio, sit amet tincidunt erat. Pellentesque fringilla rutrum nisl, nec vulputate libero mattis vel. Integer bibendum metus ac metus varius, eget vestibulum arcu. Sed vehicula mattis purus.",
                        imgUrl: "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-2.png"
                    },
                    {
                        title: "Deliver",
                        description: "Curabitur at pretium odio, sit amet tincidunt erat. Pellentesque fringilla rutrum nisl, nec vulputate libero mattis vel. Integer bibendum metus ac metus varius, eget vestibulum arcu. Sed vehicula mattis purus.",
                        imgUrl: "https://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Process-Img-2.png"
                    }
                ]} />
            </div>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                }}
                className="py-20"
            >
                <MarketingSection
                    bgUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Process-Counter-Bg-Img-1-scaled.jpg"
                    title="Our Marketing Approach"
                    highlights={aboutUsData.impact_highlights || []}
                />
            </motion.section>
            <section className="py-20">
                <Querries />
            </section>
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
