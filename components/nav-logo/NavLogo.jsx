import React, { useState } from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { IoMdConstruct } from 'react-icons/io';
import { MdContactPhone } from 'react-icons/md';
import { GiAmericanFootballHelmet } from 'react-icons/gi';

const styles = {
  link: `text-xl md:text-2xl lg:text-3xl text-gray-300 hover:text-btn font-bold mt-3`,
  active: `text-xl md:text-2xl lg:text-3xl text-btn hover:text-btn font-bold mt-3`,
};

const NavLogo = ({active}) => {
  const [activeLink, setActiveLink] = useState(1);
  const toggleLink = (index) => setActiveLink(index);

  return (
    <div className="hidden md:block absolute top-60 right-8 ">
      <Link href="#home" passHref>
        <FaHome
          onClick={() => toggleLink(1)}
          className={activeLink === 1 ? styles.active : styles.link}
        />
      </Link>

      <Link href="#about" passHref>
        <FaInfoCircle
          onClick={() => toggleLink(2)}
          className={activeLink === 2 ? styles.active : styles.link}
        />
      </Link>

      <Link href="#projects" passHref>
        <GiAmericanFootballHelmet
          onClick={() => toggleLink(3)}
          className={activeLink === 3 ? styles.active : styles.link}
        />
      </Link>

      <Link href="#skills" passHref>
        <IoMdConstruct
          onClick={() => toggleLink(4)}
          className={activeLink === 4 ? styles.active : styles.link}
        />
      </Link>

      <Link href="#contacts" passHref>
        <MdContactPhone
          onClick={() => toggleLink(5)}
          className={activeLink === 5 ? styles.active : styles.link}
        />
      </Link>
    </div>
  );
};

export default NavLogo;
