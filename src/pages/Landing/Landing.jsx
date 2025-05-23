import React from 'react'
import Layout from '../../Components/Layout/Layout'
import PdtCategory from '../../Components/ProductCategory/PdtCategory'
import Product from '../../Components/Product/Product'
import BannerEffect from '../../Components/Banner/BannerEffect'

const Landing = () => {
  return (
    <>
      <Layout>
         <BannerEffect/>
        <PdtCategory/>
        <Product/>
      </Layout>
    </>
  )
}

export default Landing
