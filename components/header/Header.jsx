import React, { useState } from 'react';
import NavItem from './NavItem';
import { FaBars, FaHome, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { IoMdConstruct } from 'react-icons/io';
import { MdContactPhone } from 'react-icons/md';
import { GiAmericanFootballHelmet } from 'react-icons/gi';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import MobileNav from '../mobile-nav/MobileNav';

const Header = () => {
  const [light, setLight] = useState(true);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const lightHandler = () => {
    setLight(!light);
  };
  const closeNav = () => setOpenMobileNav(!openMobileNav);

  return (
    <header className="px-6 md:px-16 lg:px-40 h-[10vh] bg-body shadow-md sticky top-0 z-[999] flex items-center justify-between">
      <div className="cursor-pointer">
        <h1 className="text-ctaDark font-bold text-3xl">HABEEB</h1>
      </div>

      <nav className="hidden lg:flex lg:items-center  lg:block">
        <NavItem title="Home" path="#home" Icon={FaHome} />
        <NavItem title="About" path="#about" Icon={FaInfoCircle} />
        <NavItem
          title="Projects"
          path="#projects"
          Icon={GiAmericanFootballHelmet}
        />
        <NavItem title="Skills" path="#skills" Icon={IoMdConstruct} />
        <NavItem title="Contacts" path="#contacts" Icon={MdContactPhone} />
      </nav>

      <div onClick={lightHandler}>
        {light ? (
          <BsFillSunFill className="text-3xl text-yellow-500 font-bold" />
        ) : (
          <BsMoonFill className="text-3xl text-btn font-bold" />
        )}
      </div>

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
