import React, { useRef } from "react"
import products from "../../../app/products.json"
import "aos/dist/aos.css"
import {FaChevronCircleLeft} from "react-icons/fa"
import {FaChevronCircleRight} from "react-icons/fa"
import { Link } from "react-router-dom"


interface Item {
  name: string
  price: number
  imageSrc: string
  id: string
  bestseller: boolean
  
}



const CarouselBestseller:React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft -= 400
    }
  }

  const scrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft += 400
    }
  }
  // Container div for every product in bestseller section
 
  const bestsellerList = products.filter((product: Item) => product.bestseller)

  const productList = bestsellerList.map((product: Item) => (
   

    <div 
      className="
      w-1/3 h-auto bg-Navbar-grey 
    flex flex-col justify-center items-center gap-2 shrink-0 grow-0
    lg:w-1/5"
      key={product.id}
    > 
      <h2
        className="text-white font-bold text-sm 
      lg:text-xl"
      >
        {product.name}
      </h2>
      <img
        src={product.imageSrc}
        className="w-[120px] h-[150px] object-cover "
        alt="."
    />
      <h2 className="text-white font-bold">{product.price}€</h2>
      <h2 className="hidden">1</h2>
      <button
        className="text-white font-bold ring-inset ring-2 px-1 py-4 rounded
        hover:bg-white hover:text-black duration-500  active:animate-ping
        lg:px-5"
      >
        In den Einkaufswagen
      </button>
      
    </div>
   
  ))

  return (
    <>
      <div className="carousel-container    bg-black h-full w-full " >
        <h2
          className="text-white font-bold text-center text-2xl  py-4 
        lg:text-3xl"
      
        >
          UNSERE BESTSELLER
        </h2>

        {/* CHEVRONS */}

        <div
          className="chevrons 
         hidden justify-center gap-10 mb-5
         lg:flex"

       
        >
          <FaChevronCircleLeft
            className="bx bx-chevron-left-circle text-white text-5xl cursor-pointer hover:opacity-90"
            onClick={scrollLeft}
          />

          <FaChevronCircleRight
            className="bx bx-chevron-right-circle text-white text-5xl cursor-pointer hover:opacity-90"
            onClick={scrollRight}
         />
        </div>

        <div
          ref={contentRef}
          id="carouselcontent"
          className="carousel-content 
          h-auto w-full
        flex justify-start items-center gap-3 flex-nowrap
        overflow-x-scroll scroll-smooth           
      "
        >
          {productList}
        </div>
      </div>
    </>
  )
}

export default CarouselBestseller