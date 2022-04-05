import React, { useState, useEffect } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BiMailSend } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdOutgoingMail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const Contacts = () => {
  const [submit, setSubmit] = useState(false);

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    event.preventDefault();

    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (submit) {
      setTimeout(() => {
        setSubmit(false);
      }, 4000);
    }
  }, [submit]);

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .send(
        'service_hxyir1g',
        'template_7d8n2fj',
        inputs,
        'user_DdmrQ6ZEsmIcoqdpkaGIL'
      )
      .then(
        (response) => {
          console.log('MESSAGE SUCCESSFULLY SENT', response);
          setInputs({ name: '', email: '', subject: '', message: '' });
          setSubmit(true);
        },
        (error) => {
          console.log('MESSAGE FAILED TO SUBMIT', error);
        }
      );
    console.log(inputs);
  };

  return (
    <div
      id="contacts"
      className="w-screen h-[115vh] md:h-[90vh] px-3 sm:px-6 md:px-12 lg:px-40 pt-20 flex flex-col "
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-btn font-bold underline">Contacts</h1>
        <p className="italic text-xl mt-2 text-gray-500">
          Contact me through this channels
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-10">
        <form onSubmit={sendEmail} className="flex flex-col space-y-8">
          <div className="relative">
            <input
              value={inputs.name}
              onChange={handleChange}
              className="w-[22rem] md:w-[33rem] text-gray-800 p-2 peer placeholder-transparent border-4 shadow-md border-ctaLight bg-transparent rounded-lg focus:outline-none focus:border-btn"
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              required
            />
            <label
              className="peer-focus:-top-8 peer-focus:text-2xl peer-focus:text-gray-500 peer-focus:pl-0 transition-transform duration-300 ease-in peer-placeholder-shown:pl-2 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-[0.4rem] absolute text-2xl font-bold -top-8 text-gray-500 left-0"
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div className="relative">
            <input
              value={inputs.email}
              onChange={handleChange}
              className="w-[22rem] md:w-[33rem] text-gray-800 p-2 peer placeholder-transparent border-4 shadow-md border-ctaLight bg-transparent rounded-lg focus:outline-none focus:border-btn"
              type="text"
              id="email"
              placeholder="Email"
              name="email"
              required
            />
            <label
              className="peer-focus:-top-8 peer-focus:text-2xl peer-focus:text-gray-500 peer-focus:pl-0 transition-transform duration-300 ease-in peer-placeholder-shown:pl-2 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-[0.4rem] absolute text-2xl font-bold -top-8 text-gray-500 left-0"
              htmlFor="Email"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              value={inputs.subject}
              onChange={handleChange}
              className="w-[22rem] md:w-[33rem] text-gray-800 p-2 peer placeholder-transparent border-4 shadow-md border-ctaLight bg-transparent rounded-lg focus:outline-none focus:border-btn"
              type="text"
              id="subject"
              placeholder="Subject"
              name="subject"
              required
            />
            <label
              className="peer-focus:-top-8 peer-focus:text-2xl peer-focus:text-gray-500 peer-focus:pl-0 transition-transform duration-300 ease-in peer-placeholder-shown:pl-2 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-[0.4rem] absolute text-2xl font-bold -top-8 text-gray-500 left-0"
              htmlFor="name"
            >
              Subject
            </label>
          </div>
          <div className="relative">
            <textarea
              value={inputs.message}
              onChange={handleChange}
              className="w-[22rem] md:w-[33rem] text-gray-800 p-2 peer placeholder-transparent border-4 shadow-md border-ctaLight bg-transparent rounded-lg focus:outline-none focus:border-btn"
              type="text"
              id="message"
              placeholder="message"
              name="message"
            />
            <label
              className="peer-focus:-top-8 peer-focus:text-2xl peer-focus:text-gray-500 peer-focus:pl-0 transition-transform duration-300 ease-in peer-placeholder-shown:pl-2 peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-[0.4rem] absolute text-2xl font-bold -top-8 text-gray-500 left-0"
              htmlFor="message"
            >
              Message
            </label>
          </div>
          <div>
            {submit ? (
              <span className="text-lg text-ctaDark">
                Thanks! You will get a response soon{' '}
              </span>
            ) : (
              <button className="p-4 text-3xl font-bold w-full flex items-center justify-center space-x-6 text-white bg-btn hover:bg-white hover:text-btn rounded-full">
                Send
                <BiMailSend className="self-center mt-1 ml-2" />
              </button>
            )}
          </div>
        </form>

        <div className="flex flex-col mb-10 md:mb-0 justify-start space-y-6">
          <Link href="https://www.linkedin.com/in/habeeb-ahmadu/" passHref>
            <div className="flex items-center space-x-4 cursor-pointer">
              <FaLinkedinIn className="text-5xl text-btn font-bold" />
              <h2 className="text-xl text-gray-400">LinkedIn</h2>
            </div>
          </Link>

          <Link href="https://github.com/HABEEB99" passHref>
            <div className="flex items-center space-x-4 cursor-pointer">
              <BsGithub className="text-5xl text-btn font-bold" />
              <h2 className="text-xl text-gray-400">GitHub</h2>
            </div>
          </Link>

          <Link href="https://www.instagram.com/hbo39/" passHref>
            <div className="flex items-center space-x-4 cursor-pointer">
              <AiFillInstagram className="text-5xl text-btn font-bold" />
              <h2 className="text-xl text-gray-400">Instagram</h2>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <MdOutgoingMail className="text-5xl text-btn font-bold" />
            <h2 className="text-xl text-gray-400">habeebahmadu1@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
