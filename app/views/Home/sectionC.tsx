import React from "react";
import { Carousel } from "flowbite-react";
import MobileCards from "@/app/components/MobileCards";
import { mobileCardHomeData } from "@/app/data/data";
import InfoCard from "@/app/components/infoCard";

export default function SectionC() {
  return (
    <section className="py-32 w-full bg-[#e3dfd6]">
      <div className="h-full w-full px-10 lg:p-0 flex lg:justify-center items-center">
        <div className="flex flex-col items-center w-full h-full justify-center lg:w-[1500px] lg:px-[50px] gap-14">
          <h3 className="font-display text-4xl">Dignidades de Estado</h3>
          <div className="hidden md:grid grid-cols-3 gap-7 w-full xl:w-[80vh]">
            {mobileCardHomeData.map((info, idx) => (
              <div className="xl:w-[25vh] xl:h-[25vh] h-[25vh]" key={idx}>
                <InfoCard
                  mobileText={info.mobileText}
                  additional="p-10 text-base md: text-sm"
                  text={info.text}
                  text_color="white"
                  color={`${idx % 2 ? "#645047" : "#af8854"}`}
                />
              </div>
            ))}
          </div>
          <div className="w-full md:hidden">
            <MobileCards />
          </div>
        </div>
      </div>
    </section>
  );
}
