import React from "react"
import { HiSearch } from "react-icons/hi"
import { CgProfile } from "react-icons/cg"
import { AiOutlineShopping } from "react-icons/ai"
import { RootState } from "../../../app/store"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { toggleCartModal } from "../../../features/CartModal/cartModalReducer"

export const TopRightIcons: React.FC = () => {
  const dispatch = useAppDispatch()

  const cartItems = useAppSelector(
    (state: RootState) => state.CartReducer.items
  )

  const handleCartIconClick = () => {
    dispatch(toggleCartModal())
  }

  return (
    <div className="flex gap-5 text-3xl ml-auto mr-5">
      <HiSearch className="bx bx-search cursor-pointer hover:text-sky-500 duration-300" />
      <CgProfile className="bx bx-user-circle cursor-pointer  hover:text-sky-500 duration-300" />
      <div className="flex">
        <AiOutlineShopping
          className="bx bx-cart cursor-pointer  hover:text-gray-600 duration-300"
          onClick={handleCartIconClick}
        />
        <h2 className="text-white text-sm bg-sky-500 text-center rounded-full w-5 h-5 -ml-4 -mt-2">
          {cartItems.length}
        </h2>
      </div>
    </div>
  )
}
