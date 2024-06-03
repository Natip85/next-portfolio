import ProjectsCard from "./Helper/ProjectsCard";
import { Element } from "react-scroll";

export default function Projects() {
  return (
    <Element name="Projects">
      <div className="pt-[5rem] pb-[3rem] bg-gray-900">
        <div className="text-center">
          <p className="heading_mini">Recent Works</p>
          <h1 className="heading_primary">
            My Best <span className="text-yellow-300">Projects</span>
          </h1>
        </div>
        <ProjectsCard
          title="A Free Blog Website"
          description="Yarcone.com is an innovative platform that empowers users to share their stories, ideas, and expertise with a global audience. Featuring a seamless user experience, Yarcone.com offers a rich text editor for creating beautifully formatted articles, dynamic feeds for discovering diverse content, and robust engagement tools like comments, likes, and shares. With a focus on user-centric design and community building, Yarcone.com fosters a vibrant space for writers and readers to connect and inspire each other. Leveraging cutting-edge technologies, the platform ensures a responsive, secure, and high-performance environment for all its users."
          tech1="React"
          tech2="Next JS"
          tech3="Tailwind"
          tech4="TypeScript"
          image="/images/yarcone.png"
          link="https://www.yarcone.com"
        />

        <ProjectsCard
          title="Vacation booking app"
          description="Discover seamless travel planning with my vacation booking app, an intuitive platform designed to simplify the process of finding and reserving your perfect getaway. Users can effortlessly browse a wide range of destinations, accommodations, and travel packages, all presented with rich, detailed information and vibrant images. The app features secure booking, real-time availability updates, and personalized recommendations based on user preferences. With a user-friendly interface and comprehensive search options, our vacation booking app ensures that planning your next vacation is as enjoyable as the trip itself."
          tech1="React"
          tech2="Next JS"
          tech3="Tailwind"
          tech4="TypeScript"
          image="/images/booking-site.png"
          link="https://nextjs-vacabookingapp.vercel.app"
        />
      </div>
    </Element>
  );
}
