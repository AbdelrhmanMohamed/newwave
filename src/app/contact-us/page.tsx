import React from "react";
import Image from "next/image";
import { Phone, MapPin, Facebook, Twitter } from "lucide-react";
import ContactForm from "@/components/contact-form";
import SectionHead from "@/components/headings/section-head";

export default function ContactUs() {
  return (
    <div className="">
      <div className="fade-bg relative w-full h-[28rem] before:absolute before:content-[''] before:w-full before:h-[75%] before:left-0 before:bottom-0 before:bg-transparent flex justify-center items-center text-center text-white flex-col">
        <Image
          src="images/contact-us-breadcrumb.jpg"
          alt="contact-us"
          fill
          className="object-cover mix-blend-luminosity opacity-15"
        />
        <div className="mt-20 z-16">
          <h1 className="text-6xl font-bold">Contact Us</h1>
          <div className="mt-6 space-x-2">
            <span>Home</span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-400">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Response Time Section */}
      <section className="container pl-12 pr-6 py-26 flex gap-8">
        <div className="flex items-center gap-8 w-7/12">
          <Image
            src="/icons/24hour.svg"
            alt="24 work hour"
            width={130}
            height={130}
          />
          <h2 className="text-[3.4rem] font-bold text-primary leading-16">
            We&apos;ll respond to you in an hour.
          </h2>
        </div>
        <div className="text-neutral-400 w-5/12">
          <p>
            Egestas diam in arcu cursus euismod quis viverra. Enim sed faucibus
            turpis in eu mi bibendum neque egestas. Bibendum ut tristique et
            egestas. Facilisi cras fermentum odio eu feugiat nulla lacus.
          </p>
        </div>
      </section>

      {/* Contact Form and Say Hello Section */}
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-5 gap-28">
        <div className="col-span-3">
          <SectionHead
            title="Get In touch"
            animate
            show={{
              start: true,
            }}
          />
          <h2 className="text-5xl font-bold my-12">Reach Out To Us</h2>
          <ContactForm />
        </div>

        <div className="border border-primary p-16 col-span-2">
          <h2 className="text-5xl font-bold mb-6">Say Hello!</h2>
          <p className="text-neutral-400">
            Duis convallis convallis pretium risus squamattis ut interdum velit
            laoreet
          </p>

          <div className="mt-8 mb-20">
            <Image
              src="/images/career-img-1.jpg"
              alt="People working together"
              width={200}
              height={50}
              className="w-full"
            />
          </div>

          <h3 className="text-3xl font-bold mb-3">Enquiries</h3>
          <div className="flex justify-between items-center">
            <a href="mailto:info@example.com" className="text-white">
              info@example.com
            </a>
            <a href="mailto:contact@example.com" className="vs">
              contact@example.com
            </a>
          </div>

          <div className="flex space-x-4 my-5">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>

          <div className="text-neutral-400">
            <p className="text-lg">Working Hours : 8hrs</p>
          </div>
        </div>
      </section>

      {/* Affiliate Branches Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">
          Our Affiliate Branches
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
          Et tortor consequat id porta nibh venenatis cras sed felis. Pharetra
          diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis
          scelerisque fermentum. Volutpat blandit aliquam etiam erat velit
          sceleris.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Canberra */}
          <div className="bg-[#1f1f1f] p-6">
            <h3 className="text-xl font-bold text-red-500 mb-4">Canberra</h3>
            <p className="mb-1">45 Lagoon Street,</p>
            <p className="mb-1">Canberra, Lonsdale,</p>
            <p className="mb-4">E1 6GL</p>

            <p className="mb-1 flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +00 (0)12 34 56 789
            </p>
            <a
              href="mailto:canberra@example.com"
              className="text-gray-400 hover:text-white"
            >
              canberra@example.com
            </a>
          </div>

          {/* Mumbai */}
          <div className="bg-[#1f1f1f] p-6">
            <h3 className="text-xl font-bold text-red-500 mb-4">Mumbai</h3>
            <p className="mb-1">West Coast</p>
            <p className="mb-1">Mumbai west</p>
            <p className="mb-4">400029</p>

            <p className="mb-1 flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +00 (0)12 3456 789
            </p>
            <a
              href="mailto:mumbai@example.com"
              className="text-gray-400 hover:text-white"
            >
              mumbai@example.com
            </a>
          </div>

          {/* Kansas City */}
          <div className="bg-[#1f1f1f] p-6">
            <h3 className="text-xl font-bold text-red-500 mb-4">Kansas City</h3>
            <p className="mb-1">Charter Street,</p>
            <p className="mb-1">Kansas City, KC</p>
            <p className="mb-4">64106</p>

            <p className="mb-1 flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +00 (0)1234 56789
            </p>
            <a
              href="mailto:kansas@example.com"
              className="text-gray-400 hover:text-white"
            >
              kansas@example.com
            </a>
          </div>

          {/* Birmingham */}
          <div className="bg-[#1f1f1f] p-6">
            <h3 className="text-xl font-bold text-red-500 mb-4">Birmingham</h3>
            <p className="mb-1">Bexhill Walk,</p>
            <p className="mb-1">Birmingham Street,</p>
            <p className="mb-4">UK B44578</p>

            <p className="mb-1 flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +00 (0)12 3456 789
            </p>
            <a
              href="mailto:birming@example.com"
              className="text-gray-400 hover:text-white"
            >
              birming@example.com
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] relative">
        <div className="absolute inset-0 bg-gray-800 opacity-20 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Google Map"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <MapPin className="h-5 w-5 text-white" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 z-20 text-xs text-gray-400">
          For development purposes only
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <Image
            src="/placeholder.svg?height=20&width=60"
            alt="Google"
            width={60}
            height={20}
          />
        </div>
      </section>
    </div>
  );
}
