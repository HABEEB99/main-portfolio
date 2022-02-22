import Link from 'next/link';
import React from 'react';

const NavItem = ({ title, path, Icon }) => {
  return (
    <Link href={path} passHref>
      <li className="flex items-center  group cursor-pointer ml-6">
        <Icon className="hidden group-hover:block group-hover:animate-bounce text-btn" />
        <h3 className="ml-1 text-gray-400  text-md group-hover:font-bold group-hover:text-gray-700">
          {title}
        </h3>
      </li>
    </Link>
  );
};

export default NavItem;
