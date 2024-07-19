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
      className="rounded-lg bg-[#af8854] aspect-w-2 aspect-h-1"
      onMouseEnter={() => changeHoverState(true)}
      onMouseLeave={() => changeHoverState(false)}
      onTouchStart={() => changeHoverState(true)}
      onTouchEnd={() => changeHoverState(false)}
    >
      <div
        className={`flex flex-col transition-opacity duration-150 ease-in-out justify-center items-center gap-2 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <img src={`icons/${icon}`} alt="iconCard" className="w-16 h-16" />
        <h5 className="font-display text-lg">{title}</h5>
      </div>
      <div
        className={`flex flex-col justify-center items-center transition-opacity duration-150 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className="list-disc ml-3">
          {textList.map((item, idx) => (
            <li key={idx} className={`font-dmsans text-${textSize}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
