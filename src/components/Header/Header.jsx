import { navLinks } from "../../constants/static";
import {FaChevronDown} from 'react-icons/fa';
import { useState } from "react";
import Logo from '../../assets/monologo1.svg'
import Button from "../../snippets/Buttons/Button";


const Header = () => {
  return (
    <nav className="w-full mx-auto">
        <div className="w-[80vw] flex py-5 justify-between items-center navbar mx-auto">
            <div className="logo">
                <img src={Logo} alt="Nav Logo" className="cursor-pointer" />
            </div>

            <ul className="list-none justify-end items-center flex">
                {navLinks.map((nav) => (
                    <li key={nav.id} className={`text-base font-normal font-dmSans text-black px-4 py-2 hidden md:flex cursor-pointer`}>
                        <a href={`#${nav.id}`}>{nav.title}</a> <FaChevronDown className="mt-1 mx-1" />
                    </li>
                ))}
            </ul>

            <Button title="Sign in" className="bg-button rounded-md px-4 py-3 text-white font-dmSans hidden md:flex" />
        </div>
    </nav>
  )
};

export default Header;
