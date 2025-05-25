import { cn } from '@/lib/utils'
import React from 'react'

export default function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={cn("w-full bg-transparent border-b-2 border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-500", className)}
            {...props}
        />)
}
