import React from "react"
import { NavLink } from "react-router-dom"
import {AiOutlineHome} from "react-icons/ai"

const DesktopNavMenu:React.FC = () => {
  return (
    <div
      className="hidden justify-center items-center w-11/12 gap-20
lg:flex"
    >
      <NavLink to="/" className="hover:text-indigo-500 duration-300">
        <AiOutlineHome className="bx bxs-home text-3xl" />
      </NavLink>
      <NavLink to="/Handys" className="hover:text-indigo-500 duration-300">
        Handys
      </NavLink>
      <NavLink to="/Laptops" className="hover:text-indigo-500 duration-300">
      Laptops
      </NavLink>
      <NavLink to="/consoles" className="hover:text-indigo-500 duration-300">
        Konsolen
      </NavLink>
      <NavLink to="/Gadgets" className="hover:text-indigo-500 duration-300">
        Zubehör
      </NavLink>
    </div>
  )
}

export default DesktopNavMenu