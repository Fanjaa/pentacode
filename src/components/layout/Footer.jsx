import { assets } from "../../assets/assets"

const Footer = () => {
  return (
    <footer className="grid grid-cols-4 border-b max-lg:grid-cols-2 max-md:grid-cols-1">
        <div className="flex flex-col border-r item p-8 gap-4 max-lg:border-b max-lg:p-12">
            <p className="links font-regular max-md:linksMobile max-md:font-regular">Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
            <input className="button border p-4 max-md:buttonMobile" type="text" placeholder="Your Email"/>
            <button className="button border py-4 bg-black text-white max-md:buttonMobile">Remind</button>
        </div>
        <div className="flex flex-col border-r item p-8 gap-4 max-lg:border-b max-lg:p-12">
            <h1 className="heading5 text-gray max-md:headingMobile5">Contact Us</h1>
            <div className="flex flex-col gap-2">
                <p className="caption text-gray max-md:captionMobile">Address</p>
                <p className="links max-md:linksMobile">15/4 Khreshchatyk Street, Kyiv</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="caption text-gray max-md:captionMobile">Phone</p>
                <p className="links max-md:linksMobile">+380980099777</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="caption text-gray max-md:captionMobile">General Enquiry:</p>
                <p className="links max-md:linksMobile">Kiev.Florist.Studio@gmail.com</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="heading5 text-gray max-md:headingMobile5">Follow Us</p>
                <div className="flex gap-8 items-center justify-start">
                    <a href="#"><img src={assets.instagram} alt="Instagram Icon" /></a>
                    <a href="#"><img src={assets.pinteres} alt="Pinteres Icon" /></a>
                    <a href="#"><img src={assets.facebook} alt="Facebook Icon" /></a>
                    <a href="#"><img src={assets.twitter} alt="Twitter Icon" /></a>
                    <a href="#"><img src={assets.telegram} alt="Telegram Icon" /></a>
                </div>
            </div>
        </div>
        <div className="flex flex-col border-r item p-8 gap-4 max-lg:p-12">
            <h1 className="heading5 text-gray max-md:headingMobile5">Shop</h1>
            <ul className="links flex flex-col gap-2 max-md:linksMobile">
                <li><a href="#">All Products</a></li>
                <li><a href="#">Fresh Flowers</a></li>
                <li><a href="#">Dried Flowers</a></li>
                <li><a href="#">Live Plants</a></li>
                <li><a href="#">Designer Vases</a></li>
                <li><a href="#">Aroma Candles</a></li>
                <li><a href="#">Freshener Diffuser</a></li>
            </ul>
            <h1 className="heading5 text-gray max-md:headingMobile5">Service</h1>
            <ul className="links flex flex-col gap-2 max-md:linksMobile">
                <li><a href="#">Flower Subcription</a></li>
                <li><a href="#">Wedding & Event Decor</a></li>
            </ul>
        </div>
        <div className="flex flex-col border-r item p-8 gap-4 max-lg:p-12 max-md:border-t">
            <h1 className="heading5 text-gray max-md:headingMobile5">About Us</h1>
            <ul className="links flex flex-col gap-2 max-md:linksMobile">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <ul className="links flex flex-col gap-2 max-md:linksMobile">
                <li><a href="#">Shipping & returns</a></li>
                <li><a href="#">Terms & conditions</a></li>
                <li><a href="#">Privacy policy</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
