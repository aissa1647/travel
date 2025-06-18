import React from "react";

function Guide() {
  return (
    <div className="mt-50bg-amber-200 mt-50 space-y-12">
      <div className="flex items-center justify-between max-lg:flex-col max-lg:justify-start space-y-3.5  ">
        <div className="flex flex-col space-y-6 relative ">
          <img src="camp.svg" className="w-10 absolute top-[-36]" alt="" />
          <p className="text-[#30ac59] text-xl">WE ARE HER FOR YOU</p>
          <h1 className="text-5xl font-bold">
            Guide You <br /> to Eeasy Path
          </h1>
        </div>
        <div >
          <p className="text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Commodi rem dignissimos obcaecati sapiente explicabo adipisci
             quae qui omnis sed. Labore exercitationem quibusdam ea illo
            saepe  illum cumque pariatur debitis numquam.
          </p>
        </div>
      </div>
      <div className=" relative ">
        <div>
          <img src="boat.png" className="rounded-4xl" alt="" />
        </div>
        <div className="flex items-center gap-3 bg-white top-20 left-1/14 rounded-3xl px-3 py-6  absolute">
          <img src="meter.svg" alt="" />
          <div className="flex flex-col gap-10 items-start">
            <div className="flex flex-col  gap-2">
              <div className="flex items-center gap-14">
                <p className="text-6 text-gray-400">Destination</p>
                <span className="text-green-500 font-semibold">48min</span>
              </div>
              <p className="font-semibold text-2xl">Aguas Calients</p>
            </div>
            <div className="space-y-1">
              <p className="text-6 text-gray-400">Start Track</p>
              <p className="font-semibold text-2xl">Wonerejo pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
