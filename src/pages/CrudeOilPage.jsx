import React from 'react'
import useDataContext from '../contexts/DataContext'

import StandardContentSection from '../sections/StandardContentSection'

import PageBanner from '../components/PageBanner'
import Sidebar from '../components/Sidebar'

const CrudeOilPage = () => {
    const { crudeOilPage } = useDataContext()

    return (
        <main>
            {/* Page Hero (assumed H1 inside PageBanner) */}
            <PageBanner backgroundImage={crudeOilPage.pageBannerImage} />

            {/* Content Section */}
            <section
                aria-labelledby="petrochemicals-heading"
                className="py-12"
            >
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-8">

                    {/* LEFT COLUMN – Main Content (70%) */}
                    <StandardContentSection data={crudeOilPage} />

                    {/* RIGHT COLUMN – Sidebar (30%) */}
                    <Sidebar />
                </div>
            </section>
        </main>
    )
}

export default CrudeOilPage