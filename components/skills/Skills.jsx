import React from 'react';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity';

const Skills = ({ skills, experiences }) => {
  return (
    <div
      id="skills"
      className="w-screen min-h-[90vh] px-3 sm:px-6 md:px-12 lg:px-40 pt-16 lg:pt-20 flex flex-col items-center"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-btn font-bold underline">Skills</h1>
        <p className="italic text-xl mt-2 text-gray-500">
          Job Experience and skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full min-h-[50vh] mt-12">
        <div className="flex flex-col-reverse items-center justify-center">
          {experiences?.map((item) => (
            <div key={item._id} className="flex flex-col p-4 lg:p-2 space-y-1">
              <h1 className="text-2xl text-gray-700 font-bold">{item.name}</h1>
              <span className="text-blue-600 text-xl ">{item.company}</span>
              <span className="text-gray-400 italic text-lg">{item.date}</span>
              <span className="text-gray-600 text-lg md:text-base">
                {item.desc}
              </span>
            </div>
          ))}
        </div>

        <div className=" grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-y-6 gap-x-10 lg:gap-x-16 items-center self-center justify-self-center">
          {skills.map((item) => (
            <div
              key={item._id}
              className="flex flex-col items-center justify-center w-16 h-16"
            >
              <div className="relative w-10 h-10 hover:scale-110">
                <Image
                  alt={item.title}
                  objectFit="contain"
                  src={urlFor(item.icon).url()}
                  layout="fill"
                />
              </div>
              <h3 className="mt-1 text-gray-600 text-[0.5rem] font-bold">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
