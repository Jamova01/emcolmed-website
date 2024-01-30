import Image from "next/image";

export const AlliedBrands = () => {
  const brands = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className=" flex flex-col mx-auto py-8 w-full">
      <h2 className="text-4xl font-bold text-center text-[#063B54] mb-8">
        Marcas aliadas
      </h2>
      <div className="flex w-full flex-nowrap">
        <ul className="flex animate-marqueeX">
          {brands.map((brand) => (
            <li key={brand.id}>
              <Image src={brand.image} width={600} height={300} alt="" />
            </li>
          ))}
        </ul>
        <ul className="flex animate-marqueeX">
          {brands.map((brand) => (
            <li key={brand.id}>
              <Image src={brand.image} width={600} height={300} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
