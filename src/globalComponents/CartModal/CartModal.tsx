import React from "react"
import { RootState } from "../../app/store"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { toggleCartModal } from "../../features/OpenCartModal/cartModalSlice"
import { AiOutlineClose } from "react-icons/ai"
import TranspBack from "../TransparentBackground/TranspBack"

const CartModal: React.FC = () => {
  const dispatch = useAppDispatch()
  const isCartModalOpen = useAppSelector(
    (state: RootState) => state.cartModalSlice.isCartModalOpen
  )

  const handleCloseModalClick = () => {
    dispatch(toggleCartModal())
  }
  return (
    <>
      <TranspBack
        style={{ display: isCartModalOpen ? "flex" : "none" }}
        onClick={handleCloseModalClick}
      >
        <div
          className="cart-modal h-[400px] w-[400px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default z-50"
          style={{ display: isCartModalOpen ? "flex" : "none" }}
        >
          <AiOutlineClose className="text-5xl ml-auto cursor-pointer" />
        </div>
      </TranspBack>
    </>
  )
}

export default CartModal
