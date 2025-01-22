const Contact = () => {
  return (
    <>
      {/* Left */}
      <div className="grid grid-rows-2 border border-t-0 border-black gap-4 sticky h-screen top-16">
        <div className="flex flex-col gap-4 p-14">
          <h1 className="heading2 text-black">To Contact Us</h1>
          <p className="subtitle">We will call you back</p>
          <div className="flex gap-4">
            <input className="button border p-4 text-center w-1/2" placeholder="+380 xx xxx xx xx"></input>
            <button className="button border p-4 w-1/2 bg-black text-white">Book a call</button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 flex-col border-t">
          <div className="flex flex-col border-r">
          <h1 className="heading3 border-b text-black text-center py-2">Phone</h1>
          <div className="flex flex-col gap-4 text-center justify-center h-full">
            <p className="links font-semibold">+380980099777</p>
            <p className="links font-semibold">+380980099111</p>
          </div>
          </div>
          <div className="flex flex-col">
          <h1 className="heading3 border-b text-black text-center py-2">Address</h1>
          <div className="flex flex-col gap-4 text-center justify-center h-full">
            <p className="links">opening hours: 8 to 11 p.m.</p>
            <p className="links font-semibold">15/4 Khreshchatyk Street, Kyiv</p>
          </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="border border-t-0 border-l-0 border-black overflow-y-auto">
        <div className="relative flex flex-col justify-between">
            <img className="border-b" src="https://placehold.co/400" alt="" />
          <div className="grid grid-cols-2">
            <div className="border-r">
              <p className="heading3 text-center py-2">Follow us</p>
            </div>
            <div className="flex gap-4 items-center justify-center">
              <img src="https://placehold.co/400" width={40} alt="" />
              <img src="https://placehold.co/400" width={40} alt="" />
              <img src="https://placehold.co/400" width={40} alt="" />
              <img src="https://placehold.co/400" width={40} alt="" />
              <img src="https://placehold.co/400" width={40} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
