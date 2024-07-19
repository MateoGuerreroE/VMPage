import React from "react";
import SectionA from "../views/Actividades/sectionA";
import Contacto from "../views/Shared/Contacto";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SectionA />
      <Contacto />
    </main>
  );
}
