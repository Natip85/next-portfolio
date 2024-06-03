import { CheckIcon } from "@heroicons/react/16/solid";

interface PriceTableCardProps {
  plan: string;
  save: string;
  price: string;
  bg: string;
}
export default function PriceTableCard({
  plan,
  save,
  price,
  bg,
}: PriceTableCardProps) {
  return (
    <div className="text-center rounded-lg bg-gray-900">
      <div className={`p-6 rounded-t-lg ${bg}`}>
        <h1 className="text-white text-[30px]">{plan}</h1>
        <p className="text-[16px] text-[#d7d7d7]">
          Try out the {plan} plan and save{" "}
          <span className="text-yellow-400">{save}</span>
        </p>
        <div className="flex justify-center items-end mt-[1rem] space-x-1">
          <h1 className="text-[40px] font-bold text-yellow-400">{price}</h1>
          <p className="text-white"> /Hour</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center space-x-3">
          <CheckIcon className="size-[1.4rem] text-yellow-400" />
          <p className="text-white text-[17px] opacity-80">Next JS Website</p>
        </div>
        <div className="flex items-center space-x-3">
          <CheckIcon className="size-[1.4rem] text-yellow-400" />
          <p className="text-white text-[17px] opacity-80">React JS Website</p>
        </div>
        <div className="flex items-center space-x-3">
          <CheckIcon className="size-[1.4rem] text-yellow-400" />
          <p className="text-white text-[17px] opacity-80">Fullstack Website</p>
        </div>
        <div className="flex items-center space-x-3">
          <CheckIcon className="size-[1.4rem] text-yellow-400" />
          <p className="text-white text-[17px] opacity-80">Authentication</p>
        </div>
      </div>
      <button className="mt-[1.5rem] px-8 py-4 bg-blue-600 text-white block w-[100%] hover:bg-blue-800 transition-all duration-300">
        Get Started
      </button>
    </div>
  );
}
