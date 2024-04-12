import React from 'react'
import Vector from '../assets/Vector.png'
import { SlArrowRight } from "react-icons/sl";
import Bag from '../assets/Bag.png'
const BagCard = () => {
  return (
    <div className='max-w-fit ml-6 hover:scale-110 duration-300 cursor-pointer '>      
         <div className='flex flex-col gap-2 bg-gradient-to-br from-sky-600 to-sky-200 max-w-fit  rounded-2xl   mt-6  p-3 '>
              <div className='flex gap-4 bg-white p-2 rounded-2xl'>
                          <img src={Bag} height={120} width={120}/>
                          <div className='flex flex-col justify-center gap-3'>
                                          <div className='flex gap-2 '>
                                            <p className='font-semibold text-3xl '>Bags on Timpu</p>
                                            <img src={Vector} height={24} width={24}/>
                                          </div>

                                          <div className='flex items-center justify-between  pr-3 '>
                                              <p className='text-base text-gray-400'>1123 products</p>
                                              <SlArrowRight/>
                                          </div>
                          </div>
              </div>


             <div className='text-xl'>
                   <p>Or set filter and help us choose the </p>
                   <p>best bag for you.</p>
             </div>
                   
             
             

         </div>
         <p className='pt-2'>4:48 PM</p>
    </div>
    
    
  
  )
}

export default BagCard