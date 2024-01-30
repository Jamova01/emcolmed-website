export default function Products() {
  const catagosData = [
    {
      name: "Catálogo Emcolmed año 2023 - PDF",
      link: "/CATALOGO_EMCOLMED_AÑO_2023.pdf",
    },
    {
      name: "Catálogo SIDSALUD 2023 - PDF",
      link: "/CATALOGO_SIDSALUD_2023.pdf",
    },
    { name: "ETN técnica quirúrgica - PDF", link: "/ETNtecnicaquirurgica.pdf" },
    {
      name: "Ficha técnica reemplazo de articulación de cadera Emcolmed - PDF",
      link: "/Ficha técnica reemplazo de articulación de cadera Emcolmed.pdf",
    },
    {
      name: "Ficha técnica reemplazo de articulación de rodilla - PDF",
      link: "/Ficha técnica reemplazo de articulación de rodilla.pdf",
    },
    {
      name: "Placa de Clavícula con Gancho - PDF",
      link: "/Placa de Clavícula con Gancho.pdf",
    },
    {
      name: "Placa de Clavícula Superior Anterior con Extencion 2.7 - PDF",
      link: "/Placa de Clavícula Superior Anterior con Extencion 2.7.pdf",
    },
    {
      name: "Portafolio línea especializada Dispocol 2023 - PDF",
      link: "/Portafolio línea especializada Dispocol 2023.pdf",
    },
    {
      name: "Portafolio reemplazos articulares AK Medical 2023 - PDF",
      link: "/Portafolio reemplazos articulares AK Medical 2023.pdf",
    },
    {
      name: "Técnica quirúrgica prótesis total de rodilla primaria - PDF",
      link: "/Portafolio reemplazos articulares AK Medical 2023.pdf",
    },
    {
      name: "Técnica quirúrgica vástago cementado - PDF",
      link: "/Técnica quirúrgica vástago cementado.pdf",
    },
    {
      name: "Técnica quirúrgica vástago femoral AK-CL-TH - PDF",
      link: "/Técnica quirúrgica vástago femoral AK-CL-TH.pdf",
    },
    {
      name: "Torre 3CMOS FULL HD - PDF",
      link: "/torre 3CMOS FULL HD.pdf",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto">
        <section className="mb-8">
          <h2 className="text-4xl font-bold text-center text-[#063B54] mb-4">
            Productos
          </h2>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-[#063B54] mb-4">
              Catágolos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {catagosData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
                >
                  <a
                    href={item.link}
                    download
                    className="block text-center text-[#006F86] font-medium hover:text-[#458922]"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
