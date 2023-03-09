import { CARD_LIST } from "../../constants/static";
import TestimonialSlider from "./TestimonialSwiper/TestimonialSlider";

const TestimonialCard = () => {
  return (
    <section className='testimonial-card my-3 sm:block md:flex justify-evenly gap-3 max-w-6xl mx-auto py-6'>
      <div className='swiper'>
        <TestimonialSlider testSLider={CARD_LIST} />
      </div>
    </section>
  );
};

export default TestimonialCard;
