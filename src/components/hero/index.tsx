import { TbTruckDelivery } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";

export const Hero = () => {
  return (
    <section className="flex flex-col ">
      <article className="flex md:w-full md:h-96 md:p-20 bg-[url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center relative">
        <div className="flex flex-col gap-6 w-full p-6 md:px-0 z-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-6xl text-white text-center">
              Emcolmed
            </h2>
            <p className="text-base md:text-3xl text-white text-center">
              Venta, comercialización, distribución y dispensación
              <span className="block">
                de medicamentos e insumos hospitalarios.
              </span>
            </p>
          </div>
          <button
            type="button"
            className="w-full md:w-72 mx-auto bg-[#458922] hover:bg-[#6A9643] text-xl text-white font-medium py-3 px-6 rounded-full inline-block relative"
          >
            Contáctanos
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-slate-600 bg-fixed transition duration-300 ease-in-out opacity-75"></div>
      </article>
      <div className="grid grid-cols-1 gap-6 mx-auto py-10 md:flex items-center md:flex-wrap md:justify-around">
        <article className="flex flex-col items-center gap-4 py-6 border rounded-md shadow w-72">
          <LiaCertificateSolid className="text-9xl text-[#6A9643]" />
          <p className="text-lg text-center font-medium capitalize">Altos estándares de calidad</p>
        </article>
        <article className="flex flex-col items-center gap-4 py-6 border rounded-md shadow w-72">
          <TbTruckDelivery className="text-9xl text-[#6A9643]" />
          <p className="text-lg text-center font-medium capitalize">Entrega eficiente</p>
        </article>
        <article className="flex flex-col items-center gap-4 py-6 border rounded-md shadow w-72">
          <FaUserDoctor className="text-9xl text-[#6A9643]" />
          <p className="text-lg text-center font-medium capitalize">Talento humano especializado</p>
        </article>
      </div>
    </section>
  );
};
