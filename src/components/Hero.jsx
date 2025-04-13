import { useEffect, useLayoutEffect } from "react"
import heroImg from "/hero-img.webp"
import SplitType from 'split-type';
import gsap from "gsap";

const Hero = () => {
  
  useLayoutEffect(()=>{
    let text = new SplitType('#hero-text')
    let chars = document.querySelectorAll('.word');

    for (let i = 0; i < chars.length; i++) {
      chars[i].classList.add('translate-y-full')
      chars[i].classList.add('cliptext')
    }
    gsap.to('.word', {
      duration: 1,
      stagger: 0.1,
      y: 0,
    })
    gsap.to('.hero-image', {
      duration: 1,
      stagger: 0.1,
      x: 0,
      rotation: 10,
    })

       // Add hover effect using GSAP
       const heroImage = document.querySelector(".hero-image");
       heroImage.addEventListener("mouseenter", () => {
         gsap.to(heroImage, {
           duration: 0.3,
           rotation: 20,
           scale: 1.1,
         });
       });
   
       heroImage.addEventListener("mouseleave", () => {
         gsap.to(heroImage, {
           duration: 0.3,
           rotation: 10,
           scale: 1,
         });
       });
   
       // Cleanup event listeners
       return () => {
         heroImage.removeEventListener("mouseenter", () => {});
         heroImage.removeEventListener("mouseleave", () => {});
       };
    

  }, [])
  return (
    <div className="bg-[var(--red)] sm:p-8 p-4  text-white rounded-4xl relative overflow-hidden">
      <div className="pb-40">
        <div className="">
          <h1 style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}} id="hero-text" className="font-bold xl:text-[4.5rem] lg:text-[3.5rem] text-[2rem] leading-none">Explore a World of Peanut Delights</h1>
          <h2 className=" lg:w-[30%] w-[50%] text-[#e7e7e7]">Delicious, Nutty, Nourishing & Irresistible</h2>
        </div>
        <img width={10} className="absolute top-[3rem] sm:right-[30%] right-[20%] long-animate 2xl:w-[10%] lg:w-[18%] w-[22%] hero-image shadowbox translate-x-[5rem] cursor-pointer transition-transform duration-300" src={heroImg} alt="pizz peanott drink" />
      </div>
      <div className="flex justify-between">
        <p className="w-52 text-[#cac5d8] font-light">Savor Big on Your Favourite Nutty Treats</p>
        <div className="flex items-center gap-2 z-30">
          <span className="border border-white rounded-2xl p-2 w-[50px] h-[50px] flex items-center justify-center cursor-pointer bg-[var(--red)] hover:-translate-y-2 hover:shadow transition-all long-animate"><img width={10} src={heroImg} alt="" /></span>
          <span className="border border-white rounded-2xl p-2 w-[50px] h-[50px] flex items-center justify-center bg-[#ff1020] hover:-translate-y-2 hover:shadow cursor-pointer transition-all long-animate"><img width={10} src={heroImg} alt="" /></span>
          <span className="border border-white rounded-2xl p-2 w-[50px] h-[50px] flex items-center justify-center bg-[#ff1020] hover:-translate-y-2 hover:shadow-xl cursor-pointer transition-all long-animate"><img width={10} src={heroImg} alt="" /></span>
        </div>
      </div>
    </div> 
  )
}

export default Hero
