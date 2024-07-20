"use client";
import React, { useState } from "react";

export interface IconCardParams {
  title: string;
  textList: string[];
  icon: string;
  textSize?: string;
}

export default function IconCard({
  title,
  textList,
  icon,
  textSize = "base",
}: IconCardParams) {
  const [hovered, isHovered] = useState(false);
  const changeHoverState = (state: boolean) => {
    isHovered(state);
  };
  return (
    <div
      className="rounded-lg bg-[#af8854] aspect-w-3 aspect-h-2 lg:aspect-w-1 lg:aspect-h-1"
      onMouseEnter={() => changeHoverState(true)}
      onMouseLeave={() => changeHoverState(false)}
      onTouchStart={() => changeHoverState(!hovered)}
    >
      <div
        className={`flex flex-col transition-opacity duration-150 ease-in-out justify-center items-center text-center gap-2 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <img src={`icons/${icon}`} alt="iconCard" className="w-16 h-16" />
        <h5 className="font-display text-lg 2xl:text-2xl w-1/2 lg:w-[80%]">
          {title}
        </h5>
      </div>
      <div
        className={`flex flex-col justify-center overflow-y-scroll md:overflow-auto transition-opacity duration-150 pl-5 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className="list-disc ml-3">
          {textList.map((item, idx) => (
            <li
              key={idx}
              className={`font-dmsans text-${textSize} 2xl:text-lg w-[80%]`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
