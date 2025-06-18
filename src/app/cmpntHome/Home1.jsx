import {  Star, X } from "lucide-react";
import Image from "next/image";

function Home1() {
  return (
    <div className="flex items-center max-xl:flex-col justify-between max-xl:gap-10 mb-20">
      {/* النص والزر الجانبي */}
      <div className="space-y-10 max-xl:mt-20 flex flex-col w-full  xl:w-[40%]">
        {/* العنوان مع أيقونة المخيم */}
        <h1 className="space-y-4 text-6xl sm:text-7xl md:text-8xl font-bold relative">
          putuk truno
          <img 
            src="/camp.svg" 
            className="absolute top-[-12] left-[3] max-sm:top-[-18] max-sm:left-[0] max-sm:w-10 " 
             alt="Camp Icon" 
          />
        </h1>
        <h2 className="space-y-4 text-6xl sm:text-7xl md:text-8xl font-bold">Camp Area</h2>

        {/* الوصف */}
        <p className="text-gray-400 text-lg sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a in
          temporibus blanditiis quos sapiente impedit provident similique soluta,
          ut tempora dolor aliquid, nulla doloremque ab.
        </p>

        {/* التقييمات */}
        <div className="flex gap-3 items-center">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-amber-300 fill-amber-300" size={20} />
            ))}
          </div>
          <div className="flex gap-2.5">
            <p className="font-bold text-xl">198k</p>
            <p className="underline text-xl">Good Review</p>
          </div>
        </div>

        {/* الأزرار */}
        <div className="flex gap-6 flex-wrap">
          <button className="bg-green-500 text-xl text-white py-3 px-5 rounded-3xl font-bold hover:bg-green-600 transition">
            Download App
          </button>
          <button className="flex items-center gap-2 font-bold text-xl hover:text-green-500 transition">
            <img src="/play.svg" alt="Play Icon" />
            How we work?
          </button>
        </div>
      </div>

      {/* صورة الخلفية مع البطاقة العائمة */}
      <div className="w-full  xl:w-[60%] relative  ">
        {/* البطاقة العائمة */}
        <div className="flex flex-col bg-[#282b26]  sm:w-[60%] md:w-[40%] lg:w-[25%] p-4 rounded-3xl absolute top-20 left-80  shadow-xl z-10 max-lg:left-0">
          <div className="flex items-center justify-between">
            <p className="text-gray-500">Location</p>
            <X className="text-white cursor-pointer hover:text-red-400" size={20} />
          </div>
          <p className="text-xl max-lg:text-lg font-bold text-amber-50 mt-1">Aguas Calientes</p>

          <div className="flex gap-10 mt-4">
            <div className="flex flex-col gap-1">
              <p className="text-gray-500">Distance</p>
              <p className="text-xl max-lg:text-lg font-bold text-amber-50">178.26m</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray-500">Elevation</p>
              <p className="text-xl max-lg:text-lg font-bold text-amber-50">2.045km</p>
            </div>
          </div>
        </div>
 
        <div className="ml-20" >
           <img
          src="hero.png"
          className="w-full max-lg:scale-125 h-auto lg:ml-30 "
          alt="Camp Background"
        />
        </div>
       
      </div>
    </div>
  );
}

export default Home1
