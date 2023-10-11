import React, { useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import heroMobile from "../images/image-hero-mobile.jpg";
import heroDesktop from "../images/image-hero-desktop.jpg";
import closeMenu from "../images/icon-close-menu.svg";

function Nav() {
  const [mobile, setMobile] = useState(false);
  const handleDrop = () => {
    setMobile(!mobile);
  };
  return (
    <>
      {/* mobile */}
      <div className="flex justify-between md:hidden">
        <section>
          <img src={logo} alt="/" className="absolute z-10 pt-3" />
        </section>
        <section onClick={handleDrop}>
          {mobile ? (
            <img src={closeMenu} alt="/" className="absolute z-10 -ml-5 pt-3" />
          ) : (
            <img src={hamburger} alt="/" className="absolute z-10 -ml-5 pt-3" />
          )}
        </section>
        <ul
          className={
            mobile
              ? "absolute z-10  text-black  w-[90%] bg-white shadow-2xl rounded-xl font-medium text-xl text-start px-4 mt-10 h-[200px] content-center ml-[5%] flex flex-col "
              : "hidden"
          }
        >
          <li className="py-3 hover:cursor-pointer">About</li>
          <div className="h-[1px] w-[100%] bg-gray-400"></div>
          <li className="py-3 hover:cursor-pointer">Discover</li>
          <div className="h-[1px] w-[100%] bg-gray-400"></div>
          <li className="py-3 hover:cursor-pointer">Get Started</li>
          <div className="h-[1px] w-[100%] bg-gray-400"></div>
        </ul>
      </div>
      {/* desktop */}
      <div className="hidden md:flex md:justify-between ">
        <section>
          <img src={logo} alt="/" className="absolute z-10 pt-3" />
        </section>
        <div className="absolute z-10 ml-[60%]">
          <section className="flex  text-white text-xl">
            <p className="mx-4 hover:cursor-pointer pt-3">About</p>
            <p className="mx-4 hover:cursor-pointer pt-3">Discover</p>
            <p className="mx-4 hover:cursor-pointer pt-3">Get Started</p>
          </section>
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden relative">
        <section className="">
          <img src={heroMobile} alt="/" />
        </section>
      </div>
      {/* desktop */}
      <div className="hidden md:flex relative">
        <section className="">
          <img src={heroDesktop} alt="/" />
        </section>
      </div>
    </>
  );
}

export default Nav;
