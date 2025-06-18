import React from 'react'
import { FEATURES } from "./data";
function Featurs() {
  return (
    <div className='flex flex-col items-center space-y-15 mt-50 relative w-[90%]  '>
      <img src="feature-bg.png" className='absolute  top-20 left-1/5 z-[-1] ' alt="" />
      <div className='relative'>
        <h1 className='text-5xl max-lg:text-4xl font-bold'>Our Features</h1>
        <img src="camp.svg" className='w-13 max-lg:w-10 absolute top-[-39] left-0' alt="" />
      </div>
      <div className='flex max-lg:flex-col  items-center  gap-6 justify-center '>
        <div className='w-[50%] max-lg:w-[60%]'>
          <img src="phone.png" className='rotate-21 ml-56 max-lg:ml-0 hover:rotate-0 transition-all' alt="" />
        </div>
        <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-10 w-[50%] max-lg:w-full '>
          {FEATURES.map(futer=>
            <div className='space-y-4'>
              <img src={futer.icon} className={`${futer.variant==='orange'? 'bg-amber-600':'bg-[#30ac59]'}  w-19  rounded-full p-5.5 max-lg:w-14 max-lg:p-3.5 `} alt="" />
              <h1 className='text-4xl font-bold '>{futer.title}</h1>
              <p className='text-gray-600 '>{futer.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Featurs
