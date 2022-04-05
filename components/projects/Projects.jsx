import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../../lib/sanity';
import { BsGithub } from 'react-icons/bs';
import AllProjects from '../projects-category/AllProjects';
import ReactProjects from '../projects-category/ReactProjects';
import DaapsProjects from '../projects-category/DaapsProjects';

const styles = {
  tab: `cursor-pointer`,
  active: `text-2xl text-orange-600 cursor-pointer`,
};

const Projects = ({ data }) => {
  const [activeTab, setActiveTab] = useState(1);
  const toggleActiveTab = (idx) => {
    setActiveTab(idx);
  };

  const filteredData = (items, category) => {
    return items.filter((item) => item.tags.includes(category));
  };

  return (
    <div
      id="projects"
      className="w-screen  px-3 sm:px-6 md:px-12 lg:px-40 pt-20 flex flex-col items-center"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-btn font-bold underline">Projects</h1>
        <p className="italic text-xl mt-2 text-gray-500">
          What I have built so far
        </p>
      </div>

      <div className="text-2xl font-bold text-gray-400 flex items-center space-x-16 md:space-x-40 lg:space-x-60 mt-12 border-2 p-6 rounded-full">
        <h2
          onClick={() => toggleActiveTab(1)}
          className={activeTab === 1 ? styles.active : styles.tab}
        >
          ALL
        </h2>
        <h2
          onClick={() => toggleActiveTab(2)}
          className={activeTab === 2 ? styles.active : styles.tab}
        >
          REACT 
        </h2>
        <h2
          onClick={() => toggleActiveTab(3)}
          className={activeTab === 3 ? styles.active : styles.tab}
        >
          DAAPS
        </h2>
      </div>

      <div className=" mt-6 md:mt-6 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12 items-center justify-center">
        <>
          {activeTab === 1 && <AllProjects data={filteredData(data, 'all')} />}
        </>
        <>
          {activeTab === 2 && (
            <ReactProjects data={filteredData(data, 'reactjs')} />
          )}
        </>
        <>
          {activeTab === 3 && (
            <DaapsProjects data={filteredData(data, 'daaps')} />
          )}
        </>
      </div>
    </div>
  );
};

export default Projects;
