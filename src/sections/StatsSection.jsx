import React from "react";
import useDataContext from "../contexts/DataContext";

const StatsSection = () => {
    const { stats } = useDataContext()

    return (
        <section
            aria-label="Key company statistics and achievements"
            className="bg-[#0f0f0f] text-white"
        >
            <div
                className="
          max-w-7xl mx-auto
          px-4 py-12
          grid grid-cols-1 gap-8
          sm:grid-cols-2
          lg:grid-cols-4
        "
            >
                {stats.map((item, index) => (
                    <div
                        key={item.label}
                        className="text-center flex flex-col items-center relative"
                    >
                        {/* Divider (desktop only) */}
                        {index !== 0 && (
                            <span
                                className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white/20"
                                aria-hidden="true"
                            />
                        )}

                        {/* Number */}
                        <p
                            className="text-4xl sm:text-5xl font-bold leading-none"
                            aria-label={`${item.value}${item.suffix} ${item.label}`}
                        >
                            {item.value}
                            <span className="text-red-500 text-2xl align-top ml-1">
                                {item.suffix}
                            </span>
                        </p>

                        {/* Label */}
                        <p className="mt-2 text-sm sm:text-base font-medium text-white/80">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
