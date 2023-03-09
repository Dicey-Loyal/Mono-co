import { useSwiper } from "swiper/react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex justify-end my-6 gap-2">
        <button onClick={() => swiper.slidePrev()} className="bg-[#0055ba] py-4 px-4 rounded-full"><HiOutlineArrowSmLeft className="text-white" /></button>
        <button onClick={() => swiper.slideNext()} className="bg-[#f5f5f5] py-4 px-4 rounded-full"><HiOutlineArrowSmRight /></button>
    </div>
  )
};

export default SwiperNavButtons;
