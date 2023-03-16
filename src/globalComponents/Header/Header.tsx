import React from "react"

const Header:React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-11 flex justify-center items-center">
      <h2 className="text-white font-medium text-center">
        Ab 49,99€ Warenwert sparst du dir die Versandkosten
      </h2>
    </div>
  )
}

export default Header