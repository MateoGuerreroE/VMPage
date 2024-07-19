import ExternalURLButton from "@/app/components/externalButton";
import React from "react";

export default function SectionB() {
  return (
    <section className="h-[135vh] md:h-[100vh] w-full bg-[#898989]">
      <div className="h-full w-full px-10 lg:p-0 flex lg:justify-center">
        <div className="flex flex-col lg:flex-row items-start h-full justify-center lg:w-[1500px] lg:px-[50px]">
          <div className="w-1/2 bg-black h-full hidden lg:flex"></div>
          <div className="w-full lg:w-1/2 h-full flex items-center">
            <div className="lg:p-10 flex flex-col justify-center md:m-0 text-white gap-5">
              <div>
                <h2 className="font-display text-4xl">
                  Marco Antonio Velilla Moreno
                </h2>
                <h4 className="font-display text-2xl pb-5">
                  Jurista, humanista y hombre de Estado
                </h4>
              </div>
              <div className="md:hidden w-full self-center h-[350px] bg-black mb-5"></div>
              <p className="font-dmsans md:hidden">
                Director General de Velilla Moreno Consulting, abogado de la
                Universidad Pontificia Bolivariana con más de 40 años de
                experiencia. Especializado en Derecho Civil-Comercial, tiene una
                maestría en Derecho Privado de la Universidad de París II y otra
                en Derecho Económico de la Universidad de Orleans. Fundador y
                primer director del Departamento de Derecho Económico y de los
                Negocios de la Universidad Externado de Colombia, ha dirigido
                especializaciones interdisciplinarias, sido profesor en varias
                universidades colombianas y colaborado con diversas revistas
                jurídicas.
              </p>
              <div className="hidden md:flex flex-col gap-3 mb-10">
                <p>
                  Director General de Velilla Moreno Consulting. Es abogado de
                  la Universidad Pontificia Bolivariana, con más de 40 años de
                  experiencia profesional.
                </p>
                <p>
                  Se especializó en Derecho Civil-Comercial en la misma
                  universidad en 1982 y obtuvo una maestría en Derecho Privado
                  de la Universidad de París II en Francia en 1986, así como
                  otra en Derecho Económico de la Universidad de Orleans en el
                  mismo país en 1987.
                </p>
                <p>
                  Es creador y Primer Director del Departamento de Derecho
                  Económico y de los Negocios de la Universidad Externado de
                  Colombia, donde también ha dirigido diversas especializaciones
                  interdisciplinarias. Además, ha sido profesor en numerosas
                  universidades en Colombia y ha colaborado con diversas
                  revistas jurídicas.
                </p>
              </div>
              {/* <ExternalURLButton
                url="https://www.google.com"
                textColor="white"
                color="#2f2e2f"
                text="Ver biografía completa aquí"
                width={280}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
