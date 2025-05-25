import React from 'react'
import SkillCard from './_components/skill-card'
import { PageBanner } from '@/components/page-banner'
import * as motion from "motion/react-client";
import ProcedureSection from './_components/proceture';

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
                // viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                }}
                className="px-4"
            >
                <SkillCard
                    title='Advance Technology Tools & Platforms'
                    description='Pulvinar proin gravida hendrerit lectus. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Habitant morbi tristique senectus et netus et. Id ornare arcu odio ut sem nulla.'
                    section='Analytical Skill'
                    imageUrl='https://gaaga.wpengine.com/wp-content/uploads/2023/06/gaaga-Process-Content-Img-1-1.png'
                />
            </motion.section>
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                // viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                }}
                className="my-20"
            >
                <ProcedureSection
                    title="Our Best Stratergy"
                    bgUrl="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Process-Icon-Box-Bg-Img-1-scaled.jpg"
                />
            </motion.section>


        </div>
    )
}
