import { FiArrowRight } from "react-icons/fi";
import Button from "../../snippets/Buttons/Button";
import FooterLinks from "./FooterLinks";
import FooterMedia from "./FooterMedia";

const StartBuilding = () => {
  return (
    <section className='bg-black'>
      <div className='max-w-6xl mx-auto px-5 pt-32 pb-10 md:px-14 lg:px-0 lg:pt-48'>
        <h2 className='text-white  text-center font-dpsans text-2xl md:text-4xl md:font-medium lg:text-6xl '>
          {" "}
          Start building with Mono{" "}
        </h2>
        <p className='text-white text-center text-lg font-dmSans pt-4  leading-6 md:max-w-md mx-auto md:text-xl lg:max-w-2xl lg:text-2xl'>
          Access high-quality financial data and start processing payments
          directly from bank accounts in minutes.
        </p>

        <div className='flex mx-auto gap-4 justify-center py-12 md:py-14'>
          <Button
            className='py-3 px-3 bg-button rounded-md flex items-center text-white font-dmSans gap-1 md:scale-105 hover:gap-2 transition-all w-fit'
            title='Start now for free'
            icon={FiArrowRight}
          />
          <Button
            className='py-3 px-3 bg-[#202020] rounded-md flex items-center text-white font-dmSans gap-1 md:scale-105 hover:gap-2 transition-all w-fit'
            title='Talk to sales'
            icon={FiArrowRight}
          />
        </div>

        <hr className='border-[#303030] border h-[0.1px] ' />

        {/* Footer Link */}
        <FooterLinks />

        <hr className='border-[#303030] border h-[0.1px] ' />

        <FooterMedia />
      </div>
    </section>
  );
};

export default StartBuilding;
