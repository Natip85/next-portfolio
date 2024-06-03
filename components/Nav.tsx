"use client";
import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { Link as RSLink } from "react-scroll";

interface NavProps {
  openNav: () => void;
}
export default function Nav({ openNav }: NavProps) {
  const [navSticky, setNavSticky] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  }, []);

  const stickyStyle = navSticky ? "bg-gray-900 shadow-stone-900 shadow-sm" : "";
  return (
    <div
      className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000]`}
    >
      <div className="flex items-center h-[10vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-yellow-400">NP</span>
          webDev
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <RSLink
              to="Hero"
              smooth={true}
              duration={500}
              activeClass="active"
              className="nav_link cursor-pointer"
            >
              Home
            </RSLink>
          </li>
          <li>
            <RSLink
              to="About"
              smooth={true}
              duration={1000}
              className="nav_link cursor-pointer"
            >
              About
            </RSLink>
          </li>
          <li>
            <RSLink
              to="Services"
              smooth={true}
              duration={1400}
              className="nav_link cursor-pointer"
            >
              Services
            </RSLink>
          </li>
          <li>
            <RSLink
              to="Projects"
              smooth={true}
              duration={1800}
              className="nav_link cursor-pointer"
            >
              Projects
            </RSLink>
          </li>
          <li>
            <RSLink
              to="Contact"
              smooth={true}
              duration={2000}
              className="nav_link cursor-pointer"
            >
              Contact
            </RSLink>
          </li>
        </ul>
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="cursor-pointer size-[2.3rem] md:hidden text-white rotate-180 "
        />
      </div>
    </div>
  );
}
