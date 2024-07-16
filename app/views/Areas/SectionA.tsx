import React from "react";

export default function SectionA() {
  return (
    <div className="h-[100vh] w-full bg-areas bg-cover bg-center">
      <div className="h-full w-full bg-black bg-opacity-40 text-white px-10 lg:p-0 flex lg:justify-center">
        <div className="flex flex-col items-start h-full justify-center lg:w-[1500px] lg:px-[50px]">
          <div className="flex flex-col max-w-[500px] gap-7">
            <h2 className="font-display text-4xl">Áreas Temáticas</h2>
            <p className="font-dmsans leading-5 mb-3">
              Velilla Moreno Consulting es una firma de abogados ​que
              proporciona asesoramiento de la más alta ​calidad a sus clientes
              en diferentes áreas de ​especialización, fruto de la innovación y
              de la ​constante adaptación a sus necesidades
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
