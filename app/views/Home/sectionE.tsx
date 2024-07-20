import DownSlider from "@/app/components/downSlider";
import React from "react";

export default function SectionE() {
  return (
    <section className="w-full py-24 bg-[#323232]">
      <div className="flex flex-row px-10 lg:p-0 h-full w-full lg:justify-center">
        <div className="flex lg:flex-row flex-col h-full w-full justify-center gap-12 max-w-[1500px] lg:px-[50px] lg:gap-32 xl:gap-48">
          <div className="lg:self-center">
            <h3 className="font-display text-4xl text-white">
              Propuesta de valor
            </h3>
          </div>
          <div className="aspect-w-1 aspect-h-[2.1] md:hidden">
            <DownSlider />
          </div>
          <div className="hidden lg:w-full md:grid grid-cols-2 gap-7 max-w-[900px]">
            <div className="aspect-w-1 aspect-h-1 bg-[#032739] text-white">
              <div className="w-full h-full p-10 flex flex-col gap-2 justify-center">
                <h4 className="font-display text-2xl xl:text-4xl">
                  Estrategia e instrumentación jurídica
                </h4>
                <p className="font-dmsans text-lg">
                  para la solución de problemas legales, económicos y sociales
                </p>
              </div>
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-[#e3dfd6]">
              <div className="w-full h-full p-10 flex flex-col gap-2 justify-center">
                <h4 className="font-display text-2xl xl:text-4xl">
                  Examen de escenarios posibles
                </h4>
                <p className="font-dmsans text-lg">
                  y elaboración de documentos interdisciplinarios con su
                  respectiva instrumentación jurídica
                </p>
              </div>
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-white">
              <div className="w-full h-full p-10 flex flex-col gap-2 justify-center">
                <h4 className="font-display text-2xl xl:text-4xl">Servicios</h4>
                <p className="font-dmsans text-lg">
                  de una gran red de oficinas que permite brindar asesoría y
                  consultoría nacional e internacional en diferentes temas
                </p>
              </div>
            </div>
            <div className="aspect-w-1 aspect-h-1 bg-black text-white">
              <div className="w-full h-full p-10 flex flex-col gap-2 justify-center">
                <h4 className="font-display text-2xl xl:text-4xl">
                  Gran red de formación
                </h4>
                <p className="font-dmsans text-lg">
                  y realización de eventos jurídicos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
