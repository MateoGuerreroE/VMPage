import React from "react";
import SectionA from "../views/Home/sectionA";
import SectionB from "../views/Home/sectionB";
import SectionC from "../views/Home/sectionC";
import SectionD from "../views/Home/sectionD";
import SectionE from "../views/Home/sectionE";
import SectionF from "../views/Home/sectionF";
import Contacto from "../views/Shared/Contacto";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
      <Contacto />
    </main>
  );
}
