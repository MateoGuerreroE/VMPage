import MobileCards from "@/app/components/MobileCards";
import React from "react";

export default function SectionB() {
  return (
    <section className="h-[100vh] w-full bg-[#e3dfd6] bg-cover bg-center flex justify-center items-center px-10">
      <div className="flex flex-col items-center h-[70%] w-full pt-10 justify-center">
        <h2 className="text-black font-display text-2xl py-10">
          Dignidades de Estado
        </h2>
        <div className="w-[80%] h-[80%]">
          <MobileCards />
        </div>
        <div></div>
      </div>
    </section>
  );
}
