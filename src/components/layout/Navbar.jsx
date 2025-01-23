import { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);


  return (
    <nav className="sticky top-0 z-50 border bg-white">
      <div className="flex justify-between items-center lg:hidden">
        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-black focus:outline-none px-8 py-4 border-r max-md:px-4 max-md:py-2"
        >
          <svg
            className="w-8 h-8 max-md:w-4 max-md:h4"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
              fill="#121212"
            />
          </svg>
        </button>

        {/* Logo di Tengah (Mobile) */}
        {/* <a href="#" className="text-2xl font-bold">Flowers Pentacode</a> */}

        {/* Cart Icon (Mobile) */}
        <button 
          onClick={() => setIsCartOpen(true)}
          className="text-black border-l px-8 py-4 max-md:px-4 max-md:py-2">
          <svg
          className="w-8 h-8 max-md:w-4 max-md:h4"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.3 19.5C1.8 19.5 1.375 19.325 1.025 18.975C0.675 18.625 0.5 18.2 0.5 17.7V6.3C0.5 5.8 0.675 5.375 1.025 5.025C1.375 4.675 1.8 4.5 2.3 4.5H4.25V4.25C4.25 3.21667 4.61667 2.33333 5.35 1.6C6.08333 0.866667 6.96667 0.5 8 0.5C9.03333 0.5 9.91667 0.866667 10.65 1.6C11.3833 2.33333 11.75 3.21667 11.75 4.25V4.5H13.7C14.2 4.5 14.625 4.675 14.975 5.025C15.325 5.375 15.5 5.8 15.5 6.3V17.7C15.5 18.2 15.325 18.625 14.975 18.975C14.625 19.325 14.2 19.5 13.7 19.5H2.3ZM2.3 18H13.7C13.7667 18 13.8333 17.9667 13.9 17.9C13.9667 17.8333 14 17.7667 14 17.7V6.3C14 6.23333 13.9667 6.16667 13.9 6.1C13.8333 6.03333 13.7667 6 13.7 6H11.75V8.25C11.75 8.46667 11.6793 8.64567 11.538 8.787C11.396 8.929 11.2167 9 11 9C10.7833 9 10.6043 8.929 10.463 8.787C10.321 8.64567 10.25 8.46667 10.25 8.25V6H5.75V8.25C5.75 8.46667 5.67933 8.64567 5.538 8.787C5.396 8.929 5.21667 9 5 9C4.78333 9 4.60433 8.929 4.463 8.787C4.321 8.64567 4.25 8.46667 4.25 8.25V6H2.3C2.23333 6 2.16667 6.03333 2.1 6.1C2.03333 6.16667 2 6.23333 2 6.3V17.7C2 17.7667 2.03333 17.8333 2.1 17.9C2.16667 17.9667 2.23333 18 2.3 18ZM5.75 4.5H10.25V4.25C10.25 3.61667 10.0333 3.08333 9.6 2.65C9.16667 2.21667 8.63333 2 8 2C7.36667 2 6.83333 2.21667 6.4 2.65C5.96667 3.08333 5.75 3.61667 5.75 4.25V4.5ZM2 18V6V18Z"
              fill="#121212"
            />
          </svg>
        </button>
      </div>

      {/* Navbar Normal di Desktop */}
      <ul className="hidden lg:flex links justify-between">
        {/* Left */}
        <div className="flex">
          <li className="border-r py-6 px-12">
            <a href="#">Shop</a>
          </li>
          <li className="border-r py-6 px-12">
            <a href="#">Contact</a>
          </li>
        </div>
        {/* Right */}
        <div className="flex">
          <li className="border-l py-6 px-12">
            <a href="#">Sign in</a>
          </li>
          <li className="border-l py-6 px-12">
            <a href="#" onClick={() => setIsCartOpen(true)}>Cart</a>
          </li>
        </div>
      </ul>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform md:w-1/2  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
        <div>
          <button
            className="absolute top-4 left-5 text-black"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col mt-[65px] text-lg font-semibold">
          <li className="heading5 border-b border-t border-gray-300 py-6 px-6 max-md:headingMobile5">
            <a href="#">Sign in</a>
          </li>
          <li className="heading5 border-b border-gray-300 py-6 px-6 max-md:headingMobile5">
            <a href="#">Shop</a>
          </li>
          <li className="heading5 border-b border-gray-300 py-6 px-6 max-md:headingMobile5">
            <a href="#">Service</a>
          </li>
          <li className="heading5 border-b py-6 px-6 max-md:headingMobile5">
            <a href="#">Contact</a>
          </li>
          <li className="heading5 border-b py-6 px-6 max-md:headingMobile5">
            <a href="#">About us</a>
          </li>
        </ul>
        <div className="flex flex-col border-b border-gray-300 py-6 px-6 gap-4">
          <a className="links max-md:linksMobile" href="#">
            Shipping & returns
          </a>
          <a className="links max-md:linksMobile" href="#">
            Terms & conditions
          </a>
          <a className="links max-md:linksMobile" href="#">
            Privacy policy
          </a>
        </div>
        <div className="flex flex-col border-b border-gray-300 py-6 px-6 gap-4">
          <div className="flex gap-8 items-center justify-between">
            <a href="#"><img src={assets.instagram} alt="Instagram Icon" /></a>
            <a href="#"><img src={assets.pinteres} alt="Pinteres Icon" /></a>
            <a href="#"><img src={assets.facebook} alt="Facebook Icon" /></a>
            <a href="#"><img src={assets.twitter} alt="Twitter Icon" /></a>
            <a href="#"><img src={assets.telegram} alt="Telegram Icon" /></a>
          </div>
        </div>
      </div>

      {/* Cart Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg transform max-lg:w-full ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div>
          <p className="heading6 absolute top-6 left-8 text-black max-md:headingMobile6">Shopping Cart</p>
          <button
            className="absolute top-5 right-8 text-black"
            onClick={() => setIsCartOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex mt-[65px] text-lg font-semibold gap-4 border-t p-8 border-b max-md:flex-col">
          <img className="w-40 h-40 border" src={assets.rosyDelight} alt="Rosy Delight" />
          <div className="flex w-full justify-between items-center max-md:items-end">
            <div className="flex flex-col gap-2">
              <p className="subtitle max-md:subtitleMobile">Rosy Delight</p>
              <p className="body max-md:bodyMobile">Quantity (1)</p>
              <p className="subtitle max-md:subtitleMobile">$100</p>
            </div>
          <div>
            <p className="links font-semibold text-gray max-md:linksMobile">remove</p>
          </div>
          </div>
        </div>
        <div className="flex flex-col border-b border-gray-300 p-8 gap-4">
          <div className="flex gap-8 items-center justify-between">
            <p className="heading5 max-md:headingMobile5">Subtotal</p>
            <p className="heading5 max-md:headingMobile5">$100.00</p>
          </div>
        </div>
        <div className="flex border-b p-8 gap-4">
          <div className="flex gap-8 items-center justify-between">
            <p className="body text-gray max-md:bodyMobile">Gift Message</p>
          </div>
        </div>
        <div className="flex border-b p-7 gap-4">
          <div className="flex items-center justify-between w-full">
            <p className="caption flex items-center text-center justify-center w-full px-32 max-lg:px-52 max-md:captionMobile max-md:px-4">Shipping & taxes calculated at checkout
            Free standard shipping within Kyiv</p>
          </div>
        </div>
        <div className="flex flex-col border-b ">
          <div className="flex gap-8 items-center justify-between">
            <button className="button bg-black w-full text-white p-4 gap-4 max-md:text-buttonMobile">Checkout</button>
          </div>
        </div>
      </div>

      {/* Overlay saat sidebar terbuka */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
