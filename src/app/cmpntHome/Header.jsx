import { User, UserRoundX } from "lucide-react";
import React from "react";
import { Nav, navItems } from "./data";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between items-center h-[4rem]  px-2">
      <h1 className="text-3xl font-bold">
        Hi<span className="text-[#30ac59]">link.</span>
      </h1>
      <div className="flex space-x-9 max-sm:space-x-4 mr-2">
        {navItems.map((nav) => (
          <Link
            href={
              nav.name === "Home"
                ? "/"
                : nav.name === "Services"
                ? "/servicess"
                : nav.name === "Pricing"
                ? "/pricing"
                : nav.name === "Contact Us"
                ? "/contect"
                : nav.name === "How Hilink Works?"
                ? "/how"
                : "/"
            }
          >
            <span className="text-gray-400 cursor-pointer hover:text-black hover:underline transition-colors max-lg:hidden">
              {nav.name}
            </span>
            <span className="relative group text-gray-400 cursor-pointer hover:text-black hover:underline transition-colors lg:hidden">
              {nav.icon}
              <span className="absolute transition-all hidden rounded-sm group-hover:block bg-black w-[full] text-gray-200 px-2 py-0.5 ">
                {nav.name}
              </span>
              
            </span>
          </Link>
        ))}
      </div>

      <div className="bg-[#282b26] max-sm:hidden  rounded-3xl py-3 px-4 gap-2 text-white flex ">
        <img src={'user.svg'} className="text-9" />
        <p className="text-2">Log in</p>
      </div>
      <div className="bg-[#282b26] sm:hidden  rounded-3xl py-3 px-4 gap-2 text-white flex ">
        <UserRoundX  className="text-9" />
      </div>
    </div>
  );
}

export default Header;
