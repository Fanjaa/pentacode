const Intro = () => {
  return (
    <>
    {/* Left */}
      <div className="grid grid-rows-2 border border-t-0 border-black p-14 gap-4 sticky h-screen top-16">
        <div className="flex flex-col gap-2 border-b">
          <h1 className="heading1 text-black">Kyiv LuxeBouquets</h1>
          <h1 className="heading1 text-black"></h1>
          <p className="subtitle font-regular text-black">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:{" "}
            <span className="italic">
              Spread Joy with Our Online Flower Delivery Service
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <img src="https://placehold.co/400" alt="" />
          </div>
          <div className="flex border-l pl-4 items-end justify-end">
            <h1 className="caption">
              Experience the joy of giving with our modern floral studio. Order
              online and send fresh flowers, plants and gifts today.
            </h1>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="grid grid-cols-2 border border-t-0 border-l-0 border-black overflow-y-auto">
        <div className="relative flex flex-col border-b justify-between">
          <h1 className="heading3 text-center flex-1 flex items-center justify-center">
            Fresh Flowers
          </h1>
          <a
            className=" absolute links font-semibold bottom-0 mb-8 self-center"
            href="#"
          >
            Shop Now
          </a>
        </div>
        <div className="border-l border-b border-black">
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className="border-black">
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className="relative flex flex-col border-l border-black justify-between">
          <h1 className="heading3 text-center flex-1 flex items-center justify-center">
            Dried Flowers
          </h1>
          <a
            className=" absolute links font-semibold bottom-0 mb-8 self-center"
            href="#"
          >
            Shop Now
          </a>
        </div>
        <div className="relative flex flex-col border-b justify-between">
          <h1 className="heading3 text-center flex-1 flex items-center justify-center">
            Live Plants
          </h1>
          <a
            className=" absolute links font-semibold bottom-0 mb-8 self-center"
            href="#"
          >
            Shop Now
          </a>
        </div>
        <div className="border-l border-b border-black">
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className="border-b border-black">
          <img src="https://placehold.co/400" alt="" />
        </div>
        <div className="relative border-b flex flex-col border-l border-black justify-between">
          <h1 className="heading3 text-center flex-1 flex items-center justify-center">
            Aroma Candels
          </h1>
          <a
            className="absolute links font-semibold bottom-0 mb-8 self-center"
            href="#"
          >
            Shop Now
          </a>
        </div>
        <div className="relative flex flex-col justify-between">
          <h1 className="heading3 text-center flex-1 flex items-center justify-center">
            Live Plants
          </h1>
          <a
            className=" absolute links font-semibold bottom-0 mb-8 self-center"
            href="#"
          >
            Shop Now
          </a>
        </div>
        <div className="border-l border-black">
          <img src="https://placehold.co/400" alt="" />
        </div>
      </div>
    </>
  );
};

export default Intro;
