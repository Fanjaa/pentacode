import { assets } from "../../assets/assets";
import { useState } from "react";

const reviews = [
  {
    text: "Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!",
    name: "Ronald Richards",
  },
  {
    text: "Amazing service and beautiful flowers! They delivered on time and exceeded my expectations.",
    name: "Jenny Wilson",
  },
  {
    text: "Great experience! The flowers were fresh and arranged beautifully. Will order again!",
    name: "Cameron Williamson",
  },
];

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="flex flex-col border-black text-center justify-center items-center py-24 border border-t-0 w-full max-md:px-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-2">
          <img src={assets.google} alt="Google Icon" />
          <p className="overlines max-md:overlinesMobile">Reviews</p>
        </div>
        <h1 className="heading2 font-semibold max-md:headingMobile2 max-md:font-semibold">Our Clients say</h1>
        <div className="flex items-center gap-4">
          <button className="button p-4 w-20  hover:text-white ml-8 max-lg:hidden" onClick={handlePrev}>
            <img src={assets.arrowLeftNew} alt="Arrow Left" />
          </button>
          <p className="body text-[32px] px-20 max-lg:px-16 max-md:text-[22px] max-md:px-0">
            “{reviews[currentIndex].text}”
          </p>
          <button className="button p-4 w-20 hover:text-white mr-8 max-lg:hidden" onClick={handleNext}>
            <img src={assets.arrowRightNew} alt="Arrow Right" />
          </button>
        </div>
        <p className="body font-medium max-md:bodyMobile max-md:font-medium">– {reviews[currentIndex].name}</p>
        <div className="flex gap-2 mt-4">
          {reviews.map((_, index) => (
            <span key={index} className={`h-1 w-1 rounded-full ${index === currentIndex ? 'bg-gray' : 'bg-lightGray'}`}></span>
          ))}
        </div>
        <button className="button border p-4 w-44 mt-8 max-md:buttonMobile max-md:w-full hover:bg-black hover:text-white">Read Reviews</button>
      </div>
    </div>
  );
};

export default Client;
