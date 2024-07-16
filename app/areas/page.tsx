import React from "react";

export default function Page() {
  return (
    <div className="bg-areas bg-cover bg-center">
      <div className="h-[100vh] w-full bg-black bg-opacity-40 text-white px-10">
        <div className="flex flex-col items-start h-full justify-center">
          <h2 className="font-display text-4xl mb-10">Áreas Temáticas</h2>
          <p className="font-dmsans leading-5 mb-3">
            Velilla Moreno Consulting es una firma de abogados ​que proporciona
            asesoramiento de la más alta ​calidad a sus clientes en diferentes
            áreas de ​especialización, fruto de la innovación y de la ​constante
            adaptación a sus necesidades
          </p>
          <div className="self-start">
            <ul className="list-disc pl-5">
              <li>
                <p>
                  <b className="font-semibold">
                    Derecho administrativo, económico y de los negocios
                  </b>{" "}
                  (incluyendo derecho de propiedad intelectual, de competencia,
                  de consumidor y ambiental)
                </p>
              </li>
              <li className="font-semibold">
                Derecho privado, tributario, penal y electoral
              </li>
              <li className="font-semibold">
                Evaluación de proyectos económicos y sociales
              </li>
              <li className="font-semibold">Auditoría forense</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
