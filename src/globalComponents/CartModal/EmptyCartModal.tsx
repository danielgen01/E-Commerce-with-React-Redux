import React from "react";
import { Link } from "react-router-dom";
import {GiShoppingCart} from "react-icons/gi"



const EmpyCartModal:React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full gap-5 lg:gap-20">
        <GiShoppingCart className="text-white text-9xl" />
        <h2 className="text-white text-4xl text-center font-medium">Dein Warenkorb ist noch leer</h2>
        {/* <button className="bg-gradient-to-r from-sky-500 to-indigo-500 py-3 px-12 rounded">Jetzt shoppen</button> */}
    
    </div>
  )
};

export default EmpyCartModal;