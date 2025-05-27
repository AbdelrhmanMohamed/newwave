import React from 'react'
import Image from 'next/image'
import { SocialIcon } from '@/components/social-icon'
import { SocialLink } from '@/types/contact'
import { cn } from '@/lib/utils'


type Props = {
    title?: string;
    description: string;
    imgUrl: string;
    enquiries_title?: string;
    enquiries_emails_1: string;
    enquiries_emails_2: string;
    working_hours?: string;
    activeSocialLinks: SocialLink[];
    className?: string;
}

export default function ContactSide({ title, description, imgUrl, enquiries_title, enquiries_emails_1, enquiries_emails_2, working_hours, activeSocialLinks, className }: Props) {
    return (
        <div className={cn("border border-primary p-6 md:p-8 xl:p-14 basis-3/12 md:basis-4/12", className)}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">{title || 'Say Hello!'}</h2>
            <p className="text-neutral-400">
                {description}
            </p>

            <div className="mt-8 mb-16">
                <Image
                    src={imgUrl || "/images/office.png"}
                    alt="People working together"
                    width={200}
                    height={50}
                    className="w-full"
                />
            </div>

            <h3 className="text-3xl font-bold mb-3">{enquiries_title || 'Enquiries'}</h3>
            <div className="flex gap-4 md:gap-3 lg:gap-8 flex-col sm:flex-row md:flex-col lg:flex-row">
                <a href={`mailto:${enquiries_emails_1}`} className="text-white">
                    {enquiries_emails_1}
                </a>
                <a href={`mailto:${enquiries_emails_2}`} className="vs">
                    {enquiries_emails_2}
                </a>
            </div>

            <div className="flex space-x-4 my-4">
                {activeSocialLinks?.map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        className="size-6 rounded-full border border-white transition hover:border-primary flex items-center justify-center duration-500 hover:text-primary"
                    >
                        <SocialIcon name={link.name as keyof typeof SocialIcon} className="h-3 w-3" />
                    </a>
                ))}
            </div>
            {working_hours && (
                <div className="text-neutral-400 mb-4">
                    <p className="text-base">{working_hours}</p>
                </div>
            )}
        </div>
    )
}
