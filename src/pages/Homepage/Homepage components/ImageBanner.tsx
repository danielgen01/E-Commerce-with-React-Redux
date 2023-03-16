import React from "react"
import { Link } from "react-router-dom"

const Imagebanner: React.FC = () => {
  return (
    <>
      <div
        className="
      background-wrapper
      flex flex-col justify-start items-center 
      bg-black h-3/4 lg:h-screen py-20 lg:py-40

      lg:flex-row lg:items-start"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div
          className="z-10 macbook-background 
          h-1/2 w-full
      lg:order-2 
      "
        >
          <img
            src={
              process.env.PUBLIC_URL + "/images/Homepage_MacBook_Picture.jpg"
            }
            alt="macbook"
            className=" min-w-10
          
          "
          />
        </div>

        <div
          className="background-text-container
        flex flex-col items-center justify-center
         z-20  w-full
        lg:order-1 
      "
        >
          <h1
            className="text-white font-bold text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        
        
        "
          >
            {" "}
            DER MAC <br /> FÜR JEDEN
          </h1>
          <br />
          <h2 className="text-white text-xl font-bold text-center">
            Millionen von zufriedenen Mac Kunden.
            <br /> Hol dir unser neuestes MacBook!
          </h2>
          <Link to="/Laptops">
            <button
              className="text-black bg-gradient-to-r from-sky-500 to-indigo-500 py-3 px-12 font-bold mt-10 text-xl rounded tracking-wide 
        shadow-md shadow-sky-500
         active:scale-110 ease-in-out duration-75 
         lg:hover:scale-125 lg:ease-out lg:duration-500 
         lg:hover:text-white/80"
            >
              ZU DEN LAPTOPS
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Imagebanner