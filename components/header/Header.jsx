import React, { useState } from 'react';
import NavItem from './NavItem';
import { FaBars, FaHome, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { IoMdConstruct } from 'react-icons/io';
import MobileNav from '../mobile-nav/MobileNav';
import Link from 'next/link';
import { GiAmericanFootballHelmet } from 'react-icons/gi';
// import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
// import { MdContactPhone } from 'react-icons/md';


const Header = () => {
  const [activeLink, setActiveLink] = useState(1)
  const toggleActiveLink = index => setActiveLink(index)
  const [light, setLight] = useState(true);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const lightHandler = () => {
    setLight(!light);
  };
  const closeNav = () => setOpenMobileNav(!openMobileNav);

  return (
    <header className="px-6 md:px-16 lg:px-40 h-[10vh] bg-body shadow-md sticky top-0 z-[999] flex items-center justify-between">
      <div className="cursor-pointer">
        <h1 className="text-ctaDark font-bold text-3xl">Habeeb Ahmadu</h1>
      </div>

      <nav className="hidden lg:flex lg:items-center  lg:block">
        <NavItem toggleActiveLink={toggleActiveLink} index={1} title="Home" path="#home" Icon={FaHome} />
        <NavItem toggleActiveLink={toggleActiveLink} index={2} title="About" path="#about" Icon={FaInfoCircle} />
        <NavItem
        toggleActiveLink={toggleActiveLink} index={3}
          title="Projects"
          path="#projects"
          Icon={GiAmericanFootballHelmet}
        />
        <NavItem toggleActiveLink={toggleActiveLink} index={4} title="Skills" path="#skills" Icon={IoMdConstruct} />
      </nav>

      <Link href="#contacts" passHref>
        <button className="bg-btn hover:bg-white text-2xl font-bold hover:text-btn px-8 py-3 text-white rounded-full hidden lg:block">
          Hire Me
        </button>
      </Link>
      {/* <div onClick={lightHandler}>
        {light ? (
          <BsFillSunFill className="text-3xl text-yellow-500 font-bold" />
        ) : (
          <BsMoonFill className="text-3xl text-btn font-bold" />
        )}
        </div> */}

      <div className="block lg:hidden">
        {!openMobileNav ? (
          <FaBars
            onClick={() => setOpenMobileNav(true)}
            className="text-4xl text-btn font-bold hover:text-green-500"
          />
        ) : (
          <FaTimes
            onClick={() => setOpenMobileNav(false)}
            className="text-4xl text-btn font-bold hover:text-red-500"
          />
        )}
      </div>

      {openMobileNav && <MobileNav closeNav={closeNav} />}
    </header>
  );
};

export default Header;
