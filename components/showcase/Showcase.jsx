import Image from 'next/image';
import React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn, FaReact } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FaHome, FaInfoCircle } from 'react-icons/fa';
import { IoMdConstruct } from 'react-icons/io';
import { MdContactPhone } from 'react-icons/md';
import { GiAmericanFootballHelmet } from 'react-icons/gi';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import Socials from './Socials';

const Showcase = () => {
  return (
    <div className="w-screen h-[90vh] px-6 md:px-12 lg:px-40 items-center justify-center flex">
      <div className='mt-40 md:mt-0'>
        <Image
          className="opacity-50"
          src="/engineer.png"
          width={400}
          height={400}
          alt="hero-image"
        />
      </div>

      <div className="bg-ctaLight shadow-2xl w-72 h-32 rounded-xl flex flex-col items-center justify-center absolute top-24 left-[6.5rem] md:top-20 md:left-24 lg:top-32 lg:left-48">
        <div className="flex items-center">
          <Image src="/hands.png" width={50} height={50} alt="wave" />
          <div className="flex flex-col ml-4 justify-center">
            <span className="text-gray-400">Greetings! I am</span>
            <h2 className="text-ctaDark font-bold text-xl">Habeeb Ahmadu</h2>
          </div>
        </div>
        <h2 className="text-btn text-2xl mt-4 font-bold">
          Front-end Developer
        </h2>
      </div>

      <div className="hidden md:block absolute bottom-8 left-8">
        <Socials path="#" Icon={BsGithub} />
        <Socials path="#" Icon={FaLinkedinIn} />
        <Socials path="#" Icon={GrInstagram} />
        <Socials path="#" Icon={BsTwitter} />
      </div>

      <div className="hidden md:block absolute top-60 right-8">
        <FaHome className="text-xl md:text-2xl lg:text-3xl text-gray-300 hover:text-btn font-bold mt-3" />
        <FaInfoCircle className="text-xl md:text-2xl lg:text-3xl text-gray-300 hover:text-btn font-bold mt-3" />
        <GiAmericanFootballHelmet className="text-xl md:text-2xl lg:text-3xl text-gray-300 hover:text-btn font-bold mt-3" />
        <IoMdConstruct className="text-xl md:text-2xl lg:text-3xl text-gray-300 hover:text-btn font-bold mt-3" />
        <MdContactPhone className="text-xl md:text-2xl lg:text-3xl text-gray-300 hover:text-btn font-bold mt-3" />
      </div>

      <div className="bg-body w-16 h-16 md:w-[6rem] md:h-[6rem] lg:w-32 lg:h-32 absolute top-[15rem] left-[25rem] md:top-32 md:left-[45rem] lg:top-32 lg:left-[68rem] rounded-full shadow-2xl flex items-center justify-center">
        <FaReact className="text-6xl md:text-7xl lg:text-8xl animate-pulse text-blue-300" />
      </div>

      <div className="bg-body w-16 h-16 md:w-[6rem] md:h-[6rem] lg:w-32 lg:h-32 absolute bottom-10 left-[2rem] md:bottom-60 md:left-[10rem]  lg:bottom-60 lg:left-[20rem] rounded-full shadow-2xl flex items-center justify-center">
        <SiRedux className="text-6xl md:text-7xl lg:text-8xl animate-spin text-purple-400" />
      </div>

      <div className="bg-body w-16 h-16 md:w-[6rem] md:h-[6rem] lg:w-32 lg:h-32 animate-bounce absolute bottom-10 right-[2rem] md:bottom-10 md:right-[10rem] lg:bottom-10 lg:right-[20rem] rounded-full shadow-2xl flex items-center justify-center">
        <SiTailwindcss className="text-6xl md:text-7xl lg:text-8xl text-blue-500" />
      </div>
    </div>
  );
};

export default Showcase;
