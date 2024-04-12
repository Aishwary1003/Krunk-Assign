import React from 'react'

const Chats = () => {
  return (
    <div className='flex flex-col py-14 px-6 gap-8'>
        <div  className='max-w-fit  hover:scale-110 duration-300 cursor-pointer'>
            <div className='max-w-fit bg-gradient-to-r from-sky-400 to-sky-200 rounded-2xl px-2 py-2 text-xl '>
               <p >Hi Sam! I am your personal  </p>
               <p>shopping assistant , how can i</p>
               <p >help you today ?</p>
            </div>
           
            <p className='pt-2'>4:45 PM</p>
        </div>



        <div className='max-w-fit self-end hover:scale-110 duration-300 cursor-pointer' >
            <div className='max-w-fit bg-green-200  rounded-2xl px-2 py-2 text-xl'>
               <p>I am looking for a hand bag,  </p>
               <p>with long strap .</p>
              
            </div>
           
            <p className='text-end pt-2 '>4:46 PM</p>
        </div>

    </div>
  )
}

export default Chats