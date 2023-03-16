import React from "react"
import ShopLayout from "../../globalComponents/ShopLayout/ShopLayout"


const GadgetsPage:React.FC= () => {
  return (
    <>
      <div className=" bg-black/90 h-screen">
        <ShopLayout category={"gadgets"} pageTitle="Gadgets"/>
      </div>
    </>
  )
}

export default GadgetsPage