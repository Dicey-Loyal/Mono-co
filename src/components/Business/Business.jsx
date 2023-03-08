import { useState } from "react";
import BusinessImg from "../../assets/business.svg";
import { BiRightArrowAlt } from "react-icons/bi";
import { BUSINESS_LIST } from "../../constants/static";
import { BUSINESS_CONTENT } from "../../constants/static";

const Business = () => {
  const[key, setKey] = useState(0);
  return (
    <section className='max-w-6xl px-5 mx-auto'>
      {/* Header */}
      <div className='py-10'>
        <p className='text-2xl md:text-4xl lg:text-6xl max-w-lg font-normal font-dpsans'>
          Businesses Building With Mono
        </p>
        <p className='text-lg py-4 font-dmSans md:max-w-sm font-normal'>
          Here are some of the interesting features and experiences powered by
          Mono.
        </p>
      </div>
      {/* Main Content */}
      <div className='pt-10 px-6 bg-grey rounded-lg'>
        {/* Buttons */}
        <aside className={`my-4 gap-4 max-w-2xl font-normal w-fit flex`}>
          {BUSINESS_LIST.map((item, index) => (
            <button
              className={`py-3 px-4 rounded-full text-black cursor-pointer w-fit ${
                index === 0 ? "bg-black text-white flex w-fit" : "bg-transparent hidden md:flex w-fit hover:bg-[#e9e9e9]"
              }`}
              key={item.id}
              onClick = {() => setKey(index)}
            >
              <p className='text-sm font-dmSans'>{item.title}</p>
            </button>
          ))}
        </aside>

        {/* Content */}
        <section className='my-10 flex flex-col md:flex-row justify-between'>
        <div className='text-content pt-6 z-[99999]'>
            <p className='text-2xl md:text-3xl lg:text-5xl max-w-lg font-normal font-dpsans'>
              {BUSINESS_CONTENT[key].title}
            </p>
            <p className='text-base md:text-lg leading-normal text-lightGray py-4 font-dmSans md:max-w-md font-normal'>
              {BUSINESS_CONTENT[key].subtitle}
            </p>
            <p className='text-base md:text-lg leading-normal text-lightGray py-4 font-dmSans md:max-w-md font-normal'>
              {BUSINESS_CONTENT[key].body}
            </p>
            <p className='text-base leading-normal text-blue-700 py-4 font-dmSans md:max-w-md font-semibold flex group'>
              {BUSINESS_CONTENT[key].link}
              <BiRightArrowAlt className='mt-[5px] ml-1 group-hover:ml-3 transition-all' />
            </p>
          </div>

          <div className='image-content'>
            <img src={BUSINESS_CONTENT[key].img} alt='Financial-images' />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Business;
