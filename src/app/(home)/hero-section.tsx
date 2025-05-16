import SocialSidebar from "@/components/social-sidebar";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <div>
      <main className="container mx-auto mt-12 md:mt-20 relative px-16">
        <div className="flex flex-col md:flex-row">
          {/* Social Media Sidebar */}
          <div className="hidden md:flex flex-col items-center space-y-8 pr-8">
            <SocialSidebar />
          </div>

          {/* Content */}
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-px w-12 bg-gray-700"></div>
              <span className="text-red-500 text-sm">•</span>
              <span className="text-gray-400 text-lg">Innovative Ideas</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              We Offer You <span className="text-red-500">A Digital</span>{" "}
              Platform <span className="text-red-500">.</span>
            </h2>

            <p className="text-gray-400 max-w-lg">
              Vulputate enim nulla aliquet porttitor lacus luctus accumsan
              tortor posuere. Nisl purus in mollis nunc sed id sempe egestas
              quis ips.
            </p>

            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-4">
                <span className="text-red-500 text-sm">•</span>
                <button className="text-white hover:text-red-500">
                  Get Started
                </button>
              </div>

              <button className="flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full h-12 w-12 text-white">
                <Play size={20} fill="white" />
              </button>

              <span className="text-white hover:text-red-500">View Video</span>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <Image
              src="/images/slider-Image-1.jpg"
              alt="Person using VR headset"
              width={800}
              height={800}
              className="object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
