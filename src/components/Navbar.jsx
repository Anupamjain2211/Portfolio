import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menue, setMenue] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact Me",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <div>
              <h1 className="font-semibold text-xl curson-pointer">
                Anupam <span className="text-blue-500 text-2xl">Jain</span>
              </h1>
              <p className="text-sm">Web Developer</p>
            </div>
          </div>

          {/* Desk Nav */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200  cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
            <div onClick={() => setMenue(!menue)} className="md:hidden">
              {menue ? <IoCloseSharp size={28} /> : <TiThMenu size={24} />}
            </div>
          </div>
        </div>
        {/* Mbile Nav */}
        {menue && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
