import { assets } from "../../assets/assets"

const Contact = () => {
  return (
    <>
      {/* Left */}
      <div className="grid grid-rows-2 border border-t-0 border-black gap-4 sticky top-16 max-lg:static max-lg:h-auto max-lg:order-2">
        <div className="flex flex-col gap-4 p-14 max-lg:p-20 max-lg:gap-6 max-md:px-4 max-md:py-8">
          <h1 className="heading2 text-black max-md:headingMobile2">To Contact Us</h1>
          <p className="subtitle max-md:subtitleMobile">We will call you back</p>
          <div className="flex gap-4 max-md:flex-col">
            <input className="button border border-lightGray p-4 text-center w-1/2 max-md:w-full" placeholder="+380 xx xxx xx xx"></input>
            <button className="button border p-4 w-1/2 bg-black text-white max-md:w-full hover:bg-transparent hover:text-black">Book a call</button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 flex-col border-t max-md:grid-cols-1">
          <div className="flex flex-col border-r">
          <h1 className="heading3 border-b text-black text-center py-2 max-md:headingMobile3 max-md:font-medium  max-md:text-start max-md:px-4">Phone</h1>
          <div className="flex flex-col gap-4 text-center justify-center h-full max-md:text-start max-md:px-4 max-md:py-8">
            <div className="flex gap-2 items-center justify-center max-md:justify-start">
              <img src={assets.phone} alt="phone icon" />
              <p className="links font-semibold max-md:linksMobile max-md:font-semibold">+380980099777</p>
            </div>
            <div className="flex gap-2 items-center justify-center max-md:justify-start">
              <img src={assets.phone} alt="phone icon" />
              <p className="links font-semibold max-md:linksMobile max-md:font-semibold">+380980099111</p>
            </div>
          </div>
          </div>
          <div className="flex flex-col">
          <h1 className="heading3 border-b text-black text-center py-2 max-md:border-t max-md:headingMobile3 max-md:font-medium max-md:text-start max-md:px-4">Address</h1>
          <div className="flex flex-col gap-4 text-center justify-center h-full max-md:text-start max-md:px-4 max-md:py-8">
            <p className="links max-md:linksMobile">opening hours: 8 to 11 p.m.</p>
            <div className="flex gap-2 items-center justify-center max-md:justify-start">
              <img src={assets.location} alt="Location Icon" />
              <p className="links font-semibold max-md:linksMobile max-md:font-semibold">15/4 Khreshchatyk Street, Kyiv</p>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="border border-t-0 border-l-0 border-black max-lg:order-1">
        <div className="relative flex flex-col justify-between">
            <img className="border-b object-cover max-lg:h-[40vh]" src={assets.kyivLuxe} alt="Kyiv Luxe" />
          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:border-l">
            <div className="border-r max-md:border-r-0">
              <p className="heading3 text-center py-2 max-md:text-headingMobile3 max-md:text-start max-md:p-4">Follow us</p>
            </div>
            <div className="flex gap-8 items-center justify-center max-md:justify-start max-md:p-4 max-md:pt-0">
              <a href="#"><img src={assets.instagram} alt="Instagram Icon" /></a>
              <a href="#"><img src={assets.pinteres} alt="Pinteres Icon" /></a>
              <a href="#"><img src={assets.facebook} alt="Facebook Icon" /></a>
              <a href="#"><img src={assets.twitter} alt="Twitter Icon" /></a>
              <a href="#"><img src={assets.telegram} alt="Telegram Icon" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
