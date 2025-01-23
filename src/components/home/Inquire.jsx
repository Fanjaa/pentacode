const Inquire = () => {
  return (
    <>
      <div className="relative flex flex-col border-black p-14 text-center justify-center items-center h-screen w-full bg-wedding bg-cover bg-top bg-fixed">
        <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center gap-4 w-1/2 max-lg:w-[40vh]">
          <p className="overlines max-md:overlinesMobile">Service</p>
          <h1 className="heading3 max-md:headingMobile3">
            Wedding & Event Decor
          </h1>
          <p className="body px-14 max-md:bodyMobile max-md:px-0">
            Let our team of expert florists and designers create stunning,
            on-trend floral décor for your special day. Trust us to bring your
            vision to life.
          </p>
          <button className="button border p-4 w-44 mt-8 max-md:buttonMobile">
            Inquire Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Inquire;
