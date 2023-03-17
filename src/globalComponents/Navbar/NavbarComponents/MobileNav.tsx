import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai"
import { HiMenuAlt3 } from "react-icons/hi"
import { AiOutlineArrowLeft } from "react-icons/ai"
import TransparentBackground from "../../TransparentBackground/TransparentBackground"

const MobileNavMenu: React.FC = () => {
  const [isTouchNavMenuOpen, setIsTouchNavMenuOpen] = useState<boolean>(false)

  const deactivateScroll = () => {
    if (!isTouchNavMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const toggleTouchNavMenu = () => {
    setIsTouchNavMenuOpen(!isTouchNavMenuOpen)
    deactivateScroll()
  }

  return (
    <div className="lg:hidden">
      <div
        className="menu-icon/close-icon 
        flex lg:hidden"
      >
        {isTouchNavMenuOpen ? (
          <AiOutlineArrowLeft
            className="bx bx-x text-5xl cursor-pointer z-40"
            onClick={toggleTouchNavMenu}
          />
        ) : (
          <HiMenuAlt3
            className="bx bx-menu text-5xl cursor-pointer z-40"
            onClick={toggleTouchNavMenu}
          />
        )}
      </div>

      <TransparentBackground
        onClick={toggleTouchNavMenu}
        style={{ display: isTouchNavMenuOpen ? "flex" : "none" }}
      ></TransparentBackground>
        <div
          className="touch-menu-nav-links
          flex flex-col gap-10 items-center 
        py-20
        absolute top-0 h-screen w-2/3 bg-gray-800 z-30 rounded cursor-default 
        animate-menu-slide
        "
          style={{ display: isTouchNavMenuOpen ? "flex" : "none" }}
        >
          <NavLink to="/" className="" onClick={toggleTouchNavMenu}>
            <AiOutlineHome className="bx bxs-home text-5xl" />
          </NavLink>

          <NavLink
            to="/Handys"
            className="text-3xl"
            onClick={toggleTouchNavMenu}
          >
            Handys
          </NavLink>
          <NavLink
            to="/Laptops"
            className="text-3xl"
            onClick={toggleTouchNavMenu}
          >
            Laptops
          </NavLink>
          <NavLink
            to="/consoles"
            className="text-3xl"
            onClick={toggleTouchNavMenu}
          >
            Konsolen
          </NavLink>
          <NavLink
            to="/Gadgets"
            className="text-3xl"
            onClick={toggleTouchNavMenu}
          >
            Zubehör
          </NavLink>
        </div>
      
    </div>
  )
}

export default MobileNavMenu
