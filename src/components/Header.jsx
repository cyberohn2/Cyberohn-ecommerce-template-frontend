import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartContext";
import { Link, NavLink} from "react-router-dom";
import cartIcon from "/cart-icon.svg";
import pizzlogo from "/pizz-logo.webp";
import hamburgerMenu from "/menu-burger.svg";
import cross from "/cross.svg"
import CartSummary from "./CartSummary";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cartVisibility, setCartVisibility] = useState(false)
    const { cart } = useContext(CartContext);

  const handleCartVisibility = () =>{
    setCartVisibility(!cartVisibility)
  }

  const handleNavbar = (e) =>{
    e.target.src = isOpen? hamburgerMenu: cross
    setIsOpen(!isOpen)
  }

  return (
    <header className="py-4 px-8 flex items-center ">
       <Link className="mr-auto" to="/"><img  width={100} src={pizzlogo} alt="Pizz peanott logo" /></Link>
       <nav className={`${isOpen ? 'translate-x-0': 'translate-x-[100%]'} md:translate-x-0 flex md:justify-between flex-col md:flex-row basis-[65%] absolute right-0 md:static inset-y-0 w-1/2 bg-white shadow-2xl md:bg-transparent md:shadow-none py-21 px-4 md:p-0 transition-transform long-animate z-50`}>
        <ul className="flex items-center gap-4 flex-col md:flex-row pb-8 mb-4 border-b md:border-none md:m-0 md:p-0 ">
          {["Catalog", "Reviews", "About Us"].map( (navItem, index) => <li onClick={ () => isOpen && setIsOpen(!isOpen)} className="w-[93px] cursor-pointer hover:font-bold transition-all long-animate" key={index}> <NavLink to={`/${navItem.toLowerCase().replace(/\s+/g, "-")}` }>{navItem}</NavLink> </li>)}
        </ul>

       </nav>
        <div className="z-50 flex items-center gap-8">
          <button onClick={handleCartVisibility} className="flex gap-2 cursor-pointer relative"> {cart && <span className="absolute -top-3 -right-3 font-bold text-[var(--yellow) bg-[var(--yellow)] rounded-lg w-[25px] h-[25px] aspect-square">{cart.length}</span>} <img className="" width={25} src={cartIcon} alt="cart icon" /></button>
          <img onClick={(e) => handleNavbar(e)} className="md:hidden cursor-pointer" width={25} src={isOpen? cross: hamburgerMenu} alt="hamburger menu" />
        </div>
       {cartVisibility && <CartSummary />}
    </header>
  )
}

export default Header
