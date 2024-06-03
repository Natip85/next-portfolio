import ReviewSlider from "./Helper/ReviewSlider";

export default function Reviews() {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center">
        <p className="heading_mini">Client Reviews</p>
        <h1 className="heading_primary">
          See My <span className="text-yellow-300">20+</span> Client Feedbacks
        </h1>
      </div>
      <div className="w-[80%] pt-[3rem] md:pt-[5rem] mx-auto">
        <ReviewSlider />
      </div>
    </div>
  );
}
