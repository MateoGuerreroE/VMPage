import React from "react";

export interface InfoCardParams {
  text: string;
  mobileText?: string;
  text_color: "white" | "black";
  color: string;
  additional?: string;
}

export default function InfoCard({
  text,
  color,
  text_color,
  mobileText = text,
  additional = "p-0",
}: InfoCardParams) {
  return (
    <div
      className={`w-full h-full text-${text_color} font-dmsans text-center ${additional} flex items-center justify-center`}
      style={{ backgroundColor: color }}
    >
      <p className="short:flex hidden">{text}</p>
      <p className="short:hidden flex">{mobileText}</p>
    </div>
  );
}
