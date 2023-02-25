import { useState } from "react";
import { Developers, Learn, navLinks, ourProducts } from "../../constants/static";
import { whyMono } from "../../constants/static";
import { FaChevronDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/monologo1.svg";
import Button from "../../snippets/Buttons/Button";
import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full mx-auto'>
      <div className='w-[90vw] md:w-[85vw] xl:w-[75vw] flex py-10 xl:py-5 justify-between items-center navbar mx-auto'>
        <div className='logo'>
          <img src={Logo} alt='Nav Logo' className='cursor-pointer w-32 hidden md:flex' />
        </div>

        <ul className='list-none justify-end items-center flex'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-base font-normal font-dmSans text-black px-4 py-2 hidden xl:flex cursor-pointer`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>{" "}
              <FaChevronDown className='mt-1 mx-1' />
            </li>
          ))}
        </ul>

        <div className='md:hidden flex justify-end'>
          <img src={Logo} alt='Nav Logo' className='cursor-pointer relative right-56 w-32 z-[99999999]' />
          <img
            src={toggle ? Close : Menu}
            alt='menu'
            className='w-8 h-8 cursor-pointer z-[99999999]'
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex flex-col gap-4" : "hidden"
            } absolute top-32 right-0 bg-white h-[100vh] w-full`}
          >
            {/* First */}
            <div className="first-section">
                <p className="text-gray-500 text-sm font-dmSans px-5">Why Mono</p>
                <div className="w-11/12 mx-auto py-3 border-b-2 border-gray-200 flex flex-row flex-wrap">
                    {whyMono.map((item) => (
                        <div key={item.id} className="w-[50%] my-2">
                            <div className="font-dpsans flex gap-1 w-fit"><img src={item.img} alt="" className="w-6" /> {item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Second */}
            <div className="second-section">
                <p className="text-gray-500 text-sm font-dmSans px-5">Products</p>
                <div className="w-11/12 mx-auto py-3 border-b-2 border-gray-200 flex flex-row flex-wrap">
                    {ourProducts.map((item) => (
                        <div key={item.id} className="w-[50%] my-2">
                            <div className="font-dpsans flex gap-1 w-fit"><img src={item.img} alt="" className="w-6" /> {item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Third */}
            <div className="third-section">
                <p className="text-gray-500 text-sm font-dmSans px-5">Learn</p>
                <div className="w-11/12 mx-auto py-3 border-b-2 border-gray-200 flex flex-row flex-wrap">
                    {Learn.map((item) => (
                        <div key={item.id} className="w-[50%] my-2">
                            <div className="font-dpsans flex gap-1 w-fit"><img src={item.img} alt="" className="w-6" /> {item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Fourth */}
            <div className="third-section">
                <p className="text-gray-500 text-sm font-dmSans px-5">Developers</p>
                <div className="w-11/12 mx-auto py-3 border-b-2 border-gray-200 flex flex-row flex-wrap">
                    {Developers.map((item) => (
                        <div key={item.id} className="w-[50%] my-2">
                            <div className="font-dpsans flex gap-1 w-fit"><img src={item.img} alt="" className="w-6" /> {item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div> 
        <Button
          title='Sign In'
          className='bg-button rounded-lg px-5 py-2 text-white font-medium font-dmSans hidden xl:flex'
        />
      </div>
    </nav>
  );
};

export default Header;
