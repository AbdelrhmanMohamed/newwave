import React from "react";

type InstagramCardProps = {
  bgUrl?: string;
  className?: string;
};

export default function InstagramCard({
  bgUrl,
  className,
}: InstagramCardProps) {
  return (
    <div
      className={`w-full h-full bg-center bg-cover bg-no-repeat relative group cursor-pointer ${className}`}
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <div className="absolute inset-0 bg-black/80 border-primary border flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition duration-700">
        <div className="border-3 border-white size-22 rounded-full flex justify-center items-center ">
          {/* <InstagramIcon className="h-10 w-10 text-white" /> */}
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 595.3 595.3"
            className="h-10 w-10 fill-white stroke-white"
          >
            <g>
              <path
                d="M341.3,262.5L512,68.1h-40.5L323.3,236.9L204.9,68.1H68.3l179.1,255.2L68.3,527.1h40.5l156.5-178.2l125,178.2h136.6
		L341.3,262.5z M285.9,325.5l-18.2-25.4L123.3,98h62.2L302,261.2l18.1,25.4l151.5,212.1h-62.2L285.9,325.5z"
              />
            </g>
          </svg>
        </div>
        <p className="text-neutral-300 text-lg mt-4 mb-6">Follow us on X</p>
        <h6 className="text-white font-semibold text-2xl">@NewWaveEventksa</h6>
      </div>
    </div>
  );
}
