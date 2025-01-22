const Client = () => {
  return (
    <>
      <div className="flex flex-col  border-black text-center justify-center items-center py-24 border border-t-0 w-full">
        <div className="flex flex-col justify-center items-center gap-4">
            <p className="overlines">Reviews</p>
            <h1 className="heading3">Our Clients say</h1>
            <p className="body text-[32px] px-24">
            Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.
            </p>
            <p>– Ronald Richards</p>
            <p>....</p>
            <button className="button border p-4 w-44 mt-8">Read Reviews</button>
        </div>
      </div>      
    </>
  )
}

export default Client
