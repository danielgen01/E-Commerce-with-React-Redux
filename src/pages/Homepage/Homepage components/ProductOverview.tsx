import React from "react"
import { Link } from "react-router-dom"
import "aos/dist/aos.css"

const ProductOverview: React.FC = () => {
  return (
    <div
      className="grid grid-cols-1 justify-center  mt-20 mb-20 overflow-hidden
      sm:grid-cols-2 
      lg:grid-cols-4"
      data-aos="fade-left"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <Link to="/Handys" className="active:scale-110 ease-in-out duration-75 ">
        <div
          className="flex flex-col  justify-center items-center  h-[15rem] bg-black
        lg:hover:opacity-80"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/iPhone_staffel.png"}
            className="w-full h-full"
            alt="iPhones"
          />
          <span className=" transform -translate-x-3/2 -translate-y-1/2 text-white -mt-32 bg-black/40 px-10 py-5 rounded text-xl">
            Handys
          </span>
        </div>
      </Link>
      <Link to="/Laptops" className="active:scale-110 ease-in-out duration-75">
        <div
          className="flex flex-col  justify-center items-center  h-[15rem] bg-black
        lg:hover:opacity-80"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/macc.png"}
            className="w-full h-full"
            alt="MacBook"
          />
          <span className=" transform -translate-x-3/2 -translate-y-1/2 text-white -mt-32 bg-black/40 px-10 py-5 rounded text-xl">
            Laptops
          </span>
        </div>
      </Link>
      <Link to="/consoles" className="active:scale-110 ease-in-out duration-75">
        <div
          className="flex flex-col  justify-center items-center  h-[15rem]  bg-black
        lg:hover:opacity-80"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/konsolen.png"}
            className="w-full h-full"
            alt="consoles"
          />
          <span className=" transform -translate-x-3/2 -translate-y-1/2 text-white -mt-32 bg-black/40 px-10 py-5 rounded text-xl">
            Konsolen
          </span>
        </div>
      </Link>
      <Link to="/Gadgets" className="active:scale-110 ease-in-out duration-75">
        <div
          className="flex flex-col  justify-center items-center  h-[15rem] bg-black
        lg:hover:opacity-80"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/airpods_.png"}
            className="w-auto  h-full"
            alt="gadget"
          />
          <span className=" transform -translate-x-3/2 -translate-y-1/2 text-white -mt-32 bg-black/40 px-10 py-5 rounded text-xl">
            Zubehör
          </span>
        </div>
      </Link>
    </div>
  )
}

export default ProductOverview
