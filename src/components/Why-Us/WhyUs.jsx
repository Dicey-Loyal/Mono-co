import TestimonialCard from "./TestimonialCard";

const WhyUs = () => {
  return (
    <section className='max-w-6xl px-5 mx-auto'>
      {/* Header */}
      <div className='py-10'>
        <p className='text-2xl md:text-4xl lg:text-6xl max-w-2xl font-normal font-dpsans'>
          Why market leaders are choosing Mono
        </p>
        <p className='text-lg py-4 font-dmSans md:max-w-sm font-normal'>
          Here's what some of them are saying.
        </p>
      </div>
      {/* Card Section */}
      <div className="mx-auto">
        <TestimonialCard />
      </div>
    </section>
  );
};

export default WhyUs;
