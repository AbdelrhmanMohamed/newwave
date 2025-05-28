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

const JobOpenings = [
    {
        title: "Senior Project Manager",
        description: "Develop and maintain web applications.",
        href: "/careers/software-engineer"
    },
    {
        title: "UI/UX Designer",
        description: "Design user-friendly interfaces and experiences.",
        href: "/careers/ui-ux-designer"
    },
    {
        title: "Project Manager",
        description: "Oversee project timelines and team coordination.",
        href: "/careers/project-manager"
    },
    {
        title: "Senior Project Manager",
        description: "Develop and maintain web applications.",
        href: "/careers/software-engineer"
    },
    {
        title: "UI/UX Designer",
        description: "Design user-friendly interfaces and experiences.",
        href: "/careers/ui-ux-designer"
    },
    {
        title: "Project Manager",
        description: "Oversee project timelines and team coordination.",
        href: "/careers/project-manager"
    }
];


export default function Career() {
    return (
        <div>
            <PageBanner
                title="Career"
                backgroundImage={"/images/office.png"}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }]}
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
                    <LampIcon className="w-24 h-24 min-w-24 min-h-24 text-white fill-white stroke-white stroke-[0.5px]" />

                    <h2 className="text-4xl md:text-[2.5rem] xl:text-[3.4rem] font-bold text-primary leading-12 md:leading-16">
                        Begin Your Career With Us
                    </h2>
                </div>
                <div className="text-neutral-400 w-full text-left lg:w-5/12">
                    <p>
                        Sit amet nisl suscipit adipiscing. Aliquam nulla facilisi cras fermentum odio eu. Gravida arcu ac tortor dignissim convallis aenean et tortor. Ultrices gravida dictum fusce ut placerat orci nulla facilisi.
                    </p>
                </div>
            </motion.section>
            {/** Reach Us Section */}
            <div className='grid grid-cols-12 px-4 gap-4 lg:gap-12'>
                <div className='col-span-12 lg:col-span-8'>
                    {JobOpenings.map((job, index) => (
                        <CareerCard
                            key={index}
                            jobTitle={job.title}
                            jobDescription={job.description}
                            href={job.href}
                        />
                    ))}
                </div>
                <div className='col-span-12 lg:col-span-4'>
                    <ContactSide
                        title='Reach Us'
                        description='Pellentesque habitant morbi tristique senectus er eget duis.'
                        imgUrl='https://gaaga.wpengine.com/wp-content/uploads/2023/06/career-img-768x501.jpg'
                        enquiries_title='Mail Us'
                        enquiries_emails_1='info@example.com'
                        enquiries_emails_2='info@example.com'
                        activeSocialLinks={[
                            {
                                id: 1, name: 'facebook', url: 'https://facebook.com', active: true,
                                documentId: '',
                                createdAt: '',
                                updatedAt: '',
                                publishedAt: ''
                            },
                            {
                                id: 2, name: 'twitter', url: 'https://twitter.com', active: true,
                                documentId: '',
                                createdAt: '',
                                updatedAt: '',
                                publishedAt: ''
                            },
                            {
                                id: 3, name: 'linkedin', url: 'https://linkedin.com', active: true,
                                documentId: '',
                                createdAt: '',
                                updatedAt: '',
                                publishedAt: ''
                            },
                        ]} className='p-6 md:p-6 xl:p-10 ' />

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
