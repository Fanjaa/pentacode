import { assets } from "../../assets/assets";

const Service = () => {
  return (
    <>
      {/* Title */}
      <div className="grid flex-col border border-b-0 border-t-0 border-black top-16 max-lg:grid-cols-1">
        <div className="flex flex-col gap-4 p-8 justify-center items-center max-md:items-start max-md:px-4">
          <h1 className="heading2 text-black text-center max-md:headingMobile2">Our Service</h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 flex-col border-t border-b max-lg:grid-cols-1">
          <div className="max-lg:border-b">
            <img className="w-full object-cover max-lg:object-top max-lg:h-[45vh]" src={assets.personWithFlowers} alt="Person With Flowers" />
          </div>

          <div className="flex flex-col  border-l border-black overflow-y-auto p-14 justify-center items-center text-center gap-4 max-lg:p-20 max-md:px-4">
            <p className="overlines max-md:overlinesMobile" data-aos="fade-up">Service</p>
            <h1 className="heading3 max-md:headingMobile3" data-aos="fade-up">Flower Subcriptions</h1>
            <p className="body max-md:bodyMobile" data-aos="fade-up">
              Experience the convenience and savings of regular flower
              deliveries with our flexible subscription service - up to 30% more
              profitable than one-time purchases.
            </p>
            <button className="button border p-4 w-44 mt-8 max-md:buttonMobile hover:bg-black hover:text-white" data-aos="fade-up">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
