const items = [
    {
        id: 1,
        title: "Reliable Global Trade Solutions",
    },
    {
        id: 2,
        title: "Trusted Partnerships Worldwide",
    },
];

const FeatureGrid = () => {
    return (
        <section
            aria-labelledby="features-heading"
            className="w-full"
        >
            <h2 id="features-heading" className="sr-only">
                Key Features
            </h2>

            <ul className="grid gap-4 sm:grid-cols-2">
                {items.map((item) => (
                    <li key={item.id}>
                        <article
                            className="
                  bg-gray-50 p-6 rounded-lg
                  shadow-sm hover:shadow-md
                  transition-shadow
                  space-y-4
                "
                        >
                            {/* Icon */}
                            <div
                                className="h-16 w-16 rounded-full bg-red-500"
                                aria-hidden="true"
                            />

                            {/* Title */}
                            <h3 className="font-semibold text-lg sm:text-xl leading-tight">
                                {item.title}
                            </h3>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default FeatureGrid;
