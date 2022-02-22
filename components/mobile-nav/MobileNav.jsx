import React from 'react';
import { FaTimes, FaHome, FaInfoCircle } from 'react-icons/fa';
import { IoMdConstruct } from 'react-icons/io';
import { MdContactPhone } from 'react-icons/md';
import { GiAmericanFootballHelmet } from 'react-icons/gi';
import MobileNavItem from './MobileNavItem';

const MobileNav = ({openMobileNav}) => {
  return (
    
      !openMobileNav && (<nav className="block lg:hidden rounded-lg shadow-2xl flex items-center z-[999] justify-around absolute top-16 bg-ctaLight right-6 md:right-16 w-72 h-96 flex-col  p-4 ">
      <MobileNavItem title="Home" path="#home" Icon={FaHome} />
      <MobileNavItem title="About" path="#about" Icon={FaInfoCircle} />
      <MobileNavItem
        title="Projects"
        path="#projects"
        Icon={GiAmericanFootballHelmet}
      />
      <MobileNavItem title="Skills" path="#skills" Icon={IoMdConstruct} />
      <MobileNavItem title="Contacts" path="#contacts" Icon={MdContactPhone} />
    </nav>)
    
  );
};

export default MobileNav;
