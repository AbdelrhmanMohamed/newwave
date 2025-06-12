import Link from "next/link";
import Image from "next/image";
import SubscriptionForm from "./susbscripe";
import { Service } from "@/types/service";
import fetchContentType from "@/lib/strapi/fetchContentType";
import { getGlobalData } from "@/lib/shared/globalData";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "../icons";

async function getServices(): Promise<Service[] | null> {
  try {
    const res = await fetchContentType("services", {
      populate: "*",
    });
    return res?.data as Service[] | null;
  } catch (error) {
    console.error("Error fetching base service data:", error);
    return null;
  }
}

export default async function Footer() {
  const services = await getServices();
  const globalData = await getGlobalData();

  return (
    <footer className="text-white">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-32 px-4 pt-20 pb-16">
        {/* Logo and Description */}
        <div className="space-y-4 w-full lg:w-5/12">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="NEW WAVE Logo"
              width={180}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed">
            {globalData?.siteDescription ||
              "We are a leading digital agency specializing in innovative solutions for your business. Our team is dedicated to delivering exceptional results through creativity and technology."}
          </p>
          <div className="flex items-center space-x-2 pt-4 w-full">
            <SubscriptionForm />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 items-start w-full lg:w-7/12 lg:pr-12 mt-10 lg:mt-0">
          {/* Contact Us */}
          <div className="space-y-6 w-full md:w-1/2">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-neutral-400">
                {globalData?.main_address || ""}
              </p>
              <p className="text-neutral-400">
                Phone : {globalData?.main_phone || ""}
              </p>
              <p className="text-neutral-400">
                Mail : {globalData?.email1 || ""}
              </p>
              <p className="text-neutral-400">
                {globalData?.working_hours || ""}
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6 w-full md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-2xl font-bold">Services</h3>
            <ul className="space-y-3 list-none">
              {(services || [])?.map((service) => (
                <li
                  key={service.id}
                  className="flex items-center text-neutral-400 hover:text-primary transition-colors duration-500 group"
                >
                  <Link href={`/services/${service.slug}`}>
                    <div className="block group-hover:translate-x-3 transition-transform duration-500">
                      <span className="opacity-0 min-w-[8px] min-h-[8px] bg-neutral-200 mr-1 inline-block rounded-full group-hover:bg-primary group-hover:opacity-100 transition-all duration-500" />
                      {service?.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-600 py-4 px-4 w-full">
        <div className="flex flex-col md:flex-row justify-between text-center items-center gap-6">
          <div className="flex justify-center md:justify-start items-center w-full md:w-4/12 mb-4 md:mb-0">
            <nav>
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
                <li>
                  <Link href="/" className="text-neutral-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-neutral-400 hover:text-white"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-neutral-400 hover:text-white"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-center items-center gap-4 w-full md:w-4/12 mb-4 md:mb-0">
            <Link
              href={globalData?.twitter_link || "#"}
              className="p-2 border rounded-full hover:border-neutral-500"
            >
              <TwitterIcon className="h-4 w-4 text-neutral-400" />
            </Link>
            <Link
              href={globalData?.facebook_link || "#"}
              className="p-2 border rounded-full hover:border-neutral-500"
            >
              <FacebookIcon className="h-4 w-4 text-neutral-400" />
            </Link>
            <Link
              href={globalData?.linkedin_link || "#"}
              className="p-2 border rounded-full hover:border-neutral-500"
            >
              <LinkedinIcon className="h-4 w-4 text-neutral-400" />
            </Link>
          </div>
          <div className="text-center md:text-right text-neutral-400 text-sm w-full md:w-4/12">
            Copyright © NEWWAVE 2025. Developed by NEWWAVE.
          </div>
        </div>
      </div>
    </footer>
  );
}
