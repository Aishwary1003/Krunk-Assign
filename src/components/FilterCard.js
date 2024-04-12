import React from 'react'
import Filt from "../assets/Filt.png"
import { RxCross2 } from "react-icons/rx";
const FilterCard = () => {
  return (
    <div className='px-6 flex flex-col gap-4 mt-4'>
          <div className='flex justify-between items-center '> 
            <p className='text-gray-500 text-xl'>Select filters</p>
            <div className='flex'>
                <img src={Filt} height={32} width={32}/>
                <p className='text-xl text-gray-600'>Filter</p>
            </div>
          </div>




          <div className='flex  gap-4  '>
                    <button className='flex items-center gap-1 rounded-md bg-gray-200 text-gray-600 px-2 py-1 hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-sky-500  cursor-pointer duration-300 '><p>Strap-Long</p> <RxCross2 /> </button>
                    <button className='flex items-center gap-1 rounded-md bg-gray-200 text-gray-600 px-2 py-1 hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-sky-500  cursor-pointer duration-300'><p>Colour</p> <RxCross2 /></button>
                    <button className='flex items-center gap-1 rounded-md bg-gray-200 text-gray-600 px-2 py-1 hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-sky-500  cursor-pointer duration-300'><p>Size</p> <RxCross2 /></button>
          </div>






          <div className='flex gap-4'>
                    <button className='flex items-center gap-1 rounded-md bg-gray-200 text-gray-600 px-2 py-1 hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-sky-500  cursor-pointer duration-300'><p>Brand</p> <RxCross2 /> </button>
                    <button className='flex items-center gap-1 rounded-md bg-gray-200 text-gray-600 px-2 py-1 hover:bg-opacity-40 hover:-translate-y-1 transition hover:text-sky-500  cursor-pointer duration-300'><p>Material</p> <RxCross2 /></button>
          </div>
    </div>
  )
}

export default FilterCard