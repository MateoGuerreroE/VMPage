import React from "react";
import MobileMenu from "./mobileMenu";
import ResponsiveMenu from "./responsiveMenu";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full flex justify-center bg-black bg-opacity-70">
      <div className="w-full min-h-[150px] h-[150px] max-w-[1500px] lg:h-[200px] flex p-[3vh] lg:px-[50px] lg:py-[20px] justify-between">
        <div className="flex flex-col justify-center gap-2 w-[80%]">
          <img
            src="main_logo.svg"
            alt="main logo"
            className="w-[24vh] lg:w-[250px] my-4"
          />
          <div className="hidden lg:flex h-[50px] w-full">
            <ResponsiveMenu />
          </div>
        </div>
        <div className="hidden lg:flex gap-4">
          <img src="lin_logo.svg" alt="linkedin" className="w-[30px]" />
          <img src="fb_logo.svg" alt="facebook" className="w-[30px]" />
          <img src="x_logo.svg" alt="x" className="w-[30px]" />
        </div>
        <div className="w-[20%] flex justify-center items-center lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
