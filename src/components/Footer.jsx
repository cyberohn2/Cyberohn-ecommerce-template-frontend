import pizzLogoBw from "/pizz-logo-bw.png"
import fbIcon from "/icon-facebook.svg"
import igIcon from "/icon-instagram.svg"
import ttIcon from "/icon-twitter.svg"
import WhatsappIcon from "/whatsapp.svg"
import mailIcon from "/mail-icon.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-[var(--darkblue)] py-4 px-8 text-white">
         <div className="flex md:items-center flex-col md:flex-row justify-between">
         <Link to="/"><img className="mx-auto md:mx-0 mb-4 md:m-0" src={pizzLogoBw} alt="pizz bw logo" /></Link>
           <ul className="flex items-center gap-4 flex-col md:flex-row pb-8 mb-4 md:m-0 md:p-0 text-[#cac5d8]">
              {["Catalog", "Reviews", "About Us"].map( (navItem, index) => <li className="cursor-pointer hover:font-bold transition-all w-[93px] text-center md:text-left" key={index}><Link to={`/${navItem.toLowerCase().replace(/\s+/g, "-")}` }>{navItem}</Link></li>)}
            </ul>
            <div className="flex items-center gap-8 justify-center pb-8 mb-4 md:m-0 md:p-0 border-b border-white md:border-none ">
              <a target="_" href="https://www.instagram.com/pizz_treats/"><img src={igIcon} alt="" /></a>
              <a target="_" href="https://m.facebook.com/profile.php?id=100088633514906&name=xhp_nt_fbaction_open_user"><img src={fbIcon} alt="" /></a>
              <a target="_" href="https://x.com/PizzPeanott"><img src={ttIcon} alt="" /></a>
              <a target="_" href="https://wa.me/+2348028655703"><img width={20} src={WhatsappIcon} alt="" /></a>
              <a target="_" href="mailto:pizztreats@gmail.com"><img width={20} src={mailIcon} alt="" /></a>
            </div>
         </div>
        <p className="text-center text-[#cac5d8]">&copy; Pizz Treats 2025</p>
    </div>
  )
}

export default Footer
