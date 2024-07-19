import DownSlider from "@/app/components/downSlider";
import React from "react";

export default function SectionE() {
  return (
    <section className="h-[125vh] bg-[#323232]">
      <div className="flex flex-row px-10 h-full w-full">
        <div className="flex flex-col h-full w-full justify-center gap-12">
          <h3 className="font-display text-4xl text-white w-[80%]">
            Propuesta de valor
          </h3>
          <div className="aspect-w-1 aspect-h-[2.1]">
            <DownSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
