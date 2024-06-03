import { SparklesIcon, StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

interface ClientReviewsCardProps {
  image: string;
  user: string;
  role: string;
  description: string;
}

export default function ClientReviewsCard({
  image,
  user,
  role,
  description,
}: ClientReviewsCardProps) {
  return (
    <div className="m-2 hover:bg-gray-700 transition-all duration-300 rounded-lg">
      <div className="border-2 p-4 border-gray-700 rounded-xl">
        <Image
          src={`${image}`}
          alt={user}
          width={70}
          height={70}
          className="rounded-full mx-auto mt-[2rem] "
        />
        <div className="">
          <SparklesIcon className="size-[6rem] text-white opacity-15 fixed" />
        </div>
        <p className="text-[15px] text-white opacity-65 mt-[3rem] text-center w-[80%] mx-auto">
          {description}
        </p>
        <div className="flex items-center space-x-1 justify-center mt-[0.4rem]">
          <StarIcon className="size-[1.4rem] text-yellow-400" />
          <StarIcon className="size-[1.4rem] text-yellow-400" />
          <StarIcon className="size-[1.4rem] text-yellow-400" />
          <StarIcon className="size-[1.4rem] text-yellow-400" />
          <StarIcon className="size-[1.4rem] text-yellow-400" />
        </div>
        <div className="">
          <SparklesIcon className="size-[6rem] right-0 text-white opacity-15 fixed" />
        </div>
        <h1 className="text-[20px] text-center text-white mt-[2rem] font-medium">
          {user}
        </h1>
        <p className="text-yellow-400 text-[18px] text-center mb-[3rem]">
          {role}
        </p>
      </div>
    </div>
  );
}
