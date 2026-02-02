import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

const PageBanner = ({ backgroundImage }) => {
    const pageTitle = useContext(PageContext)

    return (
        <header className="w-full">
            {/* Main banner */}
            <section
                className="relative w-full h-[150px] sm:h-[40vh] max-h-[300px] bg-(--color-bg-dark)"
                aria-labelledby="page-banner-title"
                role="banner"
            >
                {/* Background Image */}
                <img
                    className="w-full h-full object-cover object-center"
                    src={backgroundImage}
                    alt="Construction materials banner"
                    loading="lazy"
                />

                {/* Dark overlay + title */}
                <div className="absolute inset-0 bg-(--color-bg-dark)/50 flex items-center justify-center px-3">
                    <div className="">

                        <h1
                            id="page-banner-title"
                            className="uppercase font-bold text-(--color-text-inverse) text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide"
                        >
                            {pageTitle}
                        </h1>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default PageBanner;