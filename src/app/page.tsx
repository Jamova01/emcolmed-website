import { AlliedBrands } from "@/components/allied-brands";
import { Hero } from "@/components/hero/";
import { Products } from "@/components/products/";
// import { Map } from "@/components/ui/map";
import { WhatsappButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <Hero />
      <Products />
      <AlliedBrands />
      <div
        className="container flex flex-col gap-8 mx-auto mt-10"
        id="contact-us"
      >
        <h2 className="text-4xl font-bold text-center text-[#063B54] mb-6">
          Contáctanos
        </h2>
        <div className="flex flex-col gap-4 text-center mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Horarios de Atención</h3>
            <p>Lunes a Viernes: 7:30am – 5pm</p>
            <p>Sábados: 8am – 12:30pm</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 justify-around">
          <div className="flex">
            <form className="max-w-md mx-auto w-80">
              <p className="text-center mb-6">
                Para contactarse con nosotros, por favor diligencie el siguiente
                formulario.
              </p>
              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-600"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-gray-600"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="flex w-80 md:w-96">
            <iframe
              title="Google Map"
              width="100%"
              height="400"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3.474438010913556,%20-76.52736976387013+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
        </div>
      </div>
      <WhatsappButton />
    </div>
  );
}
