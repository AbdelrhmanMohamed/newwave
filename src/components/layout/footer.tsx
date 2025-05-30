import Link from "next/link";
import Image from "next/image";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import SubscriptionForm from "./susbscripe";

export default function Footer() {


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
            Sodales ut etiam sit amet. Eget nulla facilisi etiam dignissim.
            Aliquam vestibulum morbi blandit cursus risus. Ultrices vitae auctor
            eu augue ut lectus. Ultricies integer quis auctor elit sed vulputate
            mi sit amet.
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
                No: 58 A, East Madison Street, Baltimore, MD, USA 4508
              </p>
              <p className="text-neutral-400">Phone : +974 - 411 - 3687</p>
              <p className="text-neutral-400">Mail : info@example.com</p>
              <p className="text-neutral-400">Working Hours : 8hrs</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6 w-full md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-2xl font-bold">Services</h3>
            <ul className="space-y-3 list-none">
              <li className="flex items-center ">
                <span className="text-neutral-400">Branding & Identity</span>
              </li>
              <li className="flex items-center">
                <span className="text-neutral-400">
                  Web Design & Development
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-neutral-400">Mobile App Development</span>
              </li>
              <li className="flex items-center">
                <span className="text-neutral-400">UI & UX Designing</span>
              </li>
              <li className="flex items-center">
                <span className="text-neutral-400">Digital Marketing</span>
              </li>
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
                  <Link href="#" className="text-neutral-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-400 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-neutral-400 hover:text-white">
                    Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-center items-center gap-4 w-full md:w-4/12 mb-4 md:mb-0">
            <Link
              href="#"
              className="p-2 border rounded-full hover:border-neutral-500"
            >
              <Twitter className="h-4 w-4 text-neutral-400" />
            </Link>
            <Link
              href="#"
              className="p-2 border rounded-full hover:border-neutral-500"
            >
              <Facebook className="h-4 w-4 text-neutral-400" />
            </Link>
            <Link
              href="#"
              className="p-2 border rounded-full hover:border-neutral-500"
            >
              <Linkedin className="h-4 w-4 text-neutral-400" />
            </Link>
          </div>
          <div className="text-center md:text-right text-neutral-400 text-sm w-full md:w-4/12">
            Copyright © NEWWAVE 2025. Developed by Minaret A
          </div>
        </div>
      </div>
    </footer>
  );
}
