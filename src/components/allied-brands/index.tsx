import Image from "next/image";

export const AlliedBrands = () => {
  const brands = [
    {
      id: 1,
      image:
        "/brands/brand_1.svg",
    },
    {
      id: 2,
      image:
        "/brands/brand_2.svg",
    },
    {
      id: 3,
      image:
        "/brands/brand_3.png",
    },
    {
      id: 4,
      image:
        "/brands/brand_5.jpeg",
    },
    {
      id: 5,
      image:
        "/brands/brand_6.png",
    },
    {
      id: 6,
      image:
        "/brands/brand_7.png",
    },
    {
      id: 7,
      image:
        "/brands/brand_8.png",
    },
    {
      id: 8,
      image:
        "/brands/brand_9.png",
    },
    {
      id: 9,
      image:
        "/brands/brand_10.png",
    },
    {
      id: 10,
      image:
        "/brands/brand_11.png",
    },
    {
      id: 11,
      image:
        "/brands/brand_12.png",
    },
    {
      id: 12,
      image:
        "/brands/brand_13.png",
    },
    {
      id: 13,
      image:
        "/brands/brand_14.png",
    },
    {
      id: 14,
      image:
        "/brands/brand_15.png",
    },
    {
      id: 15,
      image:
        "/brands/brand_16.webp",
    },
    {
      id: 16,
      image:
        "/brands/brand_17.png",
    },
    {
      id: 17,
      image:
        "/brands/brand_18.png",
    },
  ];

  return (
    <div className="flex flex-col mx-auto py-8 w-full">
      <h2 className="text-4xl font-bold text-center text-[#063B54] mb-8">
        Marcas aliadas
      </h2>
      <div className="w-full inline-flex flex-nowrap overflow-x-hidden">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {brands.map((brand) => (
            <li key={brand.id}>
              <Image src={brand.image} width={200} height={200} alt="" />
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {brands.map((brand) => (
            <li key={brand.id}>
              <Image src={brand.image} width={200} height={200} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
