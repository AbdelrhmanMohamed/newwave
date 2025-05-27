'use client';

import React, { useEffect, useState } from 'react';

type StrokeNumberProps = {
  number: number | string; // الرقم الذي سيتم عرضه
  className?: string;
  customClass?: string;
  duration?: number; // مدة الحركة بالثواني
  animate?: boolean; // للتحكم في تفعيل الأنيميشن
}

export default function StrokeNumber({
  number,
  className,
  customClass,
  duration = 2,
  animate = false,
}: StrokeNumberProps) {
  const [count, setCount] = useState(animate ? 0 : number);

  useEffect(() => {
    if (!animate) {
      setCount(number);
      return;
    }

    let frame = 0;
    const start = 0;
    const end = number;
    const totalDuration = duration * 1000;
    const frameRate = 60;
    const totalFrames = Math.round((totalDuration / 1000) * frameRate);

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(progress * (Number(end) - start) + start);
      setCount(current);

      if (frame >= totalFrames) clearInterval(counter);
    }, 1000 / frameRate);

    return () => clearInterval(counter);
  }, [number, duration, animate]);

  return (
    <div className={`flex justify-center ${className}`}>
      <div className={`relative flex items-center justify-center w-24 h-24 rounded-xl cursor-pointer ${className}`}>
        {/* Background shape */}
        <div className={`absolute inset-0 rounded-xl`} />
        {/* Number with stroke */}
        <div className={`stroke-text font-bold duration-300 ${customClass}`}>
          {count}
        </div>
      </div>
    </div>
  );
}
