import React from 'react'
import useDataContext from '../contexts/DataContext'

import PageBanner from '../components/PageBanner'
import ProductSection from '../sections/ProductSection'

const ProductsPage = () => {
    const { productPage } = useDataContext()

    return (
        <main>
            <PageBanner backgroundImage={productPage.pageBannerImage} />
            <ProductSection />
        </main>
    )
}

export default ProductsPage