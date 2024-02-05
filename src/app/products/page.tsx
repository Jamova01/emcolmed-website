const products = [
  {
    category: "Medical and Surgical Supplies",
    items: [
      {
        name: "Algodón",
        image: "/products/Algodón.png",
      },
      {
        name: "Catéteres",
        image: "/products/Catéteres.png",
      },
      {
        name: "Curas",
        image: "/products/Curas.png",
      },
      {
        name: "Esparadrapo",
        image: "/products/Esparadrapo.png",
      },
      {
        name: "Guantes de nitrilo",
        image: "/products/Guantes de Nitrilo.png",
      },
      {
        name: "Guantes de vinilo",
        image: "/products/Guantes de Vinilo.png",
      },
      {
        name: "Instrumental",
        image: "/products/Instrumental.png",
      },
      {
        name: "Jeringas vacutainer",
        image: "/products/Jeringas vacutainer.png",
      },
      {
        name: "Micropore",
        image: "/products/Micropore.png",
      },
      {
        name: "Preservativos",
        image: "/products/Preservativos.png",
      },
      {
        name: "Sistemas de administración de líquidos",
        image: "/products/Sistema de administración de líquidos.png",
      },
      {
        name: "Sondas de Levin",
        image: "/products/Sondas de Levin.png",
      },
      {
        name: "Sondas nelatón",
        image: "/products/Sondas Nelaton.png",
      },
      {
        name: "Suturas",
        image: "/products/Suturas.png",
      },
    ],
  },
  {
    category: "Medicamentos",
    items: [
      {
        name: "Antiacidos",
        image: "/products/Antiacidos.png",
      },
      {
        name: "Antibioticos",
        image: "/products/Antibióticos.png",
      },
      {
        name: "Anticoagulantes",
        image: "/products/Anticoagulantes.png",
      },
      {
        name: "Antidepresivos",
        image: "/products/Antidepresivos.png",
      },
      {
        name: "Antifungicos",
        image: "/products/Antifúngicos.png",
      },
      {
        name: "Antipireticos",
        image: "/products/Antipiréticos.png",
      },
      {
        name: "Antisepticos",
        image: "/products/Antisépticos.png",
      },
      {
        name: "Antitoxinas",
        image: "/products/Antitoxinas.png",
      },
      {
        name: "Aposito",
        image: "/products/Apósito esteril.png",
      },
    ],
  },
];

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

export default function Products() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto">
        <section className="flex flex-col gap-8 px-8">
          <h2 className="text-4xl font-bold text-center text-[#063B54] mb-4">
            Productos
          </h2>
          {/* Sección de Productos por Categoría */}
          {products.map((category, index) => (
            <section key={index} className="flex flex-col gap-8">
              <h3 className="text-2xl font-bold text-[#063B54]">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="min-w-44 max-w-80 bg-white rounded-md overflow-hidden transform hover:scale-105 transition duration-300"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto"
                    />
                    <p className="text-center text-[#006F86] font-medium p-4">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
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
