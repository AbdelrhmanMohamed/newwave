import { cn } from '@/lib/utils';
import React from 'react'

type ButtonProps = {
    loading?: boolean;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: "submit" | "button";
    label?: string;
    loadingText?: string;
    dotClassName?: string;
}

export default function Button({ loading, onClick, className, disabled, type, label, loadingText, dotClassName }: ButtonProps) {
    return (
        <button
            type={type || "button"}
            className={`border flex border-neutral-600 px-10 py-4 font-semibold  items-center cursor-pointer text-base hover:border-primary hover:text-primary transition duration-500 group ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span className={cn("bg-primary mr-2 rounded-full size-1 group-hover:bg-white transition duration-500", dotClassName)} />
            {loading ? loadingText || "Sending...." : label || "Submit"}
        </button>
    )
}
