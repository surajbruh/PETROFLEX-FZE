import React from "react";
import useDataContext from "../contexts/DataContext";

import PageBanner from "../components/PageBanner";

import StandardContentSection from "../sections/StandardContentSection";
import Sidebar from "../components/Sidebar";

const PetroChemicalsPage = () => {
    const { petroChemicalsPage } = useDataContext();

    return (
        <main>
            {/* Page Hero (assumed H1 inside PageBanner) */}
            <PageBanner backgroundImage={petroChemicalsPage.pageBannerImage} />

            {/* Content Section */}
            <section
                aria-labelledby="petrochemicals-heading"
                className="py-12"
            >
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-8">

                    {/* LEFT COLUMN – Main Content (70%) */}
                    <StandardContentSection data={petroChemicalsPage} />

                    {/* RIGHT COLUMN – Sidebar (30%) */}
                    <Sidebar />
                </div>
            </section>
        </main>
    );
};

export default PetroChemicalsPage;
