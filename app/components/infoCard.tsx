import React from "react";

export interface InfoCardParams {
  text: string;
  color: string;
  width?: number;
  height?: number;
}

export default function InfoCard({ text, color }: InfoCardParams) {
  return (
    <div
      className="w-full h-full text-white text-center flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <p className="font">{text}</p>
    </div>
  );
}
