import { assets } from "../../assets/assets"

const Client = () => {
  return (
    <>
      <div className="flex flex-col  border-black text-center justify-center items-center py-24 border border-t-0 w-full max-md:px-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col gap-2">
            <img src={assets.google} alt="Google Icon" />
            <p className="overlines max-md:overlinesMobile">Reviews</p>
          </div>
          <h1 className="heading2 font-semibold max-md:headingMobile2 max-md:font-semibold">Our Clients say</h1>
          <p className="body text-[32px] px-24 max-lg:px-20 max-md:text-[22px] max-md:px-0">
          “Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”
          </p>
          <p className="body font-medium max-md:bodyMobile max-md:font-medium">– Ronald Richards</p>
          <p>....</p>
          <button className="button border p-4 w-44 mt-8 max-md:buttonMobile max-md:w-full">Read Reviews</button>
        </div>
      </div>      
    </>
  )
}

export default Client
