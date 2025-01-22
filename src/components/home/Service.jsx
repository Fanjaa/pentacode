const Service = () => {
  return (
    <>
      {/* Title */}
      <div className="flex flex-col border border-b-0 border-t-0 border-black top-16">
        <div className="flex flex-col gap-4 p-8 justify-center items-center">
          <h1 className="heading2 text-black text-center">Our Service</h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-2 flex-col border-t border-b">
          <div className="">
            <img src="https://placehold.co/400" width={400} alt="" />
          </div>

          <div className="flex flex-col  border-l border-black overflow-y-auto p-14 justify-center items-center text-center gap-4">
            <p className="overlines">Service</p>
            <h1 className="heading3">Flower Subcriptions</h1>
            <p className="body">
              Experience the convenience and savings of regular flower
              deliveries with our flexible subscription service - up to 30% more
              profitable than one-time purchases.
            </p>
            <button className="button border p-4 w-44 mt-8">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
