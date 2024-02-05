import { TbTruckDelivery } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { Banners } from "../banners";

export const Hero = () => {
  return (
    <section className="flex flex-col">
      <div className="container px-10">
        <Banners />
      </div>
      <div className="grid grid-cols-1 gap-6 mx-auto py-10 md:flex items-center md:flex-wrap md:justify-around">
        <article className="flex flex-col items-center gap-4 py-6 border rounded-md shadow w-72">
          <LiaCertificateSolid className="text-9xl text-[#6A9643]" />
          <p className="text-lg text-center font-medium capitalize">
            Altos estándares de calidad
          </p>
        </article>
        <article className="flex flex-col items-center gap-4 py-6 border rounded-md shadow w-72">
          <TbTruckDelivery className="text-9xl text-[#6A9643]" />
          <p className="text-lg text-center font-medium capitalize">
            Entrega eficiente
          </p>
        </article>
        <article className="flex flex-col items-center gap-4 py-6 border rounded-md shadow w-72">
          <FaUserDoctor className="text-9xl text-[#6A9643]" />
          <p className="text-lg text-center font-medium capitalize">
            Talento humano especializado
          </p>
        </article>
      </div>
    </section>
  );
};
