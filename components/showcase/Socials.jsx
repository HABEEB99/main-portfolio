import Link from 'next/link';
import React from 'react';

const Socials = ({ Icon, path }) => {
  return (
    <Link href={path} passHref>
      <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 mt-2 group cursor-pointer rounded-full bg-ctaLight shadow-2xl flex items-center justify-center">
        <Icon className="text-1xl md:text-2xl lg:text-3xl text-body group-hover:text-btn" />
      </div>
    </Link>
  );
};

export default Socials;
