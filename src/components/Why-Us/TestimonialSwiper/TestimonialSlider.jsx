import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperNavButtons from "./SwiperNavButtons";

const TestimonialSlider = ({ testSLider }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      breakpoints={{
        50: {
          slidesPerView: 1,
        },
        1000: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
      }}
      autoplay
      grabCursor
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-navigation-size": "25px",
        "--swiper-pagination-color": "#000",
      }}
    >
      {testSLider.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className='bg-grey my-3 py-8 px-7 rounded-lg w-full h-[400px] md:h-[500px] lg:h-[600px]'
            key={item.id}
          >
            <div className='quote-svg my-4 flex'>
              <img src={item.img} alt='' className='w-5' />
              <img src={item.img} alt='' className='w-5' />
            </div>
            <div className='text-content font-dpsans font-medium text-xl md:text-2xl lg:text-4xl max-w-sm mt-10 mb-10'>
              <h2>{item.body}</h2>
            </div>
            <div className='title my-4 flex gap-3'>
              <div className='img w-10 rounded-full'>
                <img src={item.test} alt='' />
              </div>
              <div className='title '>
                <p className='font-dmSans text-sm font-medium'>{item.name}</p>
                <p className='font-dmSans text-xs text-lightGray font-light'>
                  {item.post}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <SwiperNavButtons />
    </Swiper>
  );
};

export default TestimonialSlider;
