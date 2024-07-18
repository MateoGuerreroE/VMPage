"use client";
import React from "react";
import { Carousel, FlowbiteBoolean } from "flowbite-react";
import { mobileCardHomeData } from "../data/data";
import { MobileCardData } from "@/types/types";
import InfoCard from "./infoCard";

export default function MobileCards() {
  const carouselTheme = {
    item: {
      base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    },
  };
  return (
    <div className="w-full h-full">
      <Carousel slide={false}>
        {mobileCardHomeData.map((info: MobileCardData, idx: number) => (
          <InfoCard
            additional="px-20"
            text={info.text}
            text_color="white"
            color={`${idx % 2 ? "#645047" : "#af8854"}`}
          />
        ))}
      </Carousel>
    </div>
  );
}
