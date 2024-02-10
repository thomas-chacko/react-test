import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";

const Slide = () => {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 50 },
          768: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={3}
        spaceBetween={40}
        navigation
        pagination={{ clickable: true }}
        className="h-[400px] max-w-[1000px]"
      >
        <SwiperSlide className="w-full flex flex-col justify-center items-center">
          <div className="border-2 border-black rounded-md pb-5">
            <img src={image2} className="w-52 h-44 object-cover" alt="no!" />
            <h1 className="text-center mt-5 text-lg">Lower</h1>
            <h1 className="text-center text-lg">Intrest Rates</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full flex flex-col justify-center items-center">
          <div className="border-2 border-black rounded-md pb-5">
            <img src={image3} className="w-52 h-44 object-cover" alt="no!" />
            <h1 className="text-center mt-5 text-lg">Intrest</h1>
            <h1 className="text-center text-lg">Free Payments</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full flex flex-col justify-center items-center">
          <div className="border-2 border-black rounded-md pb-5">
            <img src={image1} className="w-52 h-44 object-cover" alt="no!" />
            <h1 className="text-center mt-5 text-lg">Discound</h1>
            <h1 className="text-center text-lg">On Meterials</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full flex flex-col justify-center items-center">
          <div className="border-2 border-black rounded-md pb-5">
            <img src={image1} className="w-52 h-44 object-cover" alt="no!" />
            <h1 className="text-center mt-5 text-lg">Discound</h1>
            <h1 className="text-center text-lg">On Meterials</h1>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full flex justify-center items-center flex-col gap-2">
        <button className="w-52 bg-green-400 text-white rounded-full px-5 py-1">
          UNLOCK NOW
        </button>
        <button className="w-48 bg-green-400 text-white rounded-full px-5 py-1">
          DETAILS
        </button>
      </div>
    </div>
  );
};
export default Slide;
