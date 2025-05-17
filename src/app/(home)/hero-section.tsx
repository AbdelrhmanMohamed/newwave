"use client";
import SocialSidebar from "@/components/social-sidebar";
import React from "react";
import { Play } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="container mx-auto relative ">
      <div className="flex flex-col md:flex-row">
        {/* Social Media Sidebar */}
        <div className="hidden md:flex flex-col items-center space-y-8 pr-16">
          <SocialSidebar />
        </div>

        {/* Content */}
        <div className="md:w-1/2 space-y-6 px-20 mt-12 md:mt-20 ">
          <div className="flex items-center space-x-4">
            <div className="h-px w-12 bg-gray-700"></div>
            <span className="text-primary text-sm">•</span>
            <span className="text-gray-400 text-lg">Innovative Ideas</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            We Offer You <span className="text-primary">A Digital</span>{" "}
            Platform <span className="text-primary">.</span>
          </h2>

          <p className="text-gray-400 max-w-lg">
            Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor
            posuere. Nisl purus in mollis nunc sed id sempe egestas quis ips.
          </p>

          <div className="flex items-center space-x-6 pt-8">
            <div className="flex items-center space-x-4">
              <span className="text-primary text-sm">•</span>
              <button className="text-white hover:text-primary">
                Get Started
              </button>
            </div>

            <button className="flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full h-12 w-12 text-white">
              <Play size={20} fill="white" />
            </button>

            <span className="text-white hover:text-primary">View Video</span>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-12 md:mt-0 ">
          <motion.div
            animate={{ scale: [1.1, 1.45] }}
            transition={{
              duration: 16,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="relative w-1/1 h-[590px]"
          >
            <Image
              src="/images/slider-Image-1.jpg"
              alt="Person using VR headset"
              className="object-cover"
              fill
            />
          </motion.div>
        </div>
      </div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
      <div>asdsadsada d asdsa dasdsa dsadsadsadsa</div>
    </main>
  );
}
