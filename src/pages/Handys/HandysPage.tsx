import React from "react"
import ShopLayout from "../../globalComponents/ShopLayout/ShopLayout"


const HandysPage:React.FC= () => {
  return (
    <>
      <div className=" bg-black/90 h-screen">
        <ShopLayout category={"phones"}/>
      </div>
    </>
  )
}

export default HandysPage