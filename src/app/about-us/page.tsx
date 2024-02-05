import React from "react";

export default function AboutUs() {
  return (
    <div className="container mx-auto p-8">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Nuestra Empresa</h2>
        <p className="text-gray-700">
          <b>EMCOLMED S.A.S.</b> es una compañía colombiana dedicada al sector
          de la salud. Nos especializamos en la venta, distribución y
          dispensación de medicamentos hospitalarios de niveles I, II y III,
          productos médico-quirúrgicos, odontológicos, insumos hospitalarios y
          otros productos relacionados con la salud.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:order-2">
          <img
            className="company-image w-full h-auto rounded-lg shadow-md"
            src="/slider_image_1.png"
            alt="Imagen de la empresa"
          />
        </div>

        <div className="md:order-1">
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Misión</h2>
            <p className="text-gray-700">
              Ofrecemos servicios como operador logístico en dispensación,
              suministro y comercialización de medicamentos e insumos
              hospitalarios, garantizando altos estándares de calidad en
              nuestros productos y servicios. Nos dedicamos al mejoramiento
              continuo de nuestros procesos con el objetivo de asegurar la
              satisfacción de nuestros clientes y usuarios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Visión</h2>
            <p className="text-gray-700">
              Posicionar a EMCOLMED en los próximos dos años como el operador
              logístico y distribuidor mayorista a nivel departamental,
              ampliando su portafolio de servicios y contando con un equipo
              altamente calificado.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
