import React from 'react'
import { ImArrowRight } from "react-icons/im";
import Clip from "../assets/Clip.png"
import FootLogo from "../assets/FootLogo.png"
const Footer = () => {
  return (
    <div className='bg-gradient-to-br from-slate-300 to-slate-200 pt-4'>
        <div className='flex gap-1 items-center max-w-fit mx-auto  '>
          <div className='relative flex items-center '>
           <input type='text' placeholder='Type your message' className='py-3 pr-12 rounded-xl '/>
            <img src={Clip} className='absolute right-4  '/>
          </div>
            
            <button className='bg-sky-600 py-4 px-6 rounded-xl  hover:translate-x-1 transition hover:text-white   cursor-pointer duration-300'><ImArrowRight/></button>
        </div>

        <div className='flex items-center justify-center '>
            <p className='text-slate-400'>Powered by <span className='text-slate-600'>Krunk.ai</span></p>
            <img src={FootLogo} height={60}  width={60}/>
       </div>
    </div>
  )
}

export default Footer