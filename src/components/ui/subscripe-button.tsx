"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'
import { LoadingSpinner } from './loading'

export default function SubscriptionButton() {
    const { pending } = useFormStatus()

    return (
        <button type='submit' className="text-white cursor-pointer py-1 text-2xl relative group flex items-center gap-4 before:content-[''] before:absolute before:w-2.5 before:h-2.5 before:bg-primary before:rounded-full before:left-0 px-6 group-hover:before:bg-primary group-hover:before:w-full group-hover:before:h-full before:transition-all before:duration-500">
            <span className="z-10">
                {pending ? <LoadingSpinner /> : 'Subscribe'}
            </span>

        </button>
    )
}
