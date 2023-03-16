import React from "react";

const FilterSectionTouch = () => {
  return (
    <>
    <div className=" border border-white h-10 flex items-center lg:hidden cursor-pointer text-lg">
          <select className="w-full outline-none border-none bg-transparent text-white font-semibold cursor-pointer">
            <option className="bg-black font-semibold">Relevanz</option>
            <option className="bg-black font-semibold" >Preis(absteigend)</option>
            <option className="bg-black font-semibold" >Preis(aufsteigend)</option>
          </select>
        </div>

        <div className=" border border-white h-10 flex items-center lg:hidden cursor-pointer">
          <h2 className="text-white font-semibold text-lg text-left ml-4">
            Filter
          </h2>
          <i className="bx bx-filter  text-white text-4xl"></i>
        </div>
    </>
  )
};

export default FilterSectionTouch;