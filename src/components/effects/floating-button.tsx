"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

type SocialIcon = {
    icon: React.ReactNode
    color: string
    label: string
    href: string
}

export default function FloatingActionButton() {
    const [isOpen, setIsOpen] = useState(false)

    const socialIcons: SocialIcon[] = [
        {
            icon: <Phone size={20} />,
            color: "bg-green-500 hover:bg-green-600",
            label: "WhatsApp",
            href: "https://wa.me/1234567890",
        },
        {
            icon: <Mail size={20} />,
            color: "bg-blue-500 hover:bg-blue-600",
            label: "Email",
            href: "mailto:example@example.com",
        },
        {
            icon: <MessageCircle size={20} />,
            color: "bg-purple-500 hover:bg-purple-600",
            label: "Telegram",
            href: "https://t.me/username",
        },
    ]

    const toggleFAB = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="fixed bottom-6 left-6 z-50">
            {/* Social Icons */}
            <div className="flex flex-col-reverse gap-3 mb-3">
                {socialIcons.map((item, index) => (
                    <a
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transform transition-all duration-300",
                            item.color,
                            isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none",
                            // Stagger the animation
                            isOpen && `transition-delay-${index * 100}`,
                        )}
                        style={{
                            transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                        }}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>

            {/* Main FAB Button */}
            <button
                onClick={toggleFAB}
                className="w-14 h-14 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50"
                aria-label={isOpen ? "Close menu" : "Open social menu"}
            >
                <div className={cn("transition-transform duration-300", isOpen ? "rotate-135" : "rotate-0")}>
                    {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                </div>
            </button>
        </div>
    )
}
