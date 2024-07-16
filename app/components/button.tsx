"use client";
import Link from "next/link";
import React from "react";

export interface ButtonParams {
  color: string;
  text: string;
  width?: number;
  height?: number;
}

export default function Button({ color, text, width = 250 }: ButtonParams) {
  return (
    <div
      className={`p-4 rounded-2xl text-lg font-semibold text-center hover:cursor-pointer`}
      style={{ backgroundColor: color, width: width }}
      onClick={() => sessionStorage.setItem("page", "Áreas Temáticas")}
    >
      <Link href={"/areas"}>{text}</Link>
    </div>
  );
}
