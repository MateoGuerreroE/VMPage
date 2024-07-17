import React from "react";
import SectionA from "../views/Home/sectionA";
import SectionB from "../views/Home/sectionB";
import NavBar from "../components/navbar";
import SectionC from "../views/Home/sectionC";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SectionA />
      <SectionB />
      <SectionC />
    </main>
  );
}
