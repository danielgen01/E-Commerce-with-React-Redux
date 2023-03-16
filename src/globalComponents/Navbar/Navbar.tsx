import { TopRightIcons } from "./NavbarComponents/TopRightIcons"
import React from "react"
import MobileNavMenu from "./NavbarComponents/MobileNav"
import DesktopNavMenu from "./NavbarComponents/DesktopNav"

const Navbar: React.FC = () => {
  return (
    <div
      className="bg-slate-600 h-24 flex justify-between items-center text-white font-semibold w-full "
      data-aos="fade-right"
      data-aos-duration="500"
      data-aos-easing="ease-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="right"
    >
      <MobileNavMenu />
      <DesktopNavMenu />
      <TopRightIcons />
    </div>
  )
}

export default Navbar
