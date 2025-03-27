import pizzLogoBw from "/pizz-logo-bw.png"
import fbIcon from "/icon-facebook.svg"
import igIcon from "/icon-instagram.svg"
import ttIcon from "/icon-twitter.svg"

const Footer = () => {
  return (
    <div className="bg-[var(--darkblue)] py-4 px-8 text-white">
         <div className="flex md:items-center flex-col md:flex-row justify-between">
         <img className="mx-auto md:mx-0 mb-4 md:m-0" src={pizzLogoBw} alt="pizz bw logo" />
           <ul className="flex items-center gap-4 flex-col md:flex-row pb-8 mb-4 md:m-0 md:p-0 text-[#cac5d8]">
              {["Catalog", "Service", "About Us", "Contact Us"].map( (navItem, index) => <li className="cursor-pointer hover:font-bold transition-all w-[93px] " key={index}>{navItem}</li>)}
            </ul>
            <ul className="flex items-center gap-8 justify-center pb-8 mb-4 md:m-0 md:p-0 border-b border-white md:border-none ">
              {[fbIcon, igIcon, ttIcon].map( (socialIcon, index) => <li className="cursor-pointer" key={index}><img className="" width={25} src={socialIcon} alt="social icon" /></li>)}
            </ul>
         </div>
        <p className="text-center text-[#cac5d8]">&copy; Pizz Treats 2025</p>
    </div>
  )
}

export default Footer
