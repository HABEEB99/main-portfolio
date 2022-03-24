import React from 'react';
import Socials from '../showcase/Socials';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const SocialMedia = () => {
  return (
    <div className="hidden md:block absolute bottom-8 left-8">
      <Socials path="#" Icon={BsGithub} />
      <Socials path="#" Icon={FaLinkedinIn} />
      <Socials path="#" Icon={GrInstagram} />
      <Socials path="#" Icon={BsTwitter} />
    </div>
  );
};

export default SocialMedia;
