import React from "react";

export default function Contacto() {
  return (
    <section className="bg-black h-[60vh] w-full">
      <div className="flex flex-row px-10 h-full w-full">
        <div className="flex flex-col h-full w-full justify-center gap-5">
          <h3 className="font-display text-4xl text-white">Contáctanos</h3>
          <div className="flex flex-col">
            <h5 className="font-display text-[#bba088] text-2xl">Teléfono</h5>
            <p className="font-dmsans text-white">(123) 456-7890</p>
          </div>
          <div className="flex flex-col">
            <h5 className="font-display text-[#bba088] text-2xl">Email</h5>
            <p className="font-dmsans text-white">sample@gmail.com</p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="font-display text-[#bba088] text-2xl">
              Redes Sociales
            </h5>
            <div className="flex flex-row gap-3 h-7">
              <img src="icons/linkedin.svg" alt="linkedin" />
              <img src="icons/facebook.svg" alt="facebook" />
              <img src="x_logo.svg" alt="x" />
              <img src="icons/instagram.svg" alt="instagram" />
              <img src="icons/youtube.svg" alt="youtube" />
              <img src="icons/spotify.svg" alt="spotify" />
            </div>
          </div>
          <div>
            <p className="font-dmsans text-white">Direccion1</p>
            <p className="font-dmsans text-white">Direccion2</p>
          </div>
        </div>
      </div>
    </section>
  );
}
