import React from "react"
import CarouselBestseller from "./Homepage components/CarouselBestseller"
import Imagebanner from "./Homepage components/ImageBanner"
import ProductOverview from "./Homepage components/ProductOverview"

const Homepage: React.FC = () => {
  return (
    <>
      <Imagebanner />
      <ProductOverview />
      <CarouselBestseller />
    </>
  )
}

export default Homepage
