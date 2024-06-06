"use client";
import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import { Link as RSLink } from "react-scroll";
import {
  useMotionValueEvent,
  motion,
  useScroll,
  Variants,
} from "framer-motion";
interface NavProps {
  openNav: () => void;
}
export default function Nav({ openNav }: NavProps) {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 180) {
      setHidden(difference > 0);
      lastYRef.current = y;
    }
  });
 

  return (
   <div>
    <motion.div
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      whileHover={hidden ? "peeking" : "visible"}
      onFocusCapture={hidden ? () => setHidden(false) : undefined}
      variants={
        {
          visible: { y: "0%" },
          hidden: { y: "-75%" },
          peeking: { y: "0%", cursor: "pointer" },
        } as Variants
      }
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-[1000] w-full justify-center pt-3 md:flex hidden items-center space-x-10"
    >
      <nav
        className="flex items-center justify-between gap-10 rounded-3xl bg-gray-700 p-5 *:rounded-xl  
      "
      >

        <div className="font-logo text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-yellow-400">NP</span>
          webDev
        </div>

        <RSLink
          to="Hero"
          smooth={true}
          duration={500}
          activeClass="active"
          className="nav_link cursor-pointer"
        >
          Home
        </RSLink>

        <RSLink
          to="About"
          smooth={true}
          duration={1000}
          className="nav_link cursor-pointer"
        >
          About
        </RSLink>

        <RSLink
          to="Services"
          smooth={true}
          duration={1400}
          className="nav_link cursor-pointer"
        >
          Services
        </RSLink>

        <RSLink
          to="Projects"
          smooth={true}
          duration={1800}
          className="nav_link cursor-pointer"
        >
          Projects
        </RSLink>

        <RSLink
          to="Contact"
          smooth={true}
          duration={2000}
          className="nav_link cursor-pointer"
        >
          Contact
        </RSLink>
      </nav>
   
    </motion.div>
    <div className="md:hidden fixed top-0 left-0 right-0 z-[1001] flex items-center justify-end p-3">
         <Bars3CenterLeftIcon
           onClick={openNav}
           className="cursor-pointer size-[2.3rem] md:hidden text-white rotate-180 "
         />
      </div>
  </div>
  );
}
