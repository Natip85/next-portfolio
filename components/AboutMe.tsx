import { CheckIcon } from "@heroicons/react/16/solid";
import { Element } from "react-scroll";

export default function AboutMe() {
  return (
    <Element name="About">
      <div className="mt-[-4rem] bg-black pb-[3rem]">
        <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
          <div>
            <p className="heading_mini">About Me</p>
            <h1 className="heading_primary">
              Professional <span className="text-yellow-400">Website</span> for
              your bussiness
            </h1>
            <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
              I&apos;m Natanel Peretz, a web developer with 3+ years of
              experience in full-stack Web development. I specialize in Next JS
              and have a passion for creating responsive user interfaces,
              developing robust backend systems. My journey in web development
              started with a fascination for the internet&apos;s potential and a
              love for problem solving. Since then, I&apos;ve worked on projects
              ranging from e-commerce platforms to web applications, always
              aiming to deliver top-notch user experiences. When I&apos;m not
              coding, I enjoy platyingcard games and and a huge NBA fan.
              Let&apos;s connect and create something amazing together!
            </p>
            <div className="mt-[2rem] space-y-3">
              <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Frontend Development</p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Backend Development</p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">Web Development</p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
                <p className="text-[18px] text-white">MERN Development</p>
              </div>
            </div>
          </div>
          <div className="lg:ml-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                className="p-6 text-center bg-yellow-500"
              >
                <p className="text-[50px] text-black font-bold">3</p>
                <p className="text-[20px] text-black font-600">
                  Years experience
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200"
                className="p-6 text-center bg-yellow-500"
              >
                <p className="text-[50px] text-black font-bold">20+</p>
                <p className="text-[20px] text-black font-600">Happy Clients</p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="400"
                className="p-6 text-center bg-yellow-500"
              >
                <p className="text-[50px] text-black font-bold">50+</p>
                <p className="text-[20px] text-black font-600">Projects done</p>
              </div>
              {/* <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="600"
                className="p-6 text-center bg-yellow-500"
              >
                <p className="text-[50px] text-black font-bold">2</p>
                <p className="text-[20px] text-black font-600">Awards won</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
