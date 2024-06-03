import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";

export default function Footer() {
  return (
    <div className="pt-[5rem] bg-black pb-[3rem]">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div className="">
          <div className="font-logo text-white text-[18px] ">
            <span className="text-[30px] md:text-[40px] text-yellow-400">
              NP
            </span>{" "}
            WebDev
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            in iure, quidem minima nemo mollitia qui accusamus reprehenderit
            ratione eveniet earum saepe nobis illo delectus ducimus deleniti sed
            tempore. Voluptate?
          </h1>
          <p className="mt-[1.3rem] text-yellow-300 underline font-semibold">
            nati.peretz1985@gmail.com
          </p>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Quick Link
          </h1>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            About
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            Services
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            Projects
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            Contact
          </p>
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
            <p className="text-[17px] font-normal text-white opacity-75">
              nati.peretz1985@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="size-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              +972 52 753 3703{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
        &#169; Copyright NPwebDev 2024
      </div>
    </div>
  );
}
