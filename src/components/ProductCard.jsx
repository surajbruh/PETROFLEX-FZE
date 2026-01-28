import React from "react";
import { ChevronRight } from "lucide-react";

const ProductCard = () => {
  return (
    <article className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow space-y-4">
      {/* Icon */}
      <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center">
        <span className="sr-only">Product category icon</span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg leading-tight max-w-xs">
        Raw Materials and Petrochemicals
      </h3>

      {/* Description */}
      <p className="font-light text-sm text-gray-600">
        We supply essential raw materials and petrochemicals to industries
        worldwide, ensuring timely and cost-effective deliveries.
      </p>

      {/* CTA */}
      <a
        href="#"
        className="inline-flex items-center gap-1 uppercase text-sm font-medium text-red-600 hover:gap-2 transition-all"
      >
        Read more
        <ChevronRight size={18} strokeWidth={2} />
      </a>
    </article>
  );
};

export default ProductCard;
