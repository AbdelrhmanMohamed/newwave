import React from 'react'


type StrokeNumberProps = {
  number: number;
  className?: string;
}

export default function StrokeNumber({ number, className }: StrokeNumberProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="relative flex items-center justify-center w-24 h-24 rounded-xl cursor-pointer">
        {/* Background shape */}
        <div className={`absolute inset-0 rounded-xl`} />
        {/* Number with stroke */}
        <div
          className="stroke-text font-bold duration-300"
        >
          {number}
        </div>
      </div>
    </div>
  )
}
