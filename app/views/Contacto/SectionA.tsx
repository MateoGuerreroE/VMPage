import React from "react";

export default function SectionA() {
  return (
    <section className="h-[100vh] w-full bg-contact bg-cover bg-center">
      <div className="h-full w-full bg-black bg-opacity-40 text-white px-10 lg:p-0 flex lg:justify-center">
        <div className="flex flex-col items-start h-full justify-center lg:w-[1500px] lg:px-[50px]">
          <div className="flex flex-col max-w-[500px] gap-3">
            <h2 className="font-display text-4xl">Contáctenos</h2>
            <p className="font-dmsans leading-5 mb-3 max-w-[300px]">
              Por favor diligencie el formato en la parte inferior para atender
              su solicitud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
