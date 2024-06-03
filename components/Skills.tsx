import SkillsCard from "./Helper/SkillsCard";
import { Button } from "react-scroll";

export default function Skills() {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
        <div className="col-span-3">
          <p className="heading_mini">My Skills</p>
          <h1 className="heading_primary">
            Let&apos;s explore popular{" "}
            <span className="text-yellow-300">Skills</span> & Experience
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
            Over the past few years, I have honed my skills in various modern
            web development technologies. From building dynamic, user-friendly
            interfaces with React and managing application state with Redux, to
            creating responsive layouts with CSS and HTML. I have a solid grasp
            of JavaScript and TypeScript, enabling me to write clean,
            maintainable code. On the backend, I utilize Node.js and MongoDB to
            develop scalable server-side applications and databases. Each of
            these skills contributes to my ability to deliver comprehensive and
            robust web solutions tailored to meet specific client needs.
          </p>
          <Button
            to="Contact"
            duration={2000}
            className="relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 "
          >
            <span className="relative z-10">Learn More</span>
          </Button>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
              <SkillsCard
                title="React"
                image="/images/react.svg"
                percent="80%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
            >
              <SkillsCard title="CSS" image="/images/css.svg" percent="70%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
            >
              <SkillsCard
                title="JavaScript"
                image="/images/js.svg"
                percent="70%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
            >
              <SkillsCard
                title="TypeScript"
                image="/images/ts.svg"
                percent="75%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="800"
            >
              <SkillsCard title="HTML" image="/images/html.svg" percent="77%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1000"
            >
              <SkillsCard
                title="Node JS"
                image="/images/node.svg"
                percent="72%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1200"
            >
              <SkillsCard
                title="MongoDB"
                image="/images/mongo.svg"
                percent="65%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
