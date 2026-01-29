import React from "react";
import { ChevronRight } from "lucide-react";

const ProductCard = ({
  title,
  description,
  href,
  icon,
}) => {
  return (
    <article
      aria-labelledby={`${title}-heading`}
      className="
        relative bg-white p-6 rounded-lg
        shadow-sm hover:shadow-md
        transition-shadow
        space-y-4
        focus-within:ring-2 focus-within:ring-red-500
      "
    >
      {/* Icon */}
      <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center">
        {icon ? (
          icon
        ) : (
          <span className="sr-only">{title} category icon</span>
        )}
      </div>

      {/* Title */}
      <h3
        id={`${title}-heading`}
        className="font-semibold text-lg sm:text-xl leading-tight"
      >
        {title}
      </h3>

      {/* Description */}
      <p className="font-light text-sm sm:text-base text-gray-600">
        {description}
      </p>

      {/* CTA */}
      {href && (
        <a
          href={href}
          className="
            inline-flex items-center gap-1
            uppercase text-sm font-medium text-red-600
            hover:gap-2 transition-all
            focus:outline-none
          "
        >
          Read more
          <ChevronRight size={18} strokeWidth={2} />
        </a>
      )}
    </article>
  );
};

export default ProductCard;
