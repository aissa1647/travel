import React from "react";
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, Comunity, SOCIALS } from "./data";

function Footer() {
  return (
    <div className="mt-50">
      <div className="flex items-start justify-around ">
        <img src="hilink-logo.svg" alt="" />
        <div className="flex items-start gap-40 max-lg:flex-col max-lg:gap-15">
          {FOOTER_LINKS.map((link) => (
            <div className="grid grid-cols-1 gap-3">
              <h1 className="font-semibold text-xl">{link.title}</h1>
              {link.links.map((lnk) => (
                <p className="text-gray-500 hover:underline hover:text-blue-600 cursor-pointer">{lnk}</p>
              ))}
            </div>
          ))}
          {Comunity.map((section) => (
            <div key={section.title} className="grid grid-cols-1 gap-3">
              <h1 className="font-semibold text-xl">{section.title}</h1>
              {section.links.map((link, index) => (
                <p key={index} className="text-gray-500 hover:underline hover:text-blue-600 cursor-pointer">
                  {link}
                </p>
              ))}
            </div>
          ))}
          <div className="grid grid-cols-1 gap-3">
            <h1 className="font-semibold text-xl">
              {FOOTER_CONTACT_INFO.title}
            </h1>
            {FOOTER_CONTACT_INFO.links.map((contact, index) => (
              <p key={index} className="text-gray-500 hover:underline hover:text-blue-600 cursor-pointer">
                {contact.label}: <span className="text-black">{contact.value}</span>
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-3">
            <h1 className="font-semibold text-xl">{SOCIALS.title}</h1>
            <div className="flex gap-4">
              {SOCIALS.links.map((icon, index) => (
                <img className="cursor-pointer w-7"
                  key={index}
                  src={icon}
                  alt="Social icon"
                  width={24}
                  height={24}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-20  flex justify-center border-t-1 border-t-solid border-gray-300  ">
        <p className="py-15 text-gray-500   ">@ 2022 Hilink | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
