import React from "react";
import { Campe } from "./data";

function Camp() {
  return (
    <div className="flex max-lg:flex-col gap-6 mb-7 relative">
      {Campe.map((cmp, index) => (
        <div key={index} className="relative">
          <div className=" rounded-3xl">
            <img src={cmp.img} className="rounded-3xl" alt="" />
          </div>

          <div className="absolute top-7 left-11 flex items-center gap-3 ">
            <img
              src={cmp.icon}
              className="bg-[#30ac59] w-13  rounded-full p-4 "
              alt=""
            />
            <div className="flex flex-col gap-1 text-amber-50 ">
              <p className="font-semibold ">{cmp.title}</p>
              <p className="text-7 text-gray-300">{cmp.mintitle}</p>
            </div>
          </div>
          <div className="absolute  gap-3 flex items-center bottom-7 left-7 text-white ">
            <div className="-space-x-8 flex">
              {cmp.icons.map((icns) => (
                <img src={icns} className="scale-70  " alt="" />
              ))}
            </div>
            <p className="font-bold text-xl">{cmp.members}</p>
          </div>
        </div>
      ))}
      <div className="bg-[#30ac59] text-white rounded-4xl bottom-[-100] right-1/4 max-lg:static absolute lg:w-[30%]  ">
        <div className="relative py-6 px-4 sm:py-8 sm:px-6 group space-y-5 sm:space-y-7  transition-all duration-500 ease-in-out">
          {/* أيقونة الاقتباس - تظهر فقط على الشاشات الكبيرة */}
          <img
            src="quote.svg"
            className="absolute bottom-2.5 right-[-3] opacity-0 sm:group-active:opacity-100 transition-opacity duration-300 hidden sm:block"
            alt="Quote icon"
          />

          {/* العنوان الرئيسي */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-300 sm:group-active:text-5xl group-active:tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-green-900">
              Feeling Lost
            </span>
            and <br className="hidden sm:block" />
            Not know The <br className="hidden sm:block" />
            Way?{" "}
            <span className="text-2xl group-active:hidden underline cursor-pointer">
              click her :)
            </span>
          </h1>

          {/* النص المخفي - يظهر فقط على الجوال عند الهوفر */}
          <p
            className="
    text-gray-600
    sm:text-gray-300
    block 
    opacity-0
    max-h-0
    overflow-hidden
    group-active:opacity-100
    group-active:max-h-[300px]
    sm:group-active:max-h-[500px]
    transition-all
    duration-700
    ease-[cubic-bezier(0.33,1,0.68,1)]
    bg-white/90
    sm:bg-transparent
    p-3
    sm:p-0
    rounded-lg
    mt-2
  "
          >
            Starting from the axilies of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large
            that's why we are here for those of you who want to start an
            adventure
          </p>
        </div>
      </div>
    </div>
  );
}

export default Camp;
