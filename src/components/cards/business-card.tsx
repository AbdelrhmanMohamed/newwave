import Image from "next/image"

interface BusinessCardProps {
    imageSrc: string
    imageAlt: string
    date: string
    title: string
    description: string
    onReadMore?: () => void
    readMoreLabel?: string
}

export default function BusinessCard({
    imageSrc,
    imageAlt,
    date,
    title,
    description,
    onReadMore,
    readMoreLabel = "Read More",
}: BusinessCardProps) {
    return (
        <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 relative">
                <div className="relative h-64 md:h-full min-h-[300px]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                    <div className="text-primary text-sm font-medium tracking-wider uppercase">{date}</div>

                    <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
                        {title}
                    </h2>

                    <p className="text-gray-400 text-base leading-relaxed">
                        {description}
                    </p>

                    <div className="flex items-center space-x-3 pt-4">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span
                            className="text-white font-medium hover:text-primary transition-colors cursor-pointer"
                            onClick={onReadMore}
                            tabIndex={onReadMore ? 0 : -1}
                            role={onReadMore ? "button" : undefined}
                        >
                            {readMoreLabel}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
