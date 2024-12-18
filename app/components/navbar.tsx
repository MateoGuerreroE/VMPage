import React from "react";
import MobileMenu from "./mobileMenu";
import ResponsiveMenu from "./responsiveMenu";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full flex justify-center bg-black bg-opacity-90 z-50">
      <div className="w-full max-w-[1500px] h-full flex px-[2vh] lg:px-[50px] pt-5 pb-2 2xl:pb-4 justify-between">
        <div className="flex flex-col justify-center gap-2 w-[80%]">
          <img
            src="main_logo.svg"
            alt="main logo"
            className="w-[30vh] max-w-[250px] my-7 lg:m-0 lg:py-3 lg:w-[25vh] xl:w-[21vh]"
          />
          <div className="hidden lg:flex w-full">
            <ResponsiveMenu />
          </div>
        </div>
        <div className="hidden lg:flex gap-4 items-end">
          <img
            src="lin_logo.svg"
            alt="linkedin"
            className="w-[2.5vh] max-w-[30px] h-[60%]"
          />
          <img
            src="fb_logo.svg"
            alt="facebook"
            className="w-[2.5vh] max-w-[30px] h-[60%]"
          />
          <img
            src="x_logo.svg"
            alt="x"
            className="w-[2.5vh] max-w-[30px] h-[60%]"
          />
        </div>
        <div className="w-[20%] flex justify-center items-center lg:hidden overflow-hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
