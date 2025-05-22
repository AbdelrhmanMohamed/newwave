import { PageBanner } from "@/components/page-banner";
import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
      }}
      className="pb-60"
    >
      <PageBanner
        title={slug}
        backgroundImage="/images/contact-us-breadcrumb.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: slug },
        ]}
      />
      <div className="max-w-5xl mx-auto px-6">
        {/** MAIN IMAGE */}
        <div className="relative w-full h-[590px]">
          <Image
            src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/blog-5.jpg"
            alt="main blog image"
            fill
            className="object-contain"
          />
        </div>
        {/** SUBJECT 1 */}
        <div>
          <div className="flex justify-between">
            <p className="text-neutral-300 mt-4 tracking-wide uppercase text-sm">
              June 19, 2023
            </p>
            <p className="text-primary text-sm font-semibold mt-4 tracking-wide uppercase">
              By Minaret Agency
            </p>
          </div>
          <div className="my-5">
            <h1 className="text-3xl font-bold mb-4">
              Saudi Vision 2030: The Unprecedented Growth of KSA’s Event Sector
              & What It Means for Global Brands
            </h1>
            <p className="text-neutral-400 ">
              Saudi Arabia&apos;s Vision 2030 is not just an economic blueprint;
              it&apos;s a catalyst for an unprecedented transformation across
              all sectors, with the event industry emerging as a particularly
              dynamic and rapidly expanding frontier.1 The Kingdom&apos;s
              strategic shift away from oil dependency towards a diversified,
              vibrant economy has unlocked immense potential for meetings,
              incentives, conferences, and exhibitions (MICE), as well as
              entertainment, sports, and cultural events.9 This article explores
              the drivers behind this explosive growth, the scale of investment
              in infrastructure and giga-projects, the pivotal role of entities
              like the General Entertainment Authority (GEA), and the compelling
              opportunities this presents for global brands looking to engage
              with a thriving market.
            </p>
          </div>
        </div>
        {/** SUBJECT 2 */}
        <div>
          <h1 className="my-4 mt-16 text-3xl font-bold">
            Vision 2030: The Engine of Event Sector Expansion
          </h1>
          <p className="text-neutral-400">
            At its core, Vision 2030 aims to create a “Vibrant Society” and a
            “Thriving Economy”. The event sector is a direct beneficiary and a
            key enabler of these pillars. The government’s commitment is evident
            through: Massive Infrastructure Development: The Kingdom is
            investing billions in state-of-the-art venues, transportation
            networks, and hospitality infrastructure to support a burgeoning
            events calendar.5 Mega-projects like NEOM, a $500 billion smart city
            initiative, Qiddiya, an entertainment super-city aiming for 17
            million annual visitors by 2030, the Red Sea Project, and Diriyah
            Gate are not just tourist destinations but future hubs for
            international events and conferences. The General Entertainment
            Authority (GEA): Established in 2016, the GEA is instrumental in
            developing, regulating, and promoting the entertainment sector. It
            has facilitated a surge in live events, concerts, festivals (like
            Riyadh Season and MDLBEAST Soundstorm), and the reopening of
            cinemas, significantly increasing household entertainment spending –
            a key Vision 2030 target (from 2.9% to 6% by 2030). Economic
            Diversification & Investment Attraction: As Saudi Arabia diversifies
            its economy, it actively seeks to attract foreign direct investment
            and position itself as a regional business hub. This naturally fuels
            demand for MICE events, trade shows, and industry conferences. The
            Saudi MICE market alone was valued at USD 2.6 billion in 2024 and is
            projected to reach USD 4.6 billion by 2030, with an impressive CAGR
            of around 11%.
          </p>
          <div className="grid grid-cols-6 gap-8 mt-10">
            <div className="col-span-4">
              <div className="flex justify-between gap-6">
                <Image
                  src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/blog-detail-4.jpg"
                  alt=""
                  width={500}
                  height={200}
                />
                <Image
                  src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/blog-detail-3.jpg"
                  alt=""
                  width={500}
                  height={200}
                />
              </div>
              <p className="my-6  text-neutral-400">
                Praesent enim erat, consectetur vitae tempus sed, dapibus id
                nunc. Maecenas in purus cursus, efficitur massa nec, ullamcorper
                arcu. Integer justo nib suscipit ut tincidunt ut, blandit id
                quam. Maecenas et cursus metus. Aenean luctus consequat sapien,
                eget accumsan justo. Donec luctus orci elit, vel mollis nisl
                cursus sit amet. Nam ut enim bibendum, placerat nulla ac,
                vestibulum urna. Vestibulum at lectus venenatis, varius mauris
                quis, venenatis erat. Sed Commodo convallis nibh. Donec
                fermentum non nibh sit amet fringilla. Donec
              </p>
            </div>
            <div className="col-span-2 border relative">
              <Image
                src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/blog-detail-two-2.jpg"
                alt="ss"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
