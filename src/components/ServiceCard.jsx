import React from "react";

const ServiceCard = ({ title, description, icon }) => {
    const headingId = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    return (
        <article
            aria-labelledby={headingId}
            className="
        relative bg-white p-6 rounded-lg
        shadow-sm hover:shadow-md
        transition-shadow
        space-y-4
        focus-within:ring-2 focus-within:ring-red-500
      "
        >
            {/* Icon (decorative) */}
            {icon && (
                <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center">
                    <span aria-hidden="true">{icon}</span>
                </div>
            )}

            {/* Title */}
            <h3
                id={headingId}
                className="font-semibold text-lg sm:text-xl leading-tight"
            >
                {title}
            </h3>

            {/* Description */}
            <p className="font-light text-sm sm:text-base text-gray-600">
                {description}
            </p>
        </article>
    );
};

export default ServiceCard;
