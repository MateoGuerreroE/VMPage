import React from "react";

export default function SectionA() {
  return (
    <section className="h-[100vh] w-full bg-act bg-cover bg-center">
      <div className="h-full w-full bg-black bg-opacity-45 text-white px-10 lg:p-0 flex lg:justify-center">
        <div className="flex flex-col items-start h-full justify-center lg:w-[1500px] lg:px-[50px]">
          <div className="flex flex-col max-w-[500px] gap-7">
            <h2 className="font-display text-4xl">
              Actividades Interdisciplinarias
            </h2>
            <p className="font-dmsans leading-5 mb-3">
              Aquí se encuentran eventos como foros sobre ​sostenibilidad,
              congresos de derecho empresarial y ​más, promoviendo el debate y
              la colaboración para ​abordar desafíos contemporáneos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
