import React from "react";

const StandardContentSection = ({ data }) => {
    if (!data) return null;

    const {
        heroImage,
        heading,
        description,
        supportingContent,
        paragraph
    } = data;

    const headingId = heading
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    console.log(headingId)

    return (
        <article className="space-y-6">
            {/* Feature Image */}
            {heroImage && (
                <img
                    src={heroImage}
                    alt={heading ? `${heading} overview` : "Section overview image"}
                    className="
                            w-full
                            h-[30vh] sm:h-[35vh] md:h-[40vh]
                            max-h-[350px]
                            object-cover object-center
                            rounded-md"
                    loading="lazy"
                />
            )}


            {/* Heading & Intro */}
            <header className="space-y-4">
                {heading && (
                    <h2
                        id={headingId}
                        className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl leading-tight"
                    >
                        {heading}
                    </h2>
                )}

                {description && (
                    <p className="font-light text-sm sm:text-base">
                        {description}
                    </p>
                )}
            </header>

            {/* Supporting Content */}
            {supportingContent?.text && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p className="font-light text-sm sm:text-base">
                        {supportingContent.text}
                    </p>

                    {supportingContent.image && (
                        <img
                            src={supportingContent.image}
                            alt={`${heading} supporting content`}
                            className="w-full h-auto rounded-md"
                            loading="lazy"
                        />
                    )}
                </div>
            )}

            {/* Closing Paragraph */}
            {paragraph && (
                <p className="font-light text-sm sm:text-base">
                    {paragraph}
                </p>
            )}
        </article>
    );
};

export default StandardContentSection;
