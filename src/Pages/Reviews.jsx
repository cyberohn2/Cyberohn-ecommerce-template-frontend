import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import rightArrow from "/right-arrow.svg";
import CustomOrder from "../components/CustomOrder";
import Contact from "../components/Contact";

const Reviews = () => {



  const reviewList = [
    {
      name: "Ms Sarah",
      review: "I got to buy the peanut butter and could not resist it and had to finish the whole container that day with my guys thou, they all said it was very creamy, soft and sweet 😂🤗🤗 leaving remnant for me. I love the taste too",
    },
    {
      name: "Ms Bolaji",
      review: "The coated peanut, i cannot resist one minute without eating this. It's so niceeee. Even tho i don't like ginger it's on 💯",
    },
    {
      name: "Ms Enny",
      review: "I love my peanut butter. I am not really a fan but i was just like let me get it and it was wow,I love it .it was giving the taste i really wanted",
    },
    {
      name: "Mr Anointing",
      review: "From the mouth of two or more witnesses, the truth is established. It was good. I and my brother enjoyed it. 😎 ",
    },
    {
      name: "Ms Pearl",
      review: "The peanott butter is... 😙 I just finished eating biscuits with it. It was great. The taste was nice. The coated peanut is so crunchy and tasty 😙😙 Every bite comes with a unique taste😙😙😙😂",
    },
    {
      name: "Ms Olabisi",
      review: "Wow,The peanut is very nice and nutritious. It's even very much maybe because i was expecting something small sha Thank you. I really love it",
    },
    {
      name: "Mr Caleb",
      review: "The i finished the biggest size in less than 30min because i couldn't just let go of the refreshing taste in my mouth. It was the best feeling ever",
    },

  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
    <main className="col-span-2">
    <div className="bg-white sm:p-8 p-4 rounded-4xl justify-between mt-2">
      <div className="mb-4">
        <h1 className="xl:text-[4.5rem] lg:text-[3.5rem] text-[2rem] leading-none font-bold ">
          Reviews
        </h1>
        <p className="text-gray-400">Our customers love our product, see what they said!!</p>
      </div>
      <div>
        <div className="flex items-center gap-[9px] ml-auto w-fit mb-5">
            <button id="prev-slide" className=" bg-[var(--yellow)] cursor-pointer rounded-[4.5px] p-[12px] text-[#111d15] flex items-center justify-center">
                <img loading="lazy" className="rotate-180" src={rightArrow} alt="previous" />
            </button>
            <button id="next-slide" className="bg-[var(--yellow)] cursor-pointer rounded-[4.5px] p-[12px] flex items-center justify-center">
                <img loading="lazy" src={rightArrow} alt="next" />
            </button>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}  
          slidesPerView={1} 
          navigation={{
              prevEl: '#prev-slide',
              nextEl: '#next-slide',
          }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {reviewList.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex items-start gap-3 mb-4 ">
                  <div>
                    <p className="mb-2">{review.review}</p>
                    <p className="font-bold">{review.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
    </main>
    <aside className="grid grid-cols-1 gap-2">
      <CustomOrder />
      <Contact />
    </aside>
  </div>
  );
};

export default Reviews;