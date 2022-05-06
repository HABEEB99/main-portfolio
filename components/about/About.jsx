import React from 'react';
import Image from 'next/image';
import Container from '../container/Container';
import { urlFor } from '../../lib/sanity';

const About = ({ data }) => {
  return (
    <div
      id="about"
      className="w-screen lg:h-[90vh] px-3 sm:px-6 md:px-12 lg:px-40 pt-20 flex flex-col items-center"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-btn font-bold underline">About</h1>
        <p className="italic text-xl mt-2 text-gray-500">
          Here are the services that i offers
        </p>
      </div>

      <div className=" mt-6 md:mt-6 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12 items-center justify-center">
        {data.map((item) => (
          <div
            key={item._id}
            className="group  w-80 lg:w-72 h-80 py-6 px-3 bg-gray-300 shadow-2xl flex flex-col items-center rounded-t-xl"
          >
            <div className="relative w-40 h-40 flex self-center justify-center group-hover:scale-[1.3] transition-transform duration-100 ease-in-out ">
              <Image
                alt={item.title}
                objectFit="contain"
                src={urlFor(item.imgUrl).url()}
                layout="fill"
              />
            </div>
            <div className="flex items-center flex-col mt-4">
              <h1 className="font-bold text-xl text-gray-700 ">{item.title}</h1>
              <p className="text-gray-500 text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
