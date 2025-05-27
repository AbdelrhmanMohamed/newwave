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

export default function AboutUsPage() {
    return (
        <div>
            <PageBanner
                title="About Us"
                backgroundImage={"/images/office.png"}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
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
                    title="Our Best Stratergy"
                    bgUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Process-Icon-Box-Bg-Img-1-scaled.jpg"
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
                    <AnimatedText text="What Kind Of Service We Offer" className='text-5xl font-bold mt-6 mb-10 tracking-wide' />

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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[360px]'>
                    <InstagramCard
                        bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
                    />
                    <InstagramCard
                        bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
                    />
                    <InstagramCard
                        bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
                    />
                    <InstagramCard
                        bgUrl="http://gaaga.wpengine.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2-300x300.png"
                    />
                </div>
            </motion.section>

        </div>
    )
}
