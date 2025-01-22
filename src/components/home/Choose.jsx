const Choose = () => {
  return (
    <>
      {/* Left */}
      <div className="border border-t-0 border-black p-14 gap-4 sticky h-screen top-16">
        <div className="flex ">
          <h1 className="heading2 text-black">Why choose us ?</h1>
        </div>
      </div>

      {/* Right */}
      <div className="grid grid-rows-4 border border-t-0 border-l-0 border-black overflow-y-auto">
        <div className="relative flex flex-col border-b justify-between p-14 gap-4">
          <h1 className="heading3">
          Stylish bouquets by florists
          </h1>
          <p className="body">At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.</p>
        </div>
        <div className="relative flex flex-col border-b justify-between p-14 gap-4">
          <h1 className="heading3">
          On-time delivery
          </h1>
          <p className="body">Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.</p>
        </div>
        <div className="relative flex flex-col border-b justify-between p-14 gap-4">
          <h1 className="heading3">
          Safe payment
          </h1>
          <p className="body">You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.</p>
        </div>
        <div className="relative flex flex-col justify-between p-14 gap-4">
          <h1 className="heading3">
          Subscription by your needs
          </h1>
          <p className="body">With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You&apos;ll save time and money with this hassle-free solution to your floral needs.</p>
        </div>
      </div>
    </>
  )
}

export default Choose
