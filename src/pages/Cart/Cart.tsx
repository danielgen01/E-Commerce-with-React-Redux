import React, { useEffect } from "react"
import { Link } from "react-router-dom"


type CartItem = {
  title: string
  price: number
  quantity: number
  image: string
}

const Cart: React.FC = () => {
    
//   useEffect(() => {
//     if (window.location.pathname === "/Cart" && cartItems.length < 1) {
//       setTimeout(() => {
//         window.location.href = "/"
//       }, 1000)
//     }
//   }, [cartItems])

//   const handleRemoveFromCart = (index: number) => {
//     const updatedCart = cartItems.filter((product: any, i: any) => i !== index)
//     setCartItems(updatedCart)
//     setCartCount((prevCount: number) => prevCount -=1);
//   }

//   const increaseQuantity = (item: CartItem) => {
//     if (item.quantity < 5) {
//       item.quantity = Number(item.quantity) + 1
//       setCartItems((prevCartItems: any) => [...prevCartItems])
//     }
//   }

//   const decreaseQuantity = (item: CartItem) => {
//     if (item.quantity >= 2) {
//       item.quantity -= 1
//       setCartItems((prevCartItems: any) => [...prevCartItems])
//     }
//   }

  function handleBuyClick() {
    alert("This shop is unfortunately not a real business")
  }

  return (
    <div className="cart-body bg-black min-h-screen">
      <div className="cart-headline h-[10%] font-bold flex justify-center">
        <h1 className="text-3xl text-white">Dein Warenkorb</h1>
      </div>

      <div className="cart-top-buttons h-[20%] mt-10 w-screen flex flex-col justify-center items-center gap-5 lg:items-end">
        <div className="button-1 w-full flex justify-center lg:w-1/4">
          <button
            className=" bg-sky-500 w-5/6 py-1 text-black text-lg flex items-center justify-center rounded font-bold hover:opacity-90"
            onClick={handleBuyClick}
          >
            WEITER ZUR KASSE{" "}
            <i className="bx bx-right-arrow-alt text-black text-2xl"></i>
          </button>
        </div>

        <div className="button-2 w-full flex justify-center lg:w-1/4">
          <Link
            to="/"
            className="w-5/6 py-1 text-black text-lg flex items-center justify-center rounded font-bold hover:opacity-90 ring-2 ring-white"
          >
            <button className=" text-md flex items-center justify-center rounded text-white font-bold hover:opacity-90">
              WEITER SHOPPEN{" "}
            </button>
          </Link>
        </div>
      </div>

      <div className="grid-wrapper grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        <div className="h-[50%] cart-items xl:col-span-3 lg:col-span-2 ">
         {/*  <ul className="flex flex-col mx-1 gap-5 itemscolumn lg:items-center">
            {cartItems.map((item: any, index: any) => (
              <>
                <li
                  key={Math.floor(Math.random() * 20000000)}
                  className="flex flex-row items-center py-5 single-itemRow w-auto lg:w-3/4 h-auto  gap-2"
                >
                  <div className="image-div w-3/6 h-full flex flex-col gap-5 justify-center items-center rounded">
                    <img
                      src={item.image}
                      className="w-full h-auto lg:w-2/3"
                      alt={item.title}
                      title={item.title}
                    />
                    <div className="product-details  flex flex-col justify-center text-center gap-2">
                    <h2 className="text-white text-md lg:text-xl font-semibold ">
                      {item.title}
                    </h2>
                    <h2
                      className=" text-sm lg:text-xl cursor-pointer text-sky-500 underline hover:font-bold"
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      Entfernen
                    </h2>
                  </div>
                  <div className=" flex justify-center">
                    <h3 className="text-white font-semibold text-md">
                      {item.price}
                    </h3>
                  </div>
                  </div>
                  
                 
                  <div className="item-quantity flex items-center justify-center gap-1 text-3xl w-1/6">
                    <i
                      className="bx bxs-minus-circle text-white cursor-pointer"
                      onClick={() => decreaseQuantity(item)}
                    ></i>
                    <h3 className="text-white">{item.quantity}</h3>
                    <i
                      className="bx bxs-plus-circle text-white cursor-pointer"
                      onClick={() => increaseQuantity(item)}
                    ></i>
                  </div>
                  <div className="delete-btn w-[20%] flex justify-start"></div>
                </li>
                <div className=" border-b border-white/80 w-full lg:w-3/4 text-left"></div>{" "}
              </>
            ))}
          </ul> 
        </div>*/}

        <div className="übersicht bg-[#1d2021] mx-5 h-[300px] mt-10 rounded">
          <div className="übersicht content mx-5 flex flex-col gap-5 mt-5">
            <div className="übersicht-header flex justify-between items-center text-xl font-semibold">
              <h1 className="text-white">ÜBERSICHT</h1>
              <h1 className="text-white">0 ARTIKEL</h1>
            </div>
            <div className=" border-b border-white/80 w-fulltext-left"></div>{" "}
            <div className="flex justify-between text-lg font-medium">
              <h2 className="text-white">Zwischensumme</h2>
              <h2 className="text-white">0€</h2>
            </div>
            <div className=" border-b border-white/80 w-full text-left"></div>{" "}
            <div className="gesamtsumme flex justify-between font-bold text-xl">
              <h2 className="text-white">Gesamtsumme</h2>
              <h2 className="text-white">0€</h2>
            </div>
            <div className="order-now flex justify-center "></div>
            <button
              className="bg-sky-500 py-4 font-bold text-lg rounded hover:opacity-90"
              onClick={handleBuyClick}
            >
              JETZT BESTELLEN
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Cart