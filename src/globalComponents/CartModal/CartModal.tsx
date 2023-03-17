import React from "react"
import { RootState } from "../../app/store"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { toggleCartModal } from "../../features/CartModal/cartModalReducer"
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai"
import TransparentBackground from "../TransparentBackground/TransparentBackground"
import { Link } from "react-router-dom"
import { calculateTotal } from "../../features/Cart/CartReducer"
import EmpyCartModal from "./EmptyCartModal"

const CartModal: React.FC = () => {
  const dispatch = useAppDispatch()
  const isCartModalOpen = useAppSelector(
    (state: RootState) => state.cartModalReducer.isCartModalOpen
  )
  const cartItems = useAppSelector(
    (state: RootState) => state.CartReducer.items
  )

  const handleCloseModalClick = () => {
    dispatch(toggleCartModal())
  }

  const totalCost = calculateTotal(cartItems)

  return (
    <>
      <TransparentBackground
        style={{ display: isCartModalOpen ? "flex" : "none" }}
        onClick={handleCloseModalClick}
      ></TransparentBackground>

      <div
        className="cart-modal  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
          text-white w-96 h-[450px] bg-[#1d2021]  rounded  lg:w-[500px] lg:h-[700px] lg:-translate-x-1/5 z-50"
        style={{ display: isCartModalOpen ? "block" : "none" }}
      >
        <AiOutlineClose
          className="text-5xl ml-auto cursor-pointer"
          onClick={handleCloseModalClick}
        />
        <div className="flex justify-between mx-5 mt-5">
          <h2 className="text-white font-bold  text-xl ml-3">
            DEINE BESTELLUNG:
          </h2>
          <h2 className="text-white font-semibold text-md ">
            Artikel: {cartItems.length} | {totalCost}€
          </h2>
        </div>

        {cartItems.length === 0 &&
      <>
      <EmpyCartModal />
      </>}

        <div
          className="cart-items-in-cart
         h-[70%] overflow-y-scroll mx-5"
        >
          <ul
            className="cart-items 
        flex flex-col gap-10 w-full justify-center"
          >
            {cartItems.map((product: any) => (
              <>
                <li
                  key={product.id}
                  className="single-item-row
                grid grid-cols-2
                  mt-5
                    "
                >
                  <div>
                    <img
                      src={product.imageSource}
                      className="w-[150px]"
                      alt="product_image"
                      title={product.name}
                    />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-3">
                    <h2 className="text-xl font-medium text-center">
                      {product.name}
                    </h2>
                    <h2 className="font-medium">{product.price}</h2>
                    <h2>Menge:1</h2>
                  </div>
                </li>
                <div className=" border-b border-white/80 w-full mx-auto "></div>{" "}
              </>
            ))}
          </ul>
        </div>

        {cartItems.length > 0 && (
          <>
            <div className="flex justify-center items-center w-auto">
              <Link to="/Cart">
                <button
                  className="bg-gradient-to-r from-sky-500 to-indigo-500 py-3 px-15 w-full
           rounded cursor-pointer text-white hover:opacity-90 font-semibold tracking-wide flex items-center gap-2 px-2"
                  onClick={handleCloseModalClick}
                >
                  WARENKORB ABCHECKEN{" "}
                  <AiOutlineArrowRight className="text-3xl" />
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
      
    </>

    
  )
}

export default CartModal
