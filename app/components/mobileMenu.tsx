"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export type MenuOptions = {
  [key: string]: string;
};

export default function MobileMenu() {
  const [isMenuOpen, switchMenu] = useState<boolean>(false);
  const [currentMenu, swichCurrentMenu] = useState<string>("Inicio");
  useEffect(() => {
    const currentPage = sessionStorage.getItem("page");
    swichCurrentMenu(currentPage ?? "Inicio");
  }, []);
  const router = useRouter();
  const options = [
    ["Inicio", "home"],
    ["Áreas Temáticas", "areas"],
    ["Actividades Interdisciplinarias", "actividades"],
    ["Biblioteca", "biblio"],
    ["Contacto", "contacto"],
  ];

  const onMenuClick = (val: string[]) => {
    router.push(`/${val[1]}`);
    sessionStorage.setItem("page", val[0]);
    swichCurrentMenu(val[0]);
    switchMenu(false);
  };
  return (
    <>
      <button
        onClick={() => {
          swichCurrentMenu(sessionStorage.getItem("page") || "Inicio");
          switchMenu(!isMenuOpen);
        }}
        className="flex rounded-lg justify-center w-[50%] h-[50%] focus:ring-gray-200 focus:ring-2 focus:outline-none"
      >
        <img
          src="menu.svg"
          alt="menu_icon"
          className="w-[35px] hover:bg-gray-100"
        />
      </button>
      <div
        className={`transition-[opacity] ease-in-out duration-700 absolute top-[150px] bg-gradient-to-r from-black left-0 w-[20%] h-[100vh] ${
          isMenuOpen ? "opacity-50" : "opacity-0"
        } `}
      ></div>
      <div
        className={`transition-[left] duration-500 ease-in-out fixed bg-[#2f2e2f] top-[150px] h-full w-[80%] z-[-10] text-white ${
          !isMenuOpen ? "left-[100%]" : "left-[20%]"
        }`}
      >
        <ul className="h-full flex flex-col text-center font-display content-center gap-3 pt-5 text-lg">
          {options.map((opt, idx) => {
            return (
              <div key={idx} className="w-full flex flex-col justify-center">
                <li
                  onClick={() => onMenuClick(opt)}
                  className={`cursor-pointer w-full ${
                    currentMenu === opt[0] ? "font-bold text-xl" : ""
                  }`}
                >
                  {opt[0]}
                </li>
                <hr
                  className={`w-[90%] self-center ${
                    currentMenu === opt[0] ? "opacity-100" : "opacity-20"
                  }`}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
