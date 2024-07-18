import React from "react";
import { Carousel } from "flowbite-react";
import MobileCards from "@/app/components/MobileCards";

export default function SectionC() {
  return <section className="h-[100vh] w-full bg-white">
    <div className="h-full w-full px-10 lg:p-0 flex lg:justify-center">
      <div  className="flex flex-col lg:flex-row items-start h-full justify-center lg:w-[1500px] lg:px-[50px]">
        <MobileCards />
      </div>
    </div>
  </section>;
}
