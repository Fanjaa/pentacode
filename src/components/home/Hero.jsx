import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <>
      {/* Left */}
      <div className="grid grid-rows-2 border border-t-0 border-black px-14 gap-4 sticky h-[calc(100vh-4rem)] top-16 max-lg:static max-lg:h-auto max-md:p-4 lg:pb-8">
        <div className="flex flex-col justify-center border-b max-md:pb-4">
          <h1 className="heading1 text-black max-md:headingMobile1" data-aos="fade-up">Kyiv</h1>
          <h1 className="heading1 text-black max-md:headingMobile1" data-aos="fade-up">
            LuxeBouquets<sup className="heading3 max-md:headingMobile3">®</sup>
          </h1>
          <p className="subtitle font-regular text-black max-md:captionMobile" data-aos="fade-up">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:{" "}
            <span className="italic" data-aos="fade-up">
              Spread Joy with Our Online Flower Delivery Service
            </span>
          </p>
        </div>
        <div className="flex items-center max-lg:py-8 max-md:py-0">
          <div className="grid grid-cols-2 max-md:gap-0 mb-4 max-h-60 max-lg:max-h-96 max-lg:gap-0">
            <div className="flex items-center justify-center h-full w-full overflow-hidden pr-4 max-md:pr-0">
              <img
                data-aos="fade-up"
                className="object-cover w-full h-full max-lg:pr-4 max-md:pr-4"
                src={assets.imgHero}
                alt="Image Hero"
              />
            </div>
            <div className="flex border-l pl-4 items-end justify-end max-lg:pl-8 max-md:pl-4">
              <h1 className="caption max-md:captionSmall max-sm:font-regular" data-aos="fade-up">
                Experience the joy of giving with our modern floral studio.
                Order online and send fresh flowers, plants and gifts today.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="grid grid-cols-2 border border-t-0 border-l-0 border-black overflow-y-auto max-md:border-l">
        <div className="relative flex flex-col border-b justify-between">
          <h1 className="heading3 text-center flex-1 flex items-center justify-center max-md:headingMobile3">
            Fresh Flowers
          </h1>
          <a
            className="absolute flex gap-2 links font-semibold bottom-0 mb-8 self-center max-md:linksMobile hover:underline"
            href="#"
          >
            Shop Now <img src={assets.arrowRight} alt="Arrow Right" />
          </a>
        </div>
        <div className="border-l border-b border-black overflow-hidden">
          <a href=""><img className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-125" src={assets.freshFlowers} alt="Fresh Flowers"/></a>
        </div>
        <div className="border-b border-black overflow-hidden">
        <a href=""><img className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-125" src={assets.driedFlowers} alt="Dried Flowers" /></a>
        </div>
        <div className="relative flex flex-col border-l border-b border-black justify-between">
          <h1 className="heading3 text-center flex-1 flex items-center justify-center max-md:headingMobile3">
            Dried Flowers
          </h1>
          <a
            className=" absolute flex gap-2 links font-semibold bottom-0 mb-8 self-center max-md:linksMobile hover:underline"
            href="#"
          >
            Shop Now <img src={assets.arrowLeft} alt="Arrow Left" />
          </a>
        </div>
        <div className="relative flex flex-col border-b justify-between">
          <h1 className="heading3 text-center flex-1 flex items-center justify-center max-md:headingMobile3">
            Live Plants
          </h1>
          <a
            className=" absolute flex gap-2 links font-semibold bottom-0 mb-8 self-center hover:underline max-md:linksMobile"
            href="#"
          >
            Shop Now <img src={assets.arrowRight} alt="Arrow Right" />
          </a>
        </div>
        <div className="border-l border-b border-black overflow-hidden">
        <a href=""><img className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-125" src={assets.livePlants} alt="Live Plants" /></a>
        </div>
        <div className="border-b border-black overflow-hidden">
        <a href=""><img className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-125" src={assets.aromaCandels} alt="Aroma Candels" /></a>
        </div>
        <div className="relative border-b flex flex-col border-l border-black justify-between">
          <h1 className="heading3 text-center flex-1 flex items-center justify-center max-md:headingMobile3">
            Aroma Candels
          </h1>
          <a
            className="absolute flex gap-2 links font-semibold bottom-0 mb-8 self-center hover:underline max-md:linksMobile"
            href="#"
          >
            Shop Now <img src={assets.arrowLeft} alt="Arrow Left" />
          </a>
        </div>
        <div className="relative flex flex-col justify-between">
          <h1 className="heading3 text-center flex-1 flex items-center justify-center max-md:headingMobile3">
            Freshners
          </h1>
          <a
            className="absolute flex gap-2 links font-semibold bottom-0 mb-8 self-center hover:underline max-md:linksMobile"
            href="#"
          >
            Shop Now <img src={assets.arrowRight} alt="Arrow Right" />
          </a>
        </div>
        <div className="border-l border-black overflow-hidden">
          <a href=""><img className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-125" src={assets.freshners} alt="Freshners" /></a>
        </div>
      </div>
    </>
  );
};

export default Hero;
