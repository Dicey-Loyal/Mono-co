import { CARD_LIST } from "../../constants/static";

const TestimonialCard = () => {
  return (
    <section className='testimonial-card my-3 sm:block md:flex justify-evenly gap-3 max-w-6xl mx-auto py-5'>
      {CARD_LIST.map((item) => (
        <div
          className='bg-grey my-3 py-8 px-7 rounded-lg w-full'
          key={item.id}
        >
          <div className='quote-svg my-4 flex'>
            <img src={item.img} alt='' className="w-5" />
            <img src={item.img} alt='' className="w-5" />
          </div>
          <div className="text-content font-dpsans font-medium text-xl md:text-2xl lg:text-4xl max-w-sm mt-10 mb-10">
            <h2>{item.body}</h2>
          </div>
          <div className="title my-4 flex gap-3">
            <div className="img w-10 rounded-full">
                <img src={item.test} alt="" />
            </div>
            <div className="title ">
                <p className="font-dmSans text-sm font-medium">{item.name}</p>
                <p className="font-dmSans text-xs text-lightGray font-light">{item.post}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TestimonialCard;
