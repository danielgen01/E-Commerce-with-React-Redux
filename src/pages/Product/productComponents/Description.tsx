import React, { useState } from "react"
import { FaChevronUp } from "react-icons/fa"

export const Description: React.FC = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false)

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen)
  }
  return (
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
        style={{
          display: isDescriptionOpen ? "flex" : "none",
        }}
      >
        <h2 className="text-white text-xl font-medium text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum sed
          doloremque omnis nihil. Velit nostrum fugit, quibusdam magnam sint
          esse qui, corrupti adipisci tempora accusamus earum animi est ducimus!
        </h2>
        <h2 className="text-white text-xl font-medium text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum sed
          doloremque omnis nihil. Velit nostrum fugit, quibusdam magnam sint
          esse qui, corrupti adipisci tempora accusamus earum animi est ducimus!
        </h2>
        <h2 className="text-white text-xl font-medium text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum sed
          doloremque omnis nihil. Velit nostrum fugit, quibusdam magnam sint
          esse qui, corrupti adipisci tempora accusamus earum animi est ducimus!
        </h2>
      </div>
    </div>
  )
}


