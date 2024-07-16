import React from "react";
import SectionA from "../views/Home/sectionA";
import SectionB from "../views/Home/sectionB";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SectionA />
      {/* <SectionB /> */}
    </main>
  );
}
