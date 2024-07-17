import React from "react";
import MobileMenu from "./mobileMenu";
import ResponsiveMenu from "./responsiveMenu";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full flex justify-center bg-black bg-opacity-70 h-[150px] max-h-[200px] lg:h-[15vh]">
      <div className="w-full max-w-[1500px] h-full flex p-[3vh] lg:px-[50px] lg:py-[1vh] justify-between">
        <div className="flex flex-col justify-center gap-1 xl:gap-[10%] w-[80%]">
          <img
            src="main_logo.svg"
            alt="main logo"
            className="w-[50vh] max-w-[250px] my-7 lg:m-0 lg:py-3 lg:w-[25vh] xl:w-[21vh]"
          />
          <div className="hidden lg:flex w-full lg:h-[25%]">
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
        <div className="w-[20%] flex justify-center items-center lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
