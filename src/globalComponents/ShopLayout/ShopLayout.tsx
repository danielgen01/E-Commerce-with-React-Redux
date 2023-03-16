import React from "react"
import FilterSectionDesktop from "./FilterSectionDesktop"
import FilterSectionTouch from "./FilterSectionTouch"
import { Link } from "react-router-dom"
import products from "../../app/products.json"

interface Item {
  name: string
  price: number
  imageSrc: string
  id: string
  category: string
  
}

interface Props {
  category:string
  pageTitle:string
}




const ShopLayout: React.FC<Props> = ({category, pageTitle}) => {
  const specificCategory = products.filter((product: Item) => product.category === category)

  const productList = specificCategory.map((product: Item) => (
    <Link to={`/items/${product.id}`}>
      <div
        key={Math.floor(Math.random() * 20000)}
        className="grid-item flex flex-col items-center bg-Navbar-grey"
      >
        <h2 className="text-white text-lg font-medium">{product.name}</h2>
        <img
          src={product.imageSrc}
          alt={product.name}
          title={product.name}
          className="max-w-[150px] h-[150px] lg:max-w-[300px] lg:max-h-[250px] lg:hover:scale-150 lg:duration-300"
        />

        <h2 className="text-white text-md font-medium">{product.price}€</h2>
        <p className="text-white hidden">1</p>

        <button
          className="text-white font-bold ring-inset ring-2 px-5 py-4 rounded 
        hover:bg-white hover:text-black active:scale-110 ease-in-out 
        lg:px-5"
        >
          Produkt <br />
          anschauen
        </button>
      </div>
    </Link>
  ))

  return (
    <>
      <div
        // data-aos="zoom-in"
        // data-aos-duration="500"
        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        // data-aos-anchor-placement="top-center"
      >
        <div
          className="relevance-filter 
    hidden lg:flex justify-end mr-10"
        >
          <form className="outline-none">
            <select className="px-4 py-3 rounded outline-none border-none text-white bg-black cursor-pointer font-medium">
              <option value="relevanz">Relevanz</option>
              <option value="price-max">Preis (absteigend)</option>
              <option value="price-min">Preis (aufsteigend)</option>
            </select>
          </form>
        </div>

        <div className="shop flex flex-col lg:flex-row bg-black">
          <div className="flex flex-col items-center lg:w-1/3 gap-4">
            <h1 className="text-white font-bold text-4xl lg:hidden">
              {pageTitle}
            </h1>
            <h3 className="text-white lg:hidden font-normal text-lg">
              {productList.length} items
            </h3>

            <FilterSectionDesktop />
          </div>

          <div
            className="shop-items
       grid grid-cols-2 gap-5
       text-center  w-11/12 ml-[2%] mr-[2%] mt-10 
       lg:w-2/3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
          >
            <FilterSectionTouch />

            {productList}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopLayout
