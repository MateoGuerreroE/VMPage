"use client";
import Link from "next/link";
import React from "react";

export interface ButtonParams {
  color: string;
  text: string;
  textColor: "white" | "black";
  redirectTo: { title: string; url: string };
  width?: number;
  height?: number;
}

export default function RedirectButton({
  color,
  textColor,
  text,
  redirectTo,
  width = 250,
}: ButtonParams) {
  return (
    <div
      className={`p-4 rounded-2xl text-lg font-semibold text-center hover:cursor-pointer text-${textColor}`}
      style={{ backgroundColor: color, width: width }}
      onClick={() => sessionStorage.setItem("page", redirectTo.title)}
    >
      <Link href={`/${redirectTo.url}`}>{text}</Link>
    </div>
  );
}
