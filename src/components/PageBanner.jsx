import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useDataContext from "../contexts/DataContext";

const PageBanner = () => {
    const { pageBanner } = useDataContext();
    const { pathname } = useLocation();

    const endpoint = pathname.split("/").filter(Boolean).pop() || "home";
    const pageTitle = endpoint.charAt(0).toUpperCase() + endpoint.slice(1);

    useEffect(() => { console.log(endpoint, pageTitle) }, [endpoint, pageTitle])

    const defaultBackgroundImage = "https://images.unsplash.com/photo-1761839258657-457dda39b5cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <header className="w-full">
            {/* Main banner */}
            <section
                className="relative w-full h-[30vh] sm:h-[40vh] max-h-[300px] bg-(--color-bg-dark)"
                aria-labelledby="page-banner-title"
                role="banner"
            >
                {/* Background Image */}
                <img
                    className="w-full h-full object-cover object-center"
                    src={pageBanner.backgroundImage || defaultBackgroundImage}
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