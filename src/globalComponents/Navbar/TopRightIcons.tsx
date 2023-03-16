import React from "react"
import { HiSearch } from "react-icons/hi"
import { CgProfile } from "react-icons/cg"
import { AiOutlineShopping } from "react-icons/ai"

export const TopRightIcons: React.FC = () => {
  return (
    <div className="flex gap-5 text-3xl ml-auto mr-5">
      <HiSearch className="bx bx-search cursor-pointer hover:text-sky-500 duration-300" />
      <CgProfile className="bx bx-user-circle cursor-pointer  hover:text-sky-500 duration-300" />
      <div className="flex">
        <AiOutlineShopping className="bx bx-cart cursor-pointer  hover:text-gray-600 duration-300" />
        <h2 className="text-white text-sm bg-sky-500 text-center rounded-full w-5 h-5 -ml-4 -mt-2">
          0
        </h2>
      </div>
    </div>
  )
}
