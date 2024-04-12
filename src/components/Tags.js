import React from 'react'

const Tags = () => {

    const btns=["Clutch","Fabric lining","Baggit","Multi","Clutch","Fabric lining","Baggit","Multi","Clutch","Fabric lining","Baggit","Clutch","Fabric lining","Baggit"]
    
  return (
    <div className='px-6'>
             <p className='text-gray-600 text-xl pb-4'>Popular tags for handbag</p>
            <div className='flex gap-10 overflow-x-auto hide-scrollbar '>
                    {btns.map((obj,index)=>{return <button  className='border-2 rounded-md border-blue-500  px-4 text-sky-400 bg-sky-200 hover:bg-slate-700     hover:bg-opacity-40 hover:translate-x-1 transition hover:text-white  cursor-pointer duration-300' key={index}>{obj}</button>})}
            </div>
    </div>
  )
}

export default Tags