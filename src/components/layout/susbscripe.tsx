"use client"
import React, { useState } from 'react'
import { LoadingSpinner } from '../ui/loading'
import { subscribe_api } from "@/app/actions/actions";
import { toast } from "sonner";

export default function SubscriptionForm() {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            await subscribe_api((e.target as HTMLFormElement).email.value);
            toast.success("thanks for subscribing!");
            (e.target as HTMLFormElement).reset();  // Reset form state
        } catch (err) {
            console.error(err);
            toast.error("Error subscribing, please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-4 group w-full py-2">
            <input
                type="email"
                name="email"
                id="email"
                className="w-full relative bottom-4.5 bg-transparent border-b-2 border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary placeholder:text-neutral-500 group-hover:bottom-0 transition-all duration-500"
                placeholder="Enter your email" required />
            <button type='submit' className="text-white cursor-pointer py-1 text-2xl relative group flex items-center gap-4 before:content-[''] before:absolute before:w-2.5 before:h-2.5 before:bg-primary before:rounded-full before:left-0 px-6 group-hover:before:bg-primary group-hover:before:w-full group-hover:before:h-full before:transition-all before:duration-500">
                <span className="z-10">
                    {loading ? <LoadingSpinner /> : 'Subscribe'}
                </span>

            </button>
        </form>
    )
}
