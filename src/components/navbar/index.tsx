import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  links: Array<{ id: string; title: string; url: string }>;
}

interface MenuLinkProps {
  link: { id: string; title: string; url: string };
}

function Menu({ items }: { items: NavbarProps["links"] }) {
  return (
    <ul className="grid grid-flow-col gap-4 mx-auto md:mx-0 mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-8 lg:gap-12">
      {items.map((item) => (
        <MenuLink link={item} key={item.id} />
      ))}
    </ul>
  );
}

const MenuLink = ({ link }: MenuLinkProps) => {
  return (
    <li>
      <Link href={link.url} className="text-lg" passHref>
        {link.title}
      </Link>
    </li>
  );
};

export const Navbar = ({ links, ...props }: NavbarProps) => {
  return (
    <header
      className="static top-0 z-50 flex-shrink-0 py-4 bg-white shadow-md md:sticky"
      {...props}
    >
      <div className="container flex flex-col items-start justify-between px-6 mx-auto md:flex-row md:items-center">
        <Link href="/" className="mx-auto md:mx-0" passHref>
          <Image
            src="/logo_color.png"
            alt="Emcolmed Logo"
            width={200}
            height={200}
            className=""
            priority
          />
        </Link>
        {links ? <Menu items={links} /> : null}
      </div>
    </header>
  );
};
