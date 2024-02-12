"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const sliders = [
  {
    image: "/slider_1.png",
    text: "Somos Emcolmed, tu mejor elección de importación y distribución en insumos médicos.",
    buttonLabel: "Quiénes somos",
    buttonLink: "/about-us",
  },
  {
    image: "/slider_2.png",
    text: "Suministro de medicamentos, insumos hospitalarios y mantenimientos biomédicos.",
    buttonLabel: "Productos",
    buttonLink: "/products",
  },
  {
    image: "/slider_3.png",
    text: "Salvemos vidas juntos.",
    buttonLabel: "Contáctanos",
    buttonLink: "#contact-us",
  },
];

export const Banners = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const router = useRouter();

  return (
    <Carousel className="relative" plugins={[plugin.current]}>
      <CarouselContent>
        <CarouselItem>
          <Card
            className="flex bg-no-repeat bg-center bg-cover relative overflow-hidden"
            style={{
              backgroundImage: `url(${sliders[0].image})`,
              height: "72vh",
            }}
          >
            <CardContent className="flex justify-end items-center h-full w-full px-6 py-0 absolute bottom-0 left-0 right-0 top-0 text-white">
              <article className="flex flex-col md:mr-20 z-10 max-w-[500px]">
                <h2 className="text-xl md:text-3xl text-center font-medium mb-4">
                  {sliders[0].text}
                </h2>
                <button
                  onClick={() => router.push(sliders[0].buttonLink)}
                  type="button"
                  className="w-full md:w-72 mx-auto bg-[#458922] hover:bg-[#6A9643] text-xl text-white font-medium py-3 px-6 rounded-full inline-block relative"
                >
                  {sliders[0].buttonLabel}
                </button>
              </article>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card
            className="flex bg-no-repeat bg-center bg-cover relative overflow-hidden"
            style={{
              backgroundImage: `url(${sliders[1].image})`,
              height: "72vh",
            }}
          >
            <CardContent className="flex justify-end items-center h-full w-full px-6 py-0 absolute bottom-0 left-0 right-0 top-0 text-white">
              <article className="flex flex-col md:mr-20 z-10 max-w-[500px]">
                <h2 className="text-xl md:text-3xl text-center font-medium mb-4">
                  {sliders[1].text}
                </h2>
                <button
                  onClick={() => router.push(sliders[1].buttonLink)}
                  type="button"
                  className="w-full md:w-72 mx-auto bg-[#458922] hover:bg-[#6A9643] text-xl text-white font-medium py-3 px-6 rounded-full inline-block relative"
                >
                  {sliders[1].buttonLabel}
                </button>
              </article>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card
            className="flex bg-no-repeat bg-center bg-cover relative overflow-hidden"
            style={{
              backgroundImage: `url(${sliders[2].image})`,
              height: "72vh",
            }}
          >
            <CardContent className="flex items-center h-full w-full px-6 py-0 absolute bottom-0 left-0 right-0 top-0 text-white">
              <article className="flex flex-col md:ml-20 z-10 max-w-[500px]">
                <h2 className="text-xl md:text-3xl text-center font-medium mb-4">
                  {sliders[1].text}
                </h2>
                <button
                  onClick={() => router.push(sliders[1].buttonLink)}
                  type="button"
                  className="w-full md:w-72 mx-auto bg-[#458922] hover:bg-[#6A9643] text-xl text-white font-medium py-3 px-6 rounded-full inline-block relative"
                >
                  {sliders[1].buttonLabel}
                </button>
              </article>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
