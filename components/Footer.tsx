import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { Link as RSLink } from "react-scroll";

export default function Footer() {
  const email = "nati.peretz1985@gmail.com";

  return (
    <div className="pt-[5rem] bg-gray-900 pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div className="">
          <div className="font-logo text-white text-[18px] ">
            <span className="text-[30px] md:text-[40px] text-yellow-400">
              NP
            </span>{" "}
            WebDev
          </div>
          <h1 className="text-[14px] my-[0.5rem] text-white opacity-70">
            Dedicated to delivering high-quality web development services, NP
            WebDev is your partner in creating stunning and functional websites.
            Let&apos;s build something amazing together.
          </h1>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Quick Link
          </h1>
          <RSLink
            to="Hero"
            smooth={true}
            duration={500}
            activeClass="active"
            className="nav_link text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer"
          >
            Home
          </RSLink>
          <RSLink
            to="About"
            smooth={true}
            duration={500}
            activeClass="active"
            className="nav_link text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer"
          >
            About
          </RSLink>
          <RSLink
            to="Services"
            smooth={true}
            duration={500}
            activeClass="active"
            className="nav_link text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer"
          >
            Services
          </RSLink>
          <RSLink
            to="Projects"
            smooth={true}
            duration={500}
            activeClass="active"
            className="nav_link text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer"
          >
            Projects
          </RSLink>
          <RSLink
            to="Contsct"
            smooth={true}
            duration={500}
            activeClass="active"
            className="nav_link text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer"
          >
            Contact
          </RSLink>
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Address
          </h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <MapIcon className="size-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              Rishone LeZion, Israel
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="size-[1rem] text-yellow-300" />

            <a
              href={`mailto:${email}`}
              className="text-[17px] font-normal text-white opacity-75"
            >
              {email}
            </a>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="size-[1rem] text-yellow-300" />

            <a
              href="tel:+972527533703"
              className="text-[17px] font-normal text-white opacity-75"
            >
              +972 52 753 3703
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
        NPwebDev {new Date().getFullYear()}
      </div>
    </div>
  );
}
