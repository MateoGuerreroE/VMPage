import React from "react";

export default function Page() {
  return (
    <div className="bg-biblo bg-cover bg-[800px] md:bg-center">
      <div className="h-[100vh] w-full bg-black bg-opacity-50 text-white px-10">
        <div className="flex flex-col items-start h-full justify-center gap-5">
          <h2 className="font-display text-4xl">Biblioteca</h2>
          <p className="font-dmsans leading-5 mb-3">
            En esta sección se presenta un listado de textos de ​interés. Si
            desea obtener algún libro en formato físico o necesita más
            información, puede contactarnos aquí.
          </p>
        </div>
      </div>
    </div>
  );
}
