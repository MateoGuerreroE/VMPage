import React from "react";

export interface InfoCardParams {
  text: string;
  text_color: 'white' | 'black';
  color: string;
}

export default function InfoCard({ text, color, text_color }: InfoCardParams) {
  return (
    <div
      className={`w-full h-full text-${text_color} text-center flex items-center justify-center`}
      style={{ backgroundColor: color }}
    >
      <p className="font">{text}</p>
    </div>
  );
}
