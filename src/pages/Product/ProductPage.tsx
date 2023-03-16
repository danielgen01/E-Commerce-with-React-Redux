import React, { useState, useRef } from "react"
import { useParams } from "react-router-dom"
import products from "../../app/products.json"
import { FaChevronUp } from "react-icons/fa"
import {BsFillCartPlusFill} from "react-icons/bs"
import { useAppDispatch,useAppSelector } from "../../app/hooks"
import { addItem } from "../../features/Cart/CartReducer"




interface Item {
  id: string
  name: string
  price: number
  imageSource: string
}

const ProductPage: React.FC = () => {

  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state: any) => state.cart.items)

  const handleAddItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const newItem: Item = {
      id: target.dataset.id!,
      name: target.dataset.name!,
      price: parseInt(target.dataset.price!),
      imageSource: target.dataset.image!
    };
    dispatch(addItem(newItem));
  }
  


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
      <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-20 h-3/4 ">
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
         
            
              <button
                className="text-black font-bold text-xl bg-sky-500 py-4 rounded px-10
        hover:bg-white hover:text-black active:scale-110 ease-in-out flex items-center gap-3
        "
                onClick={handleAddItem}
              ><BsFillCartPlusFill />
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
