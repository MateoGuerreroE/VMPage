"use client";
import React, { useState } from "react";
import InfoCard from "./infoCard";

export default function MobileCards() {
  const data = [
    { text: "Exconsejero Presidencial", id: 1 },
    {
      text: "Exmagistrado titular y ex ​presidente del Consejo de ​Estado-Sección Primera",
      id: 2,
    },
    {
      text: "Medalla Luis Carlos Galán de ​lucha contra la corrupción ​otorgado por las Comisiones ​de Ética del Congreso de la ​Republica",
      id: 3,
    },
    {
      text: "Orden Civil del Mérito Ambiental ​otorgado por la Federación de ​entidades sin ánimo de lucro ​Ambientales, como ​reconocimiento a la ponencia ​sobre la Sentencia del Rio Bogotá",
      id: 4,
    },
    {
      text: "Miembro del Consejo Asesor ​de la Competencia de la ​Superintendencia de Industria ​y Comercio",
      id: 5,
    },
    {
      text: "Miembro de la Comisión de ​Garantías Electorales",
      id: 6,
    },
    {
      text: "Miembro correspondiente ​de la Academia Colombiana ​de la Lengua",
      id: 7,
    },
    {
      text: "Miembro correspondiente de ​la Academia Colombiana de ​Jurisprudencia (En trámite)",
      id: 8,
    },
  ];
  const [card, selectCard] = useState<number>(data[0].id);
  return (
    <div className="w-full h-full">
      {data.map((val, idx) => (
        <div
          className={` h-full ${
            card === idx ? "opacity-100" : "hidden opacity-0"
          }`}
        >
          <InfoCard
            key={val.id}
            text={val.text}
            color={idx % 2 === 0 ? "#645047" : "#af8854"}
          />
        </div>
      ))}
    </div>
  );
}
