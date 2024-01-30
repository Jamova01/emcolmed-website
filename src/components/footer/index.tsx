import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex flex-col px-6 py-8 mx-auto bg-[#063B54]">
      <ul className="flex flex-col md:flex-row md:justify-between md:items-start items-end gap-6">
        <li className="md:order-2 flex-1">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium text-[#CCCCCC] text-end md:text-center">
              Nosotros somos
            </h3>
            <Link href="/" className="mx-auto" passHref>
              <Image
                src="/logo_blanco.png"
                alt="Emcolmed Logo"
                width={152}
                height={152}
                className=""
                priority
              />
            </Link>
          </div>
        </li>
        <li className="md:order-1 flex-1">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium text-[#CCCCCC] text-end  md:text-center">
              Nuestras redes
            </h3>
            <ol className="flex justify-center gap-4">
              <li>
                <Link href="https://www.instagram.com/emcolmed?igsh=MXV5cnJnNHkxZ2pyZw==">
                  <FaInstagram className="text-3xl text-[#CCCCCC]" />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/profile.php?id=61555815603669&mibextid=hu50Ix">
                  <FaFacebook className="text-3xl text-[#CCCCCC]" />
                </Link>
              </li>
            </ol>
          </div>
        </li>
        <li className="md:order-3 flex-1">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium text-[#CCCCCC] text-end">
              Contácto
            </h3>
            <div className="flex flex-col gap-1">
              <p className="text-[#CCCCCC] text-base text-end">
                <span className="block">+57 3113001827</span>
                <span className="block">(602) 3733886</span>
              </p>
              <p className="text-base text-[#CCCCCC] text-end">
                Administrativo@emcolmed.com.co
              </p>
              <p className="text-base text-[#CCCCCC] text-end">
                Avenida 6a Bis #35N – 100
                <span className="block">
                  Centro Empresarial Chipichape – Oficina 712
                </span>
                <span className="block">Santiago de Cali, Valle del Cauca</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </footer>
  );
};
