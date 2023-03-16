import React from "react"
import ShopLayout from "../../globalComponents/ShopLayout/ShopLayout"


const LaptopsPage:React.FC= () => {
  return (
    <>
      <div className=" bg-black/90 h-screen">
        <ShopLayout category={"laptops"}/>
      </div>
    </>
  )
}

export default LaptopsPage