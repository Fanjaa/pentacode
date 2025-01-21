
const Home = () => {
  return (
    <section id="home" className="grid grid-cols-2 min-h-screen">
        {/* Grid Left */}
        <div className="grid grid-rows-2 border-2 border-black p-8 gap-4">
            <div className="flex flex-col justify-center gap-8 border-b-4">
                <h1 className="text-6xl font-semibold">Kyiv</h1>
                <h1 className="text-6xl font-semibold">LuxeBouquets</h1>
                <p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center">
                    <img src="https://placehold.co/400" alt=""/>
                </div>
                <div className="flex border-l-4 pl-4 items-end justify-end">
                    <h1>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</h1>
                </div>
            </div>
        </div>
        {/* Grid Right */}
        <div className="grid grid-cols-2 border-2 border-black">
            <div className="flex border border-black items-center text-center">
                <h1 className="text-6xl font-medium">Fresh Flowers</h1>
            </div>
            <div className="border border-black">
                <img src="https://placehold.co/400" alt="" />
            </div>
            <div className="border border-black">
                <img src="https://placehold.co/400" alt="" />
            </div>
            <div className="flex border border-black items-center text-center">
                <h1 className="text-6xl font-medium">Dried Flowers</h1>
            </div>
        </div>
    </section>
  )
}

export default Home
