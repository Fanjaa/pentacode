const Footer = () => {
  return (
    <footer className="grid grid-cols-4 border-b">
        <div className="flex flex-col border-r item p-8 gap-4">
            <p>Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
            <input className="border p-4" type="text" placeholder="Your Email"/>
            <button className="button border py-4 bg-black text-white">Remind</button>
        </div>
        <div className="flex flex-col border-r item p-8 gap-4">
            <h1 className="heading5 text-gray">Contact Us</h1>
            <div className="flex flex-col gap-2">
                <p className="caption text-gray">Address</p>
                <p className="links">15/4 Khreshchatyk Street, Kyiv</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="caption text-gray">Phone</p>
                <p className="links">+380980099777</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="caption text-gray">General Enquiry:</p>
                <p className="links">Kiev.Florist.Studio@gmail.com</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="heading5 text-gray">Follow Us</p>
                <div className="flex gap-4 items-center justify-center">
                    <img src="https://placehold.co/400" width={40} alt="" />
                    <img src="https://placehold.co/400" width={40} alt="" />
                    <img src="https://placehold.co/400" width={40} alt="" />
                    <img src="https://placehold.co/400" width={40} alt="" />
                    <img src="https://placehold.co/400" width={40} alt="" />
                </div>
            </div>
        </div>
        <div className="flex flex-col border-r item p-8 gap-4">
            <h1 className="heading5 text-gray">Shop</h1>
            <ul className="links flex flex-col gap-2">
                <li><a href="#">All Products</a></li>
                <li><a href="#">Fresh Flowers</a></li>
                <li><a href="#">Dried Flowers</a></li>
                <li><a href="#">Live Plants</a></li>
                <li><a href="#">Designer Vases</a></li>
                <li><a href="#">Aroma Candles</a></li>
                <li><a href="#">Freshener Diffuser</a></li>
            </ul>
            <h1 className="heading5 text-gray">Service</h1>
            <ul className="links flex flex-col gap-2">
                <li><a href="#">Flower Subcription</a></li>
                <li><a href="#">Wedding & Event Decor</a></li>
            </ul>
        </div>
        <div className="flex flex-col border-r item p-8 gap-4">
            <h1 className="heading5 text-gray">About Us</h1>
            <ul className="links flex flex-col gap-2">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <ul className="links flex flex-col gap-2">
                <li><a href="#">Shipping & returns</a></li>
                <li><a href="#">Terms & conditions</a></li>
                <li><a href="#">Privacy policy</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
