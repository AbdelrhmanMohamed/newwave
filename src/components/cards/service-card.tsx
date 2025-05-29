import React from 'react'


type serviceCardProps = {
    title: string;
    description: string;
    imageUrl: string;
}

export default function ServiceCard({ title, description, imageUrl }: serviceCardProps) {
    return (
        <div className="service-card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
