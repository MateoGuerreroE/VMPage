"use client";
import Link from "next/link";
import React from "react";

export interface ButtonParams {
  color: string;
  text: string;
  textColor: "white" | "black";
  url: string;
  width?: number;
}

export default function ExternalURLButton({
  color,
  textColor,
  text,
  url,
  width = 250,
}: ButtonParams) {
  return (
    <div
      className={`p-4 rounded-2xl text-lg font-semibold text-center hover:cursor-pointer text-${textColor}`}
      style={{ backgroundColor: color, width: width }}
      onClick={() => window.open(url)}
    >
      {text}
    </div>
  );
}
