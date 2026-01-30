import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Accordion = ({ items = [] }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="space-y-3">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <article
                        key={index}
                        className="border border-gray-200 bg-gray-100"
                    >
                        {/* Header */}
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() =>
                                setOpenIndex(isOpen ? null : index)
                            }
                            className="
                w-full flex justify-between items-center
                px-4 py-4 text-left
                font-semibold text-gray-900
                hover:bg-gray-200 transition
                focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500
              "
                        >
                            <span className="text-base md:text-lg">
                                {item.title}
                            </span>

                            {isOpen ? (
                                <Minus className="w-5 h-5" />
                            ) : (
                                <Plus className="w-5 h-5" />
                            )}
                        </button>

                        {/* Content */}
                        {isOpen && (
                            <div className="px-4 pb-4 bg-white">
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        )}
                    </article>
                );
            })}
        </div>
    );
};

export default Accordion;
