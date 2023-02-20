import { BiRightArrowAlt } from "react-icons/bi";
import Button from "../../snippets/Buttons/Button";
import Heroimg from "../../assets/mono-hero.png";

const Hero = () => {
  return (
    <section>
      {/* container */}
      <div className='max-w-7xl flex flex-col md:flex-row justify-evenly mx-auto'>
        <div className='md:basis-2/4 px-3'>
          <div className='w-fit rounded-full bg-grey mt-[70px] md:mt-[100px] flex items-center px-4 py-2'>
            <button className='bg-button h-fit w-fit rounded-full py-1 px-3'>
              <p className='text-white text-xs font-medium uppercase font-dmSans'>New</p>
            </button>
            <p className='text-black pl-2 font-medium text-xs flex items-center'>
              Mono is live in Kenya! <BiRightArrowAlt className='ml-2' />{" "}
            </p>
          </div>

          <div className="hero-text-section">
            {/* Hero title */}
          <h2 className='text-4xl font-medium py-7 md:text-6xl md:py-12 md:font-bold md:leading-[70px] xl:text-[80px] xl:leading-[90px] font-dmSans'>
            Reliably access bank accounts
          </h2>
          {/* hero description */}
          <p className='font-normal font-dmSans md:text-2xl max-w-xl xl:leading-9 xl:py-1'>
            Mono helps businesses to access high-quality financial data and
            direct bank payments.
          </p>
          </div>

          <div className='flex gap-3 xl:mt-6'>
            <button className='bg-button py-3 px-2 rounded-lg my-7 text-white flex items-center justify-center font-dmSans font-bold text-base group md:w-[210px] '>
              Get started for free
              <BiRightArrowAlt className='ml-2 group-hover:ml-3' />
            </button>

            <button className='bg-grey py-3 px-2 rounded-lg my-7 text-black flex items-center justify-center font-dmSans font-bold text-base group md:w-[180px]'>
              Contact Sales
              <BiRightArrowAlt className='ml-2 group-hover:ml-3' />
            </button>
          </div>
        </div>

        <div className='hidden md:flex justify-center items-end '>
          <img src={Heroimg} alt='hero image' className='w-[75%]' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
