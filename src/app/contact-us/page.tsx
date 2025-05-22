import React from "react";
import Image from "next/image";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import ContactForm from "@/components/contact-form";
import SectionHead from "@/components/headings/section-head";
import BranchCard from "@/components/cards/branch-card";
import * as motion from "motion/react-client";
import AnimatedText from "@/components/effects/animate-text";
import { PageBanner } from "@/components/page-banner";
import { SocialIcon } from "@/components/social-icon";

export default function ContactUs() {
  return (
    <div className="">
      {/* <div className="fade-bg relative w-full h-[20rem] md:h-[24rem] lg:h-[28rem] before:absolute before:content-[''] before:w-full before:h-[75%] before:left-0 before:bottom-0 before:bg-transparent flex justify-center items-center text-center text-white flex-col">
        <Image
          src="images/contact-us-breadcrumb.jpg"
          alt="contact-us"
          fill
          className="object-cover mix-blend-luminosity opacity-15"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.1,
          }}
          className="mt-20 z-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Contact Us
          </h1>
          <div className="mt-6 space-x-2">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-400">Contact Us</span>
          </div>
        </motion.div>
      </div> */}

      <PageBanner
        title="Contact Us"
        backgroundImage="images/contact-us-breadcrumb.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      {/* Response Time Section */}
      <motion.section
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        className="pl-12 pr-6 py-20 lg:py-26 flex gap-8 flex-col lg:flex-row"
      >
        <div className="flex items-center flex-col md:flex-row text-center lg:text-left gap-6 md:gap-12 xl:gap-8 w-full justify-center xl:justify-start xl:w-7/12 ">
          <div className="size-[100px] min-w-[100px] relative lg:size-[130px] lg:min-w-[130px]">
            <Image src="/icons/24hour.svg" alt="24 work hour" fill />
          </div>
          <h2 className="text-5xl xl:text-[3.4rem] font-bold text-primary leading-12 md:leading-16">
            We&apos;ll respond to you in an hour.
          </h2>
        </div>
        <div className="text-neutral-400 w-full text-center lg:text-left lg:w-5/12">
          <p>
            Egestas diam in arcu cursus euismod quis viverra. Enim sed faucibus
            turpis in eu mi bibendum neque egestas. Bibendum ut tristique et
            egestas. Facilisi cras fermentum odio eu feugiat nulla lacus.
          </p>
        </div>
      </motion.section>

      {/* Contact Form and Say Hello Section */}
      <section className="px-5 py-12 flex items-start flex-col md:flex-row">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="basis-full w-full md:basis-8/12 pr-4 md:pr-16 lg:pr-32"
        >
          <SectionHead
            title="Get In touch"
            animate
            show={{
              start: true,
            }}
          />
          <AnimatedText
            text="Reach Out To Us"
            className="text-4xl md:text-5xl font-bold mt-6 mb-10 lg:my-10 "
          />
          <ContactForm />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="border border-primary p-6 md:p-8 xl:p-14 basis-3/12 md:basis-4/12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Say Hello!</h2>
          <p className="text-neutral-400">
            Duis convallis convallis pretium risus squamattis ut interdum velit
            laoreet
          </p>

          <div className="mt-8 mb-16">
            <Image
              src="/images/career-img-1.jpg"
              alt="People working together"
              width={200}
              height={50}
              className="w-full"
            />
          </div>

          <h3 className="text-3xl font-bold mb-3">Enquiries</h3>
          <div className="flex gap-4 md:gap-3 lg:gap-8 flex-col sm:flex-row md:flex-col lg:flex-row">
            <a href="mailto:info@example.com" className="text-white">
              info@example.com
            </a>
            <a href="mailto:contact@example.com" className="vs">
              contact@example.com
            </a>
          </div>

          <div className="flex space-x-4 my-4">
            <SocialIcon name="facebook" />
            <a
              href="#"
              className="size-6 rounded-full border border-white transition hover:border-primary flex items-center justify-center duration-500 hover:text-primary"
            >
              <Linkedin className="h-3 w-3" />
            </a>
            <a
              href="#"
              className="size-6 rounded-full border border-white transition hover:border-primary flex items-center justify-center duration-500 hover:text-primary"
            >
              <Facebook className="h-3 w-3" />
            </a>
            <a
              href="#"
              className="size-6 rounded-full border border-white transition hover:border-primary flex items-center justify-center hover:text-primary duration-500"
            >
              <Instagram className="h-3 w-3" />
            </a>
          </div>

          <div className="text-neutral-400">
            <p className="text-base">Working Hours : 8hrs</p>
          </div>
        </motion.div>
      </section>

      {/* Affiliate Branches Section */}
      <motion.section
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="px-5 pt-24 relative z-20 "
      >
        <AnimatedText
          text="Our Affiliate Branches"
          className="text-4xl md:text-4xl font-bold text-center mb-4 justify-center"
        />

        <p className="text-neutral-400 text-center max-w-4xl mx-auto mb-16">
          Et tortor consequat id porta nibh venenatis cras sed felis. Pharetra
          diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis
          scelerisque fermentum. Volutpat blandit aliquam etiam erat velit
          sceleris.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-0 sm:px-8 md:px-0">
          <BranchCard
            title="Saudi Arabia"
            address={["45 Lagoon Street, Canberra, Looloith, E1 6GL"]}
            backgroundImage="/images/office.png"
            email="canbeera@example.com"
            phone="(02)26874491"
          />
          <BranchCard
            title="Saudi Arabia"
            address={["45 Lagoon Street, Canberra, Looloith, E1 6GL"]}
            backgroundImage="/images/office.png"
            email="canbeera@example.com"
            phone="(02)26874491"
          />
          <BranchCard
            title="Saudi Arabia"
            address={["45 Lagoon Street, Canberra, Looloith, E1 6GL"]}
            backgroundImage="/images/office.png"
            email="canbeera@example.com"
            phone="(02)26874491"
          />
          <BranchCard
            title="Saudi Arabia"
            address={["45 Lagoon Street, Canberra, Looloith, E1 6GL"]}
            backgroundImage="/images/office.png"
            email="canbeera@example.com"
            phone="(02)26874491"
          />
        </div>
      </motion.section>

      {/* Map Section */}
      <section className="w-full h-[500px] relative bottom-10 z-10">
        <iframe
          loading="lazy"
          src="https://maps.google.com/maps?q=24.7136,46.6753&z=13&output=embed"
          title="الرياض"
          aria-label="الرياض"
          width="100%"
          height="100%"
        />
      </section>
    </div>
  );
}
