import React, { useState, useRef } from "react"
import { useParams } from "react-router-dom"
import products from "../../app/products.json"
import { FaChevronUp } from "react-icons/fa"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import { BiCartAdd } from "react-icons/bi"



type CartItem = {
  title: string
  price: number
  quantity: number
  image: string
  id: string
}

const ProductPage: React.FC = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false)

  const { id } = useParams<{ id: string }>()
  const product = products.find((p: any) => p.id === id)

  if (!product) {
    return <div>Product not found</div>
  }

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen)
  }

  
  return (
    <div className="product-page">
      <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-20 h-3/4">
        <div className="grid-item-2 image-ctn flex flex-col items-center w-screen lg:w-auto justify-center  ">
        <h1 className="text-2xl font-bold product-name text-white">{product.name} </h1>
          <img
            // ref={imageRef}
            src={product.imageSrc}
            alt={product.name}
            title={product.name}
            className="h-[20rem]"
          />
        </div>
        <div className="grid-item-2 flex flex-col gap-5 items-center justify-center">
          
          <h1 className="text-4xl font-bold text-white">{product.price}€</h1>
          <div className=" border-b border-white/80 lg:w-1/2 w-full text-left"></div>{" "}
         
            {/* <div className="item-quantity flex items-center justify-center gap-5 text-4xl h-full  text-white  rounded">
              <AiOutlineMinusCircle
                className=" cursor-pointer rounded"
                // onClick={decreaseQuantity}
              />
              <input
                type="number"
                value={product.quantity}
                className=" cursor-default w-[100px] text-center outline-none bg-black"
                readOnly={true}
              />
              <AiOutlinePlusCircle
                className="bx bxs-plus-circle text-white cursor-pointer"
                // onClick={increaseQuantity}
              />
            </div> */}
            
              <button
                className="text-black font-bold text-xl bg-sky-500 py-4 rounded px-10
        hover:bg-white hover:text-black active:scale-110 ease-in-out
        "
                // onClick={addCart}
              >
                In den Einkaufswagen
              </button>
            
          
        </div>
      </div>
      <div className=" border-b border-white/80  w-full text-left mt-10 mb-5"></div>{" "}

      <div className="product-decription-ctn ">
        <div
          className="chevron flex items-center gap-2 mx-1 cursor-pointer justify-center"
            onClick={toggleDescription}
        >
          <FaChevronUp
            className={`text-white text-xl lg:text-3xl  duration-500 ${
              isDescriptionOpen ? "rotate-180" : ""
            }`}
          />
          <h2 className="text-white text-xl lg:text-4xl font-bold">
            Produktbeschreibung
          </h2>
        </div>
        <div
          className="product-description flex flex-col mt-5 gap-5"
          style={{ display: isDescriptionOpen ? "flex" : "none" }}
        >
          <h2 className="text-white text-xl font-medium text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum
            sed doloremque omnis nihil. Velit nostrum fugit, quibusdam magnam
            sint esse qui, corrupti adipisci tempora accusamus earum animi est
            ducimus!
          </h2>
          <h2 className="text-white text-xl font-medium text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum
            sed doloremque omnis nihil. Velit nostrum fugit, quibusdam magnam
            sint esse qui, corrupti adipisci tempora accusamus earum animi est
            ducimus!
          </h2>
          <h2 className="text-white text-xl font-medium text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum
            sed doloremque omnis nihil. Velit nostrum fugit, quibusdam magnam
            sint esse qui, corrupti adipisci tempora accusamus earum animi est
            ducimus!
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
