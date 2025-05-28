"use client"
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react";
import useMediaQuery, { ScreenSize } from '@/hooks/useMediaQuery';

interface MotionClientProps extends React.ComponentProps<typeof motion.div> {
    children?: React.ReactNode;
    className?: string;
    stopOnMobile?: boolean;
};

export default function MotionClient({ children, className, ...motionProps }: MotionClientProps) {
    const [mounted, setMounted] = useState(false);
    // If stopOnMobile is true, disable motion on mobile devices
    const isTablet = useMediaQuery(ScreenSize.Mobile);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // يمكن إرجاع عنصر ثابت أو null ليتطابق SSR وCSR
        return <div className="relative h-[400px]" />;
    }

    if (isTablet) {
        return <div className={className}>{children}</div>;
    }
    return (
        <motion.div className={className}  {...motionProps}>
            {children}
        </motion.div>
    )
}
