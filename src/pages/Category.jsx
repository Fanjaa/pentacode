import { assets } from "../assets/assets";

const Category = () => {
  return (
    <section id="hero" className="grid grid-cols-2 max-lg:grid-cols-1">
      {/* Left */}
      <div className="flex border border-r-0 justify-center items-center bg-freshFlowers bg-center bg-cover border-t-0 border-black bg px-14 gap-4 sticky h-[calc(100vh-4rem)] top-16 max-lg:static max-md:p-4 lg:pb-8 max-lg:h-[40vh]">
        <div className="absolute inset-0 bg-black opacity-35"></div>
        <h1 className="heading1 text-white z-10">Fresh Flower</h1>
      </div>

      {/* Right */}
      <div className="grid grid-cols-2 border border-t-0 border-l-0 border-black overflow-y-auto max-md:border-l max-md:grid-cols-1">
        <div className="border-l border-b border-black overflow-hidden relative">
          <a href="#" className="block relative">
            <img
              className="object-cover w-full h-full aspect-[3/4]"
              src={assets.snowfall}
              alt="Fresh Flowers"
            />
            <div className="absolute inset-0 flex flex-col gap-1 justify-end items-center text-white text-center p-4">
              <p className="links text-black max-md:linksMobile">Snowfall</p>
              <p className="caption font-medium text-gray max-md:captionMobile max-md:font-medium">
                Price $70
              </p>
            </div>
          </a>
        </div>
        <div className="border-l border-b border-black overflow-hidden relative">
          <a href="#" className="block relative">
            <img
              className="object-cover w-full h-full aspect-[3/4]"
              src={assets.dawnsDelight}
              alt="Fresh Flowers"
            />
            <div className="absolute inset-0 flex flex-col gap-1 justify-end items-center text-white text-center p-4">
              <p className="links text-black max-md:linksMobile">Dawn&apos;s Delight</p>
              <p className="caption font-medium text-gray max-md:captionMobile max-md:font-medium">
                Price $70
              </p>
            </div>
          </a>
        </div>
        <div className="border-l border-b border-black overflow-hidden relative">
          <a href="#" className="block relative">
            <img
              className="object-cover w-full h-full aspect-[3/4]"
              src={assets.pinkElegance}
              alt="Fresh Flowers"
            />
            <div className="absolute inset-0 flex flex-col gap-1 justify-end items-center text-white text-center p-4">
              <p className="links text-black max-md:linksMobile">Pink Elegance</p>
              <p className="caption font-medium text-gray max-md:captionMobile max-md:font-medium">
                Price $70
              </p>
            </div>
          </a>
        </div>
        <div className="border-l border-b border-black overflow-hidden relative">
          <a href="#" className="block relative">
            <img
              className="object-cover w-full h-full aspect-[3/4]"
              src={assets.rusticCharm}
              alt="Fresh Flowers"
            />
            <div className="absolute inset-0 flex flex-col gap-1 justify-end items-center text-white text-center p-4">
              <p className="links text-black max-md:linksMobile">Rustic Charm</p>
              <p className="caption font-medium text-gray max-md:captionMobile max-md:font-medium">
                Price $70
              </p>
            </div>
          </a>
        </div>
        <div className="border-l border-b border-black overflow-hidden relative">
          <a href="#" className="block relative">
            <img
              className="object-cover w-full h-full aspect-[3/4]"
              src={assets.autumnSymphony}
              alt="Fresh Flowers"
            />
            <div className="absolute inset-0 flex flex-col gap-1 justify-end items-center text-white text-center p-4">
              <p className="links text-black max-md:linksMobile">Autumn Symphony</p>
              <p className="caption font-medium text-gray max-md:captionMobile max-md:font-medium">
                Price $70
              </p>
            </div>
          </a>
        </div>
        <div className="border-l border-b border-black overflow-hidden relative">
          <a href="#" className="block relative">
            <img
              className="object-cover w-full h-full aspect-[3/4]"
              src={assets.rosyDelightCategory}
              alt="Fresh Flowers"
            />
            <div className="absolute inset-0 flex flex-col gap-1 justify-end items-center text-white text-center p-4">
              <p className="links text-black max-md:linksMobile">Rosy Delight</p>
              <p className="caption font-medium text-gray max-md:captionMobile max-md:font-medium">
                Price $70
              </p>
            </div>
          </a>
        </div>
        <div className="border-l border-b border-black overflow-hidden relative">
          <a href="#" className="block relative">
            <img
              className="object-cover w-full h-full aspect-[3/4]"
              src={assets.serenity}
              alt="Fresh Flowers"
            />
            <div className="absolute inset-0 flex flex-col gap-1 justify-end items-center text-white text-center p-4">
              <p className="links text-black max-md:linksMobile">Serenity</p>
              <p className="caption font-medium text-gray max-md:captionMobile max-md:font-medium">
                Price $70
              </p>
            </div>
          </a>
        </div>
        <div className="border-l border-b border-black overflow-hidden relative">
          <a href="#" className="block relative">
            <img
              className="object-cover w-full h-full aspect-[3/4]"
              src={assets.blueHarmony}
              alt="Fresh Flowers"
            />
            <div className="absolute inset-0 flex flex-col gap-1 justify-end items-center text-white text-center p-4">
              <p className="links text-black max-md:linksMobile">Blue Harmony</p>
              <p className="caption font-medium text-gray max-md:captionMobile max-md:font-medium">
                Price $70
              </p>
            </div>
          </a>
        </div>
        <div className="border-l max-md:border-b border-black overflow-hidden relative">
          <a href="#" className="block relative">
            <img
              className="object-cover w-full h-full aspect-[3/4]"
              src={assets.mysticalMajesty}
              alt="Fresh Flowers"
            />
            <div className="absolute inset-0 flex flex-col gap-1 justify-end items-center text-white text-center p-4">
              <p className="links text-black max-md:linksMobile">Mystical Majesty</p>
              <p className="caption font-medium text-gray max-md:captionMobile max-md:font-medium">
                Price $70
              </p>
            </div>
          </a>
        </div>
        <div className="border-l border-black overflow-hidden relative">
          <a href="#" className="block relative">
            <img
              className="object-cover w-full h-full aspect-[3/4]"
              src={assets.blazingBlossoms}
              alt="Fresh Flowers"
            />
            <div className="absolute inset-0 flex flex-col gap-1 justify-end items-center text-white text-center p-4">
              <p className="links text-black max-md:linksMobile">Blazing Blossoms</p>
              <p className="caption font-medium text-gray max-md:captionMobile max-md:font-medium">
                Price $70
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Category;
