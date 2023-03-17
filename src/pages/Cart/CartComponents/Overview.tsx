import React, { useEffect } from "react"
import { Link, redirect } from "react-router-dom"

type props = {
    totalCost:any,
    handleBuyClick:any
    cartItems:any
}


export const Overview:React.FC<props> = ({totalCost, handleBuyClick,cartItems}) => {
    return (<div className="übersicht bg-[#1d2021] mx-5 h-[300px] mt-10 rounded">
          <div className="übersicht content mx-5 flex flex-col gap-5 mt-5">
            <div className="übersicht-header flex justify-between items-center text-xl font-semibold">
              <h1 className="text-white">ÜBERSICHT</h1>
              <h1 className="text-white">{cartItems.length} ARTIKEL</h1>
            </div>
            <div className=" border-b border-white/80 w-fulltext-left"></div>{" "}
            <div className="flex justify-between text-lg font-medium">
              <h2 className="text-white">Zwischensumme</h2>
              <h2 className="text-white">{totalCost}€</h2>
            </div>
            <div className=" border-b border-white/80 w-full text-left"></div>{" "}
            <div className="flex justify-between text-lg font-medium">
              <h2 className="text-white">Versand</h2>
              <h2 className="text-white">FREE</h2>
            </div>
            <div className=" border-b border-white/80 w-full text-left"></div>{" "}
            <div className="gesamtsumme flex justify-between font-bold text-xl">
              <h2 className="text-white">Gesamtsumme</h2>
              <h2 className="text-white">{totalCost}€</h2>
            </div>
            <div className="order-now flex justify-center mt-5"></div>
            <button className="bg-sky-500 py-4 font-bold text-lg rounded hover:opacity-90" onClick={handleBuyClick}>
              JETZT BESTELLEN
            </button>
          </div>
        </div>);
  }