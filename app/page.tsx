"use client";
import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import PriceTable from "@/components/PriceTable";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { animateScroll as scroll, Button } from "react-scroll";
import { ArrowUpIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  //AOS animate setup
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="overflow-hidden">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={showNavHandler} />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
      {/* <PriceTable /> */}
      {/* <Reviews /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
      <a
        onClick={scrollToTop}
        className="cursor-pointer fixed bottom-6 left-5 text-white bg-white rounded-full p-1 opacity-60 shadow-lg border-[.2rem] border-gray-900"
      >
        <ArrowUpIcon className="text-black size-[1.7rem]" />
      </a>
    </div>
  );
}
