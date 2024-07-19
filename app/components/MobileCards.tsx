"use client";
import React from "react";
import { Carousel, FlowbiteBoolean } from "flowbite-react";
import { mobileCardHomeData } from "../data/data";
import { MobileCardData } from "@/types/types";
import InfoCard from "./infoCard";

export default function MobileCards() {
  return (
    <div className="w-full h-full">
      <Carousel slide={false}>
        {mobileCardHomeData.map((info: MobileCardData, idx: number) => (
          <InfoCard
            key={idx}
            additional="px-16"
            text={info.text}
            text_color="white"
            color={`${idx % 2 ? "#645047" : "#af8854"}`}
          />
        ))}
      </Carousel>
    </div>
  );
}
