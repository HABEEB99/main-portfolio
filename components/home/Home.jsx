import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { BsFillEyeFill } from 'react-icons/bs';
// import Showcase from '../showcase/Showcase';

const Home = () => {
  return (
    <div
      id="home"
      className="bg-body h-[90vh] pt-20 w-screen px-3 sm:px-6 md:px-16 lg:px-40 flex flex-col-reverse md:space-y-0 md:flex-row items-center justify-between "
    >
      <div className="flex flex-col w-96 md:w-[28rem] space-y-8  px-4 md:px-0">
        <h1 className="text-5xl lg:text-7xl font-bold text-gray-600">
          Building aesthetically pleasing web and mobile experiences
        </h1>
        <Link href="#projects" passHref>
          <div className="bg-btn hover:bg-ctaDark h-16 w-full md:w-[22rem] group transition-transform duration-300 ease-in rounded-full cursor-pointer flex items-center justify-center space-x-2 ">
            <BsFillEyeFill className="text-3xl text-white font-bold group-hover:text-white" />
            <h2 className="text-4xl text-white font-bold group-hover:text-white">
              My Work
            </h2>
          </div>
        </Link>
      </div>

      <div className="relative h-[20rem] w-[20rem] md:h-[30rem] md:w-[25rem]">
        <Image
          src="/programmer.png"
          alt="hero image"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Home;
