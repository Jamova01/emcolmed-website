import React from "react";
import Link from "next/link";

export const Products = () => {
  return (
    <section
      className="flex flex-col items-center w-full mx-auto py-10 bg-no-repeat bg-center bg-cover relative overflow-hidden"
      style={{
        backgroundImage: `url('/products_section.png')`,
        height: "52vh",
      }}
    >
      <header>
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          Nuestros productos
        </h2>
      </header>
      <div className="flex flex-col gap-4 min-w-96 max-w-96 rounded overflow-hidden text-center p-4">
        <h3 className="text-2xl font-bold text-[#063B54] mb-2">
          Ver más productos
        </h3>
        <p className="text-xl text-gray-700">
          Descubre nuestra amplia gama de productos en la sección de productos.
        </p>
        <Link href="/products">
          <button className="bg-[#458922] hover:bg-[#6A9643] text-white text-xl font-bold py-3 px-6 rounded-full inline-block">
            Ir a productos
          </button>
        </Link>
      </div>
    </section>
  );
};
