"use client";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { Link as RSLink } from "react-scroll";

interface NavMobileProps {
  showNav: boolean;
  closeNav: () => void;
}
export default function NavMobile({ showNav, closeNav }: NavMobileProps) {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}
      ></div>
      <ul
        className={`text-white ${navOpenStyle} fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[60%] bg-red-600 space-y-14 z-[10006]`}
      >
        <li>
          <RSLink
            onClick={closeNav}
            to="Hero"
            smooth={true}
            duration={1400}
            className="nav_link cursor-pointer text-[25px] sm:text-[30px]"
          >
            Home
          </RSLink>
        </li>
        <li>
          <RSLink
            onClick={closeNav}
            to="About"
            smooth={true}
            duration={1400}
            className="nav_link cursor-pointer text-[25px] sm:text-[30px]"
          >
            About
          </RSLink>
        </li>
        <li>
          <RSLink
            onClick={closeNav}
            to="Services"
            smooth={true}
            duration={1400}
            className="nav_link cursor-pointer text-[25px] sm:text-[30px]"
          >
            Services
          </RSLink>
        </li>
        <li>
          <RSLink
            onClick={closeNav}
            to="Projects"
            smooth={true}
            duration={1400}
            className="nav_link cursor-pointer text-[25px] sm:text-[30px]"
          >
            Projects
          </RSLink>
        </li>
        <li>
          <RSLink
            onClick={closeNav}
            to="Contact"
            smooth={true}
            duration={1400}
            className="nav_link cursor-pointer text-[25px] sm:text-[30px]"
          >
            Contact
          </RSLink>
        </li>
        <XMarkIcon
          onClick={closeNav}
          className="cursor-pointer absolute top-[-1.4rem] right-[1.4rem] size-[2.2rem] text-white"
        />
      </ul>
    </div>
  );
}
