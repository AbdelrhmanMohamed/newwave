import React from "react";
import Image from "next/image";

export default function GlobalPresence() {
  return (
    <div className="flex justify-center items-center h-full flex-nowrap">
      {/** image */}
      <div className="flex flex-col items-center justify-center w-full basis-[47%] h-[670px] relative">
        <Image
          fill
          src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/team-page-image-1.jpg"
          alt="Global Presence"
        />
      </div>
      {/**content */}
      <div className="relative z-20 shadow p-12 -translate-x-20 bg-background border border-primary basis-[55%]">
        <h2 className="text-4xl font-bold mb-4">Global Presence</h2>
        <p className="text-[15px] leading-6 mb-4 text-neutral-300">
          New Wave&apos;s commitment to excellence extends beyond the borders of
          Saudi Arabia. With established offices in key regional and
          international hubs, including <strong>Cairo, Egypt;</strong>{" "}
          <strong>Doha, Qatar;</strong> and <strong>the United States</strong>,
          we offer a truly global service capability. This international
          footprint is further strengthened by a curated network of strategic
          partners specializing in advanced event technologies, VR/AR content
          creation, AI-driven event solutions, and global event logistics.
        </p>
        <p className="text-[15px] leading-6">
          These international connections are vital. They allow us to:
        </p>
        <ul className="list-disc pl-5 mt-2 mb-4 text-[15px] leading-6">
          <li>Leverage global best practices in event management</li>
          <li>
            Integrate cutting-edge technologies that enhance attendee
            experiences
          </li>
          <li>
            Ensure seamless execution of events, no matter where they are held
          </li>
          <li>
            Provide our clients with a comprehensive understanding of global
            market trends and cultural nuances
          </li>
        </ul>
        <p className="text-[15px] leading-6 text-neutral-300">
          Our ability to combine this international reach with our deep-rooted
          Saudi expertise makes New Wave a unique and powerful partner for any
          organization aiming to make a significant impact.
        </p>
      </div>
    </div>
  );
}
