/* eslint-disable no-restricted-globals */
import React, { useState, useRef } from "react"
import { useParams } from "react-router-dom"
import products from "../../app/products.json"
import { FaChevronUp } from "react-icons/fa"
import { BsFillCartPlusFill } from "react-icons/bs"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addItem } from "../../features/Cart/CartReducer"
import { RootState } from "../../app/store"
import { Description } from "./productComponents/Description"
import { Item } from "../../features/Cart/CartReducer"



const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(
    (state: RootState) => state.CartReducer.items
  )

  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>()
  const product = products.find((p: any) => p.id === id)

  if (!product) {
    return <div>Product not found</div>
  }

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen)
  }

  const handleAddItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newItem: Item = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageSource: product.imageSrc
    
    }

    const existingItem: Item | undefined = cartItems.find(
      (item) => item.id === newItem.id
    )
    if (existingItem) {
      alert("Product already in cart")
    } else {
      dispatch(addItem(newItem))
    }
  }
  return (
    <div className="product-page bg-black min-h-screen">
      <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center py-20 h-3/4 ">
        <div className="grid-item-2 image-ctn flex flex-col items-center w-screen lg:w-auto justify-center  ">
          <h1 className="text-2xl font-bold product-name text-white">
            {product.name}{" "}
          </h1>
          <img
            src={product.imageSrc}
            alt={product.name}
            title={product.name}
            className="h-[20rem]"
          />
        </div>
        <div className="grid-item-2 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{product.price}€</h1>
          <div className=" border-b border-white/80 lg:w-1/2 w-full text-left"></div>{" "}
          <button
            className="text-black font-bold text-xl bg-sky-500 py-4 rounded px-10
        hover:bg-white hover:text-black active:scale-110 ease-in-out flex items-center gap-3
        "
            onClick={handleAddItem}
          >
            <BsFillCartPlusFill />
            In den Einkaufswagen
          </button>
        </div>
      </div>
      <div className=" border-b border-white/80  w-full text-left mt-10 mb-5"></div>{" "}
      <Description />
      </div>
      
    
  )
}

export default ProductPage
