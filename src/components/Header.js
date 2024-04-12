import React from 'react'
import Robo from '../assets/Robo.png'
import Vector from '../assets/Vector.png'
const Header = () => {
  return (
    <div className='flex justify-between  bg-slate-200 py-4 px-6'>
        <div className='flex  gap-3'>
           <img src={Robo} height={70} width={70}/>
           <div className='flex flex-col'>
                 <div className='flex gap-1'>
                    <p className='text-3xl text-sky-600 font-semibold'>Timpu</p>
                    <img src={Vector} height={28} width={28}/>
                 </div>
                 <p className='lg:text-2xl text-sky-600  sm:text-xl'>Chat assistant</p>
           </div>
        </div>

        <div className='flex items-center  gap-1 self-end'>
            <div className=' h-4 w-4 border rounded-full bg-green-400'></div>
            <p className='text-2xl text-sky-600 '>Online</p>
        </div>
       
    </div>
  )
}

export default Header