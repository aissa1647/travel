import React from 'react'

function Getapp() {
  return (
    <div className="flex max-lg:flex-col lg:justify-center items-center gap-40 max-lg:gap-4 max-lg:rounded-2xl rounded-4xl h-[600px] max-lg:h-full overflow-hidden max-lg:overflow-visible relative my-40 w-[80%] max-lg:w-full mx-auto max-lg:bg-[#292c27]">
      <img src="pattern.png" className=" z-[-1] max-lg:hidden absolute " alt="" />
      <div className="space-y-15 max-sm:space-y-6 text-white py-6 ">
        <h1 className="text-6xl max-lg:text-4xl font-bold">
          Get For <br /> Free Now!
        </h1>
        <p className="text-gray-400">
          Avalaible in iOS and Android,Download now!
        </p>
        <div className="flex max-lg:flex-col max-lg:gap-5 gap-10 w-full ">
          <div className="flex max-lg:gap-6 gap-7 hover:scale-120 transition-all  rounded-4xl bg-white text-[#30ac59] py-2 px-7 ">
            <img src="apple.svg" className='w-7' alt="" />
            <button className='font-semibold'>Play App </button>
          </div>
          <div className="flex max-sm:gap-6 gap-7 rounded-4xl hover:scale-120 transition-all bg-[#292c27] border-1 border-amber-50 border-solid py-2 px-7">
            <img src="android.svg" className='w-7' alt="" />
            <button className='font-semibold'> App Store</button>
          </div>
        </div>
      </div>
      <div>
        <img src="phones.png" className='hover:scale-70 max-sm:scale-80 transition-all' alt="" />
      </div>
    </div>
  );
}

export default Getapp
