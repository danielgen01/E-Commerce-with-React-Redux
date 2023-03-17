import { Table } from "./CartComponents/Table"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { Overview } from "./CartComponents/Overview"
import { TopButtons } from "./CartComponents/TopButtons"
import { RootState } from "../../app/store"
import {
  removeItem,
  Item,
  calculateTotal,
} from "../../features/Cart/CartReducer"

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const Cart: React.FC = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(
    (state: RootState) => state.CartReducer.items
  )

  const handleRemoveItem = (item: Item) => {
    dispatch(removeItem(item))
  }

  const totalCost = calculateTotal(cartItems)

  function handleBuyClick() {
    alert("This shop is unfortunately not a real business")
  }

  return (
    <>
      <div className="cart-body bg-black min-h-screen">
        <div className="cart-headline h-[10%] font-bold flex justify-center">
          <h1 className="text-3xl text-white">Dein Warenkorb</h1>
        </div>

        <TopButtons handleBuyClick={handleBuyClick} />

        <div className="grid-wrapper grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
          <div className="h-[50%] cart-items xl:col-span-3 lg:col-span-2 mt-5">
            <Table />
            <div>
              {cartItems.length > 0 && (
                <>
                  <ul className="flex flex-col mx-1 gap-5 itemscolumn lg:items-center">
                    {cartItems.map((item: Item) => (
                      <>
                        <li
                          key={item.id}
                          className="flex flex-row items-between py-5 single-itemRow w-auto lg:w-3/4 h-auto  gap-2 bg-Navbar-grey"
                        >
                          <div className="image-div w-1/3 h-full flex flex-col gap-5 justify-center items-center rounded">
                            <Link
                              to={`/items/${item.id}`}
                              className="flex flex-col items-center justify-center"
                            >
                              <img
                                src={item.imageSource}
                                className="w-full h-auto lg:w-2/3"
                                alt={item.name}
                                title={item.name}
                              />
                            </Link>
                            <div className="product-details  flex flex-col justify-center text-center gap-2">
                              <h2 className="text-white text-md lg:text-xl font-semibold ">
                                {item.name}
                              </h2>
                              <h2
                                className=" text-sm lg:text-xl cursor-pointer text-sky-500 underline hover:font-bold"
                                onClick={() => handleRemoveItem(item)}
                              >
                                Entfernen
                              </h2>
                            </div>
                            <div className=" flex justify-center">
                              <h3 className="text-white font-semibold text-md">
                                {item.price}€
                              </h3>
                            </div>
                          </div>

                          <div
                            className="item-quantity-ctn w-1/3
                          text-xl lg:text-3xl flex items-center justify-center"
                          >
                            <div
                              className="item-quantity
                             flex items-center justify-between w-1/2
                               border-sky-500 border-2 rounded-md"
                            >
                              <AiOutlineMinus className="text-white" />
                              <input
                                type="number"
                                defaultValue={1}
                                readOnly={true}
                                className="text-white bg-Navbar-grey outline-none w-2/6 cursor-default "
                              />
                              <AiOutlinePlus className="text-white" />
                            </div>
                          </div>

                          <div className="item-price-ctn flex items-center justify-center w-1/3">
                            <div className="item-gesamt-price flex justify-center">
                              <h4 className="text-4xl text-white">€</h4>
                            </div>
                          </div>
                        </li>
                        <div className=" border-b border-white/80 w-full lg:w-3/4 text-left"></div>{" "}
                      </>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          <Overview
            totalCost={totalCost}
            handleBuyClick={handleBuyClick}
            cartItems={cartItems}
          />
        </div>
      </div>
    </>
  )
}

export default Cart
