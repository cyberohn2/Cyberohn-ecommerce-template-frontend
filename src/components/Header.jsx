import cartIcon from "/cart-icon.svg";
import pizzlogo from "/pizz-logo.png";
import searchIcon from "/search.svg";
import hamburgerMenu from "/menu-burger.svg";
import cross from "/cross.svg"
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavbar = (e) =>{
    e.target.src = isOpen? hamburgerMenu: cross
    setIsOpen(!isOpen)
  }

  return (
    <div className="py-4 px-8 flex items-center">
       <img className="mr-auto" width={100} src={pizzlogo} alt="Pizz peanott logo" />
       <nav className={`${isOpen ? 'translate-x-0': 'translate-x-[100%]'} md:translate-x-0 flex md:justify-between flex-col md:flex-row basis-[65%] absolute right-0 md:static inset-y-0 w-1/2 bg-white shadow-2xl md:bg-transparent md:shadow-none py-21 px-4 md:p-0 transition-transform long-animate`}>
        <ul className="flex items-center gap-4 flex-col md:flex-row pb-8 mb-4 border-b md:border-none md:m-0 md:p-0 ">
          {["Catalog", "Service", "Reviews", "About Us"].map( (navItem, index) => <li className="w-[93px] cursor-pointer hover:font-bold transition-all long-animate" key={index}>{navItem}</li>)}
        </ul>
        <div className="flex items-center gap-8 justify-center">
          <button className="flex gap-2 cursor-pointer"><img width={25} src={searchIcon} alt="search icon" /></button>
          <button className="flex gap-2 cursor-pointer"><img className="" width={25} src={cartIcon} alt="cart icon" /></button>
        </div>
       </nav>
       <img onClick={(e) => handleNavbar(e)} className="md:hidden cursor-pointer z-50" width={25} src={hamburgerMenu} alt="hamburger menu" />
    </div>
  )
}

export default Header
