import React from "react";
import Button from "../../components/button";

export default function SectionA() {
  return (
    <section className="h-[100vh] w-full bg-mazo bg-cover bg-center">
      <div className="h-full w-full bg-black bg-opacity-40 text-white px-10 lg:p-0 flex lg:justify-center">
        <div className="flex flex-col items-start h-full justify-center lg:w-[1500px] lg:px-[50px]">
          <div className="flex flex-col max-w-[500px] gap-7">
            <h2 className="font-display text-4xl">Velilla Moreno Consulting</h2>
            <p className="font-dmsans leading-5 mb-3">
              Somos un <b>bufete jurídico</b> con soporte interdisciplinario
              para atender las diferentes áreas en materia de consultoría y
              litigio estratégico integral.
            </p>
            <div className="self-start">
              <Button text="Ver Áreas Temáticas" color="#bba088" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
