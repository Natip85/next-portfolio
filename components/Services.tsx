import ServicesCard from "./Helper/ServicesCard";
import { Element } from "react-scroll";

export default function Services() {
  return (
    <Element name="Services">
      <div className="pt-[5rem] pb-[3rem] bg-[#0b0c13]">
        Services
        <div className="text-center">
          <p className="heading_mini">Popular Services</p>
          <h1 className="heading_primary">
            My Special <span className="text-yellow-300">Services</span> For You
          </h1>
        </div>
        <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <ServicesCard
              title="React Website"
              description="Build dynamic and interactive user interfaces with React, a powerful JavaScript library for building component-based web applications with a focus on performance and scalability."
              num="01"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <ServicesCard
              title="Next JS Website"
              description="Create server-rendered and statically generated websites with Next.js, a React framework that enhances SEO, improves performance, and offers a seamless development experience."
              num="02"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
          >
            <ServicesCard
              title="Fullstack Website"
              description="Develop comprehensive web applications covering both frontend and backend, utilizing technologies like React for the frontend and Node.js/Express for the backend, ensuring a cohesive and robust solution."
              num="03"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="600"
          >
            <ServicesCard
              title="Node JS Api"
              description="Design and implement efficient, scalable backend services and APIs using Node.js, a JavaScript runtime that enables server-side development with high performance and event-driven architecture."
              num="04"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="800"
          >
            <ServicesCard
              title="MERN WebApp"
              description="Build full-featured web applications using the MERN stack (MongoDB, Express, React, Node.js), leveraging the strengths of each technology to deliver a seamless and responsive user experience."
              num="05"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="1000"
          >
            <ServicesCard
              title="Bug Fixing"
              description="Identify, diagnose, and resolve issues in your web applications to ensure optimal performance, security, and user experience, using a systematic approach to debugging and problem-solving."
              num="06"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}
