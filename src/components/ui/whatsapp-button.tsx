import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton = () => {
  return (
    <div className="flex justify-center items-center px-2 py-2  bottom-10 right-10 rounded-main fixed z-50 bg-green-500 rounded-xl">
      <a
        href="https://wa.me/573113001827"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-4xl text-white" />
      </a>
    </div>
  );
};
