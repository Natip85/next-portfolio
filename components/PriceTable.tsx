import PriceTableCard from "./Helper/PriceTableCard";

export default function PriceTable() {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center">
        <p className="heading_mini">Popular Services</p>
        <h1 className="heading_primary">
          Best <span className="text-yellow-300">Pricing</span> For Your Project
        </h1>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]">
        <PriceTableCard plan="Basic" price="$10" save="25%" bg="bg-red-500" />
        <PriceTableCard
          plan="Popular"
          price="$20"
          save="35%"
          bg="bg-green-500"
        />
        <PriceTableCard
          plan="Premium"
          price="$35"
          save="45%"
          bg="bg-blue-500"
        />
      </div>
    </div>
  );
}
