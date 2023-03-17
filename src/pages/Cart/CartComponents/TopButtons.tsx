import React from "react"
import { Link } from "react-router-dom"

type props = {
    handleBuyClick:any
}

export const TopButtons:React.FC<props> = ({handleBuyClick}) => {

  return (
    <div className="cart-top-buttons h-[20%] mt-10 w-screen flex flex-col justify-center items-center gap-5 lg:items-end">
      <div className="button-1 w-full flex justify-center lg:w-1/4">
        <button
          className=" bg-sky-500 w-5/6 py-1 text-black text-lg flex items-center justify-center rounded font-bold hover:opacity-90"
          onClick={handleBuyClick}
        >
          WEITER ZUR KASSE{" "}
          <i className="bx bx-right-arrow-alt text-black text-2xl"></i>
        </button>
      </div>

      <div className="button-2 w-full flex justify-center lg:w-1/4">
        <Link
          to="/"
          className="w-5/6 py-1 text-black text-lg flex items-center justify-center rounded font-bold hover:opacity-90 ring-2 ring-white"
        >
          <button className=" text-md flex items-center justify-center rounded text-white font-bold hover:opacity-90">
            WEITER SHOPPEN{" "}
          </button>
        </Link>
      </div>
    </div>
  )
}
