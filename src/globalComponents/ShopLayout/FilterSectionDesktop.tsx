import React, { useState, useRef } from "react"


const FilterSectionDesktop:React.FC= () => {
  
 
  

  return (
    <>
      <h3 className="hidden lg:block text-white font-bold text-3xl">Filter</h3>
      <div className="hidden lg:block border-b border-white/80 w-1/2 mx-auto "></div>{" "}
      {/* Line Break*/}
      {/* Filter Options */}
      <div
        className="filter box
       hidden flex-col  lg:flex"
      >
     

        <div
          className="options-checkboxes
           hidden lg:flex flex-row items-start gap-5"
         
        >
          <div
            className="checkbox 
          flex gap-5"
          >
            <button type="button" className=" text-white font-semibold text-lg  py-2 px-2 ring-2 ring-sky-500 rounded hover:bg-white hover:text-black">
            </button>
          </div>

          <div
            className="checkbox 
          flex gap-5"
          >
            <button type="button" className=" text-white font-semibold text-lg  py-2 px-2 ring-2 ring-sky-500 rounded hover:bg-white hover:text-black">
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block border-b border-white/80 w-1/2 mx-auto "></div>{" "}
      {/* Line Break*/}
      <div
        className="form 
      hidden lg:flex flex-col mt-10"
      >
       
      </div>
    </>
  )
}

export default FilterSectionDesktop