"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export type CompParams = {
  def?: string;
};

export default function ResponsiveMenu() {
  const options = [
    ["Inicio", "home"],
    ["Áreas Temáticas", "areas"],
    ["Actividades Interdisciplinarias", "actividades"],
    ["Biblioteca", "biblio"],
    ["Contacto", "contacto"],
  ];
  const [currentMenu, setCurrentMenu] = useState<string>("Inicio");
  const [hovered, isHovered] = useState<number>(-1);
  const router = useRouter();
  useEffect(() => {
    const currentPage = sessionStorage.getItem("page");
    setCurrentMenu(currentPage ?? "Inicio");
  }, []);
  const onMenuClick = (val: string[]) => {
    router.push(`/${val[1]}`);
    sessionStorage.setItem("page", val[0]);
    setCurrentMenu(val[0]);
  };
  return (
    <div className="pl-3">
      <ul className="flex flex-row w-full text-white gap-7 lg:gap-5 lg:pt-3 xl:pt-0 xl:gap-12 items-center">
        {options.map((opt, idx) => (
          <div
            className={`flex flex-col overflow-x-hidden hover:cursor-pointer translate-[scale] duration-200 ${
              hovered === idx && currentMenu !== opt[0]
                ? "scale-105"
                : "scale-100"
            }`}
            key={idx}
            onClick={() => onMenuClick(opt)}
            onMouseEnter={() => isHovered(idx)}
            onMouseLeave={() => isHovered(-1)}
          >
            <li
              className={`font-display md:text-[2vh] lg:text-[18px] xl:text-[14px] 2xl:text-[1.5vh] 2xl:pt-2`}
            >
              {opt[0]}
            </li>
            <div
              className={`translate translate-[opacity] duration-300 h-[2px] w-[80%] bg-white rounded-full ${
                currentMenu === opt[0]
                  ? "-translate-x-0 opacity-100"
                  : "-translate-x-14 opacity-0"
              }`}
            ></div>
          </div>
        ))}
      </ul>
    </div>
  );
}
