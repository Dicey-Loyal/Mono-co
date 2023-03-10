import FooterLogo from "../../assets/footer-logo.svg";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const FooterMedia = () => {
  return (
    <div className='max-w-6xl flex flex-col lg:flex-row justify-between my-10'>
      <div className='logo lg:flex gap-3 px-3 my-1'>
        <img src={FooterLogo} className="my-1" alt='Logo' />
        <p className='text-white text-[15px] font-dmSans font-medium '>
          © Loyal Technologies Nigeria
        </p>
      </div>
      <div className='media lg:flex gap-3 px-3'>
        <a
          className='text-[#D5D5D5] hover:text-white text-[15px] font-dmSans font-medium flex gap-1 cursor-pointer'
          href='https://twitter.com/lifeofemmany6'
          target='_blank'
        >
          Twitter
        </a>
        <a
          className='text-[#D5D5D5] hover:text-white text-[15px] font-dmSans font-medium flex gap-1 cursor-pointer'
          href='https://www.linkedin.com/in/emmanuel-oyeyinka-3430aa228'
          target='_blank'
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default FooterMedia;
