import Image from "next/image";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech1?: string;
  tech2?: string;
  tech3?: string;
  tech4?: string;
  link?: string;
}

export default function ProjectsCard({
  image,
  title,
  description,
  tech1,
  tech2,
  tech3,
  tech4,
  link,
}: ProjectCardProps) {
  return (
    <div className="grid w-[70%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <a href={link} target="_blank">
        <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all duration-300 bg-gray-800 shadow-md">
          <Image
            src={`${image}`}
            alt={title}
            width={500}
            height={500}
            className="h-[450px] object-contain rounded-xl mx-auto shadow-md"
          />
        </div>
      </a>
      <div className="">
        <h1 className="text-[25px] text-white">{title}</h1>
        <p className="text-white opacity-65 text-[15px] mt-[1rem]">
          {description}
        </p>
        <div className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
          <h1 className="px-2 py-3 bg-blue-700 text-white rounded-lg text-center text-sm">
            {tech1}
          </h1>
          <h1 className="px-2 py-3 bg-white text-black rounded-lg text-center text-sm">
            {tech2}
          </h1>
          <h1 className="px-2 py-3 bg-sky-500 text-black rounded-lg text-center text-sm">
            {tech3}
          </h1>
          <h1 className="px-2 py-3 bg-blue-500 text-white rounded-lg text-center text-sm">
            {tech4}
          </h1>
        </div>
      </div>
    </div>
  );
}
