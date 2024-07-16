import React from "react";

export default function SectionA() {
  return (
    <section className="bg-act bg-cover bg-[600px] md:bg-center">
      <div className="h-[100vh] w-full bg-black bg-opacity-30 text-white px-10">
        <div className="flex flex-col items-start h-full justify-center gap-7">
          <h2 className="font-display text-4xl">
            Actividades Interdisciplinarias
          </h2>
          <p className="font-dmsans leading-5 mb-3">
            Aquí se encuentran eventos como foros sobre ​sostenibilidad,
            congresos de derecho empresarial y ​más, promoviendo el debate y la
            colaboración para ​abordar desafíos contemporáneos.
          </p>
        </div>
      </div>
    </section>
  );
}
