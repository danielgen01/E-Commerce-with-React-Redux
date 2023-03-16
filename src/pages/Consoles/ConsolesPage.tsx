import React from "react"
import ShopLayout from "../../globalComponents/ShopLayout/ShopLayout"


const ConsolesPage:React.FC= () => {
  return (
    <>
      <div className=" bg-black/90 h-screen">
        <ShopLayout category={"consoles"} />
      </div>
    </>
  )
}

export default ConsolesPage