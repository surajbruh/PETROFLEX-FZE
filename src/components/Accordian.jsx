import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const Accordion = ({ items = [], label = "Accordion content" }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section
            aria-label={label}
            className="w-full bg-white"
        >
            <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-3">
                {items.map((item, index) => {
                    const isOpen = openIndex === index;
                    const contentId = `accordion-content-${index}`;
                    const buttonId = `accordion-button-${index}`;

                    return (
                        <article
                            key={index}
                            aria-labelledby={buttonId}
                            className="border border-gray-200 bg-gray-100"
                        >
                            {/* Header */}
                            <h3>
                                <button
                                    id={buttonId}
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={contentId}
                                    onClick={() => toggle(index)}
                                    className="
                    w-full flex justify-between items-center
                    px-4 md:px-6 py-4
                    text-left font-semibold text-gray-900
                    hover:bg-gray-200 transition-colors
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500
                  "
                                >
                                    <span className="text-base md:text-lg">
                                        {item.title}
                                    </span>

                                    {isOpen ? (
                                        <Minus className="w-5 h-5" aria-hidden="true" />
                                    ) : (
                                        <Plus className="w-5 h-5" aria-hidden="true" />
                                    )}
                                </button>
                            </h3>

                            {/* Content */}
                            <div
                                id={contentId}
                                role="region"
                                aria-labelledby={buttonId}
                                className={`
                  grid transition-[grid-template-rows] duration-300
                  ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  bg-white px-4 md:px-6
                `}
                            >
                                <div className="overflow-hidden">
                                    <p className="py-4 text-gray-700 text-sm md:text-base leading-relaxed">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Accordion;
