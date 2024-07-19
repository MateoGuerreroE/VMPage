"use client";
import React, { useState } from "react";

export default function DownSlider() {
  const [section, setSection] = useState<number>(0);
  const changeSection = () => {
    setSection(section ? 0 : 1);
  };
  return (
    <div>
      <div className="w-full h-full overflow-hidden flex flex-col gap-6 mb-2">
        <div
          id="first"
          className={`relative transition-all duration-500 ${
            section ? "translate-y-0" : "-translate-y-[50%]"
          }`}
        >
          <div className="flex flex-col gap-4">
            <div className="bg-[#032739] aspect-w-1 aspect-h-1 text-white">
              <div className="w-full h-full p-10 flex flex-col gap-2 justify-center">
                <h4 className="font-display text-2xl">
                  Estrategia e instrumentación jurídica
                </h4>
                <p className="font-dmsans text-lg">
                  para la solución de problemas legales, económicos y sociales
                </p>
              </div>
            </div>
            <div className="bg-[#e3dfd6] aspect-w-1 aspect-h-1 text-black">
              <div className="w-full h-full p-10 flex flex-col gap-2 justify-center">
                <h4 className="font-display text-2xl">
                  Examen de escenarios posibles
                </h4>
                <p className="font-dmsans text-lg">
                  elaboración de documentos interdisciplinarios con su
                  respectiva instrumentación jurídica
                </p>
              </div>
            </div>
            <div className="bg-white aspect-w-1 aspect-h-1 text-black">
              <div className="w-full h-full p-10 flex flex-col gap-2 justify-center">
                <h4 className="font-display text-2xl">Servicios</h4>
                <p className="font-dmsans text-lg">
                  de una gran red de oficinas que permite brindar asesoría y
                  consultoría nacional e internacional en diferentes temas
                </p>
              </div>
            </div>
            <div className="bg-[#e3dfd6] aspect-w-1 aspect-h-1 text-black">
              <div className="w-full h-full p-10 flex flex-col gap-2 justify-center">
                <h4 className="font-display text-2xl">Gran red de formación</h4>
                <p className="font-dmsans text-lg">
                  y realización de eventos jurídicos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full flex justify-center" onClick={changeSection}>
        <div className={`h-10 w-10 ${section ? "rotate-90" : "-rotate-90"}`}>
          <img src="icons/simpleArrow.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
}
