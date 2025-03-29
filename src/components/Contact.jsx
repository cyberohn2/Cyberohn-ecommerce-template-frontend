import fbIcon from "/icon-facebook.svg"
import IgIcon from "/icon-instagram.svg"
import TTIcon from "/icon-twitter.svg"
import WhatsappIcon from "/whatsapp.svg"
import phoneIcon from "/phone-icon.svg"
import socialIcon from "/social-media-icon.svg"
import mailIcon from "/mail-icon.svg"
import locationIcon from "/location-icon.svg"

const Contact = () => {
  return (
    <div className="relative text-white bg-[var(--yellow)] rounded-4xl">
      <div className="flex flex-col gap-1 p-4 ">
        <h2 className="mb-2 text-2xl font-semibold ">Reach us</h2>
          <div className="p-2 mb-2">
              <div className="flex items-center gap-2">
                <p className="text-[15px] font-semibold">Call us</p>
              </div>
              <p className="text-[12px] "><a href="tel:+2348028655703">0802 865 5703</a></p>
          </div>
          <div className="p-2 border-t mb-2">
              <div className="flex items-center gap-2">
                <p className="text-[15px] font-semibold">Connect with us</p>
              </div>
              <div className="flex gap-6 items-center">
                  <a target="_" href="https://www.instagram.com/pizz_treats/"><img src={IgIcon} alt="" /></a>
                  <a target="_" href="https://m.facebook.com/profile.php?id=100088633514906&name=xhp_nt_fbaction_open_user"><img src={fbIcon} alt="" /></a>
                  <a target="_" href="https://x.com/PizzPeanott"><img src={TTIcon} alt="" /></a>
                  <a target="_" href="https://wa.me/+2348028655703"><img width={20} src={WhatsappIcon} alt="" /></a>
                  <a target="_" href="mailto:pizztreats@gmail.com"><img width={20} src={mailIcon} alt="" /></a>
              </div>
          </div>
          <div className="p-2 border-t mb-2">
              <div className="flex items-center gap-2">
                <p className="text-[15px] font-semibold">Find Us</p>
              </div>
              <p className="text-[12px] ">FUTA Campus, Akure, Ondo State, Nigeria</p>
          </div>
      </div>
    </div>
  )
}

export default Contact
