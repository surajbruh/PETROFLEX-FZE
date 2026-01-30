import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, href, icon }) => {
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
        space-y-4"
    >
      {/* Icon (decorative) */}
      {icon && (
        <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center">
          <img
            src={icon}
            alt=""
            className="h-8 w-8"
            loading="lazy"
          />
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

      {/* CTA */}
      {href && (
        <Link
          to={href}
          className="
            inline-flex items-center gap-1
            uppercase text-sm font-medium text-red-600
            hover:gap-2 transition-all
            focus:outline-none focus-visible:underline
          "
          aria-label={`Read more about ${title}`}
        >
          Read more
          <ChevronRight size={18} strokeWidth={2} />
        </Link>
      )}
    </article>
  );
};

export default ProductCard;