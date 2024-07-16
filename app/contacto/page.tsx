import React from "react";

export default function Page() {
  return (
    <div className="bg-contact bg-cover bg-[700px]">
      <div className="h-[100vh] w-full bg-black bg-opacity-50 text-white px-10">
        <div className="flex flex-col items-start h-full justify-center gap-5">
          <h2 className="font-display text-4xl">Contáctenos</h2>
          <p className="font-dmsans leading-5 mb-3">
            Por favor diligencie el formato en la parte inferior para atender su
            solicitud.
          </p>
        </div>
      </div>
    </div>
  );
}
