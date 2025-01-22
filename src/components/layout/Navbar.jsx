const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border bg-white">
      <ul className="flex links justify-between">
        {/* Left */}
        <div className="flex">
          <li className="border-r py-6 px-8"><a href="">Shop</a></li>
          <li className="border-r py-6 px-8"><a href="">Contact</a></li>
        </div>
        {/* Right */}
        <div className="flex">
          <li className="border-l py-6 px-8"><a href="">Sign in</a></li>
          <li className="border-l py-6 px-8"><a href="">Cart</a></li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
