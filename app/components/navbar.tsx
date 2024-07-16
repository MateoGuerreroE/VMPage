import React from "react";
import ResponsiveMenu from "./responiveMenu";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full">
      <div className="bg-black bg-opacity-70 min-h-[150px] max-h-[150px] flex p-[3vh] justify-between">
        <div className="flex flex-col justify-center gap-2">
          <img src="main_logo.svg" alt="main logo" className="w-[24vh] my-4" />
          <div className="hidden">
            <img src="fb_logo.svg" alt="facebook" className="w-[30px]" />
            <img src="lin_logo.svg" alt="facebook" className="w-[30px]" />
            <img src="x_logo.svg" alt="facebook" className="w-[30px]" />
          </div>
        </div>
        <div className="w-[20%] flex justify-center items-center">
          <ResponsiveMenu />
        </div>
      </div>
    </nav>
  );
}
