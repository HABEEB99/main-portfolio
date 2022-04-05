import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../lib/sanity';
import { BsGithub } from 'react-icons/bs';

const DaapsProjects = ({data}) => {
  return (
    data.map((item) => (
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

          <div className="flex items-center justify-around space-x-16 mt-4">
            <Link passHref href={item.codeLink}>
              <BsGithub className="text-2xl font-bold text-btn hover:text-white"/>
            </Link>
            <Link href="/" passHref>
              <button className="bg-btn text-white font-bold hover:bg-white hover:text-btn px-4 py-2 rounded-full">View Details</button>
            </Link>
          </div>
        </div>
      ))
  )
}

export default DaapsProjects