const About = () => {
  return (
    <>
      {/* Left */}
      <div className="border border-t-0 border-black p-14 gap-4 sticky top-16">
        <div className="flex ">
          <h1 className="heading2 text-black">About us</h1>
        </div>
      </div>

      {/* Right */}
      <div className="border border-t-0 border-l-0 border-black overflow-y-auto">
        <div className="relative flex flex-col justify-between p-14 gap-4">
          <p className="overlines">our story</p>
          <h1 className="heading3">Kyiv LuxeBouquets</h1>
          <p className="body">
            We are a modern local floral studio, which specializes in the design
            and delivery of unique bouquets. We have the best florists who
            carefully select each look, our studio cooperates directly with
            farms for growing different flowers, so we always have fresh
            flowers, which are collected by our florists in exquisite bouquets.
            We have a collection of fresh bouquets, collections of dried
            bouquets, house plants, as well as fragrant candles from luxury
            brands to create the perfect atmosphere. Make someone&apos;s day
            amazing by sending flowers, plants and gifts the same or next day.
            Ordering flowers online has never been easier.
          </p>
          <button className="button border p-4 w-44 mt-8">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default About;
