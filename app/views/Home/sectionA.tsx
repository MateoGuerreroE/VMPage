import React from "react";
import Button from "../../components/button";

export default function SectionA() {
  return (
    <section className="h-[100vh] w-full bg-mazo bg-cover bg-center text-white px-10">
      <div className="flex flex-col items-start h-full justify-center gap-7">
        <h2 className="font-display text-4xl">Velilla Moreno Consulting</h2>
        <p className="font-dmsans leading-5 mb-3">
          Somos un Buffet Jurídico con soporte ​interdisciplinario para atender
          las diferentes áreas en ​materia de consultoría y litigio estratégico
          integral.
        </p>
        <div className="self-start">
          <Button text="Ver Áreas Temáticas" color="#bba088" />
        </div>
      </div>
    </section>
  );
}