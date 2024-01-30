import React from "react";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  image: string;
  productList: string[];
}

const CategoryCard = ({ name, image, productList }: CategoryCardProps) => (
  <article className="flex flex-col w-80 md:w-96 shadow-lg bg-gray-200 rounded-md">
    <div className="flex flex-col gap-2 px-6 py-4">
      <p className="text-xl text-center font-medium text-[#063B54]">{name}</p>
      <ul className="list-disc list-inside">
        {productList.map((product, index) => (
          <li key={index} className="text-gray-700">
            {product}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export const Products = () => {
  const categoriesData = [
    {
      id: 1,
      name: "Insumos médicos y quirúrgicos",
      image:
        "https://images.unsplash.com/photo-1605176173609-a0067079b419?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productList: [
        "Algodón",
        "Catéteres",
        "Curas",
        "Esparadrapo",
        "Guantes de nitrilo",
        "Guantes de vinilo",
        "Instrumental",
        "Jeringas vacutainer",
        "Jeringas vacutainer",
        "Micropore",
        "Preservativos",
        "Sistema de administración de líquidos",
        "Sondas de Levin",
        "Sondas Nelaton",
        "Suturas",
      ],
    },
    {
      id: 2,
      name: "Medicamentos",
      image:
        "https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      productList: [
        "Antiacidos",
        "Antibióticos",
        "Antidepresivos",
        "Antifúngicos",
        "Antipiréticos",
        "Antisépticos",
        "Antitoxinas",
        "Anticoagulantes",
        "Apósito estéril",
      ],
    },
  ];

  return (
    <section className="container flex flex-col gap-8 mx-auto py-10">
      <header>
        <h2 className="text-4xl font-bold text-center text-[#063B54] mb-8">
          Nuestros productos
        </h2>
      </header>
      <div className="flex flex-col gap-6 justify-between items-center">
        <div className="grid grid-cols-1 md:flex md:justify-center gap-8">
          {categoriesData.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
              productList={category.productList}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 min-w-96 max-w-96 rounded overflow-hidden text-center p-4">
          <h3 className="text-2xl font-bold text-[#063B54] mb-2">
            Ver más productos
          </h3>
          <p className="text-xl text-gray-700">
            Descubre nuestra amplia gama de productos en la sección de
            productos.
          </p>
          <Link href="#">
            <button className="bg-[#458922] hover:bg-[#6A9643] text-white text-xl font-bold py-3 px-6 rounded-full inline-block">
              Ir a productos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
