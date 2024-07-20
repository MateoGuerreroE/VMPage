import IconCard from "@/app/components/IconCard";
import React from "react";

export default function SectionF() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="flex px-10 w-full lg:justify-center">
        <div className="flex flex-col w-full justify-center gap-5 max-w-[1500px] lg:px-[50px] lg:gap-10">
          <h3 className="font-display text-black text-4xl">Clientes</h3>
          <div className="flex flex-col gap-5 text-white md:grid md:grid-cols-2 lg:grid-cols-4">
            <IconCard
              key={"card1"}
              icon="nacional.svg"
              title="Entidades de orden nacional"
              textList={[
                "Vicepresidencia de la República",
                "Ministerio de Educación Nacional",
                "Ecopetrol",
                "ICFES",
                "Colciencias",
                "Asesoría a la Contraloría General de la República",
              ]}
              textSize="sm"
            />
            <IconCard
              key={"card2"}
              icon="territorial.svg"
              title="Entidades de orden territorial"
              textList={[
                "EPM Empresas Publicas de Medellin",
                "Departamento de Antioquia",
                "Municipio de Medellin",
                "Hidroituango",
              ]}
            />
            <IconCard
              key={"card3"}
              icon="privadas.svg"
              title="Empresas Privadas"
              textList={["Avianca", "Fundación Santillana"]}
            />
            <IconCard
              key={"card4"}
              icon="internacional.svg"
              title="Organismos Internacionales"
              textList={["Naciones Unidas", "UNESCO", "SECAB"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
