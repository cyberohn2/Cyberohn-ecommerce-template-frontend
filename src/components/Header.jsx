import cartIcon from "/cart-icon.svg";
import pizzlogo from "/pizz-logo.png";
import searchIcon from "/search.svg";
import hamburgerMenu from "/menu-burger.svg";

const Header = () => {
  return (
    <div className="p-4 flex items-center">
       <img className="mr-auto" width={100} src={pizzlogo} alt="Pizz peanott logo" />
       <nav className="flex justify-between basis-[60%]">
        <ul className="flex items-center gap-4">
          {["Catalog", "Service", "About Us", "Contact Us"].map( (navItem, index) => <li key={index}>{navItem}</li>)}
        </ul>
        <div className="flex gap-4">
          <button className="flex gap-2"><span>Search</span> <img width={15} src={searchIcon} alt="search icon" /></button>
          <button className="flex gap-2"><span>Cart</span> <img className="" width={15} src={cartIcon} alt="cart icon" /></button>
        </div>
       </nav>
       <img className="hidden" width={100} src={hamburgerMenu} alt="hamburger menu" />
    </div>
  )
}

export default Header
