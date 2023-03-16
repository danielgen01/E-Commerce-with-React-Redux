import React from "react"
import { RootState } from "../../app/store"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { toggleCartModal } from "../../features/OpenCartModal/cartModalSlice"
import { AiOutlineClose } from "react-icons/ai"

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
      <div
        className="cart-modal h-[500px] w-[500px] bg-white absolute top-1/3 left-1/3"
        style={{display: isCartModalOpen? "flex" : "none"}}
      >

            <AiOutlineClose className="text-5xl ml-auto" onClick={handleCloseModalClick}/>
      </div>
    </>
  )
}

export default CartModal
