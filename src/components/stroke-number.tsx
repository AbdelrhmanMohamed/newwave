import React from 'react'


type StrokeNumberProps = {
  number: string | number; // Adjust type as needed, e.g., string | number
  className?: string;
  customClass?: string; // Optional custom class for additional styling
}

export default function StrokeNumber({ number, className, customClass }: StrokeNumberProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className={`relative flex items-center justify-center w-24 h-24 rounded-xl cursor-pointer ${className}`}>
        {/* Background shape */}
        <div className={`absolute inset-0 rounded-xl`} />
        {/* Number with stroke */}
        <div
          className={`stroke-text font-bold duration-300 ${customClass}`}
        >
          {number}
        </div>
      </div>
    </div>
  )
}
