import React from 'react';
import logoLight from '../assets/images/logo-light.svg';
import phoneIcon from '../assets/images/icon-phone.svg';
import emailIcon from '../assets/images/icon-email.svg';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-veryDarkBlue py-16 relative'>
      <div className='w-[90%] max-w-[1240px] mx-auto text-lightGrayishBlue text-sm lg:flex justify-between items-baseline'>
        {/* left */}
        <div>
          <img className='mb-8' src={logoLight} alt='Fylo logo' />
          <div>
            <div className='flex mb-4 '>
              <img
                className='w-[20px] h-[20px] mr-4'
                src={phoneIcon}
                alt=''
                aria-hidden={true}
              />
              <p>Phone: +1-543-123-4567</p>
            </div>
            <div className='flex'>
              <img
                className='w-[20px] h-[15px] mr-4'
                src={emailIcon}
                alt=''
                aria-hidden={true}
              />
              <p> example@fylo.com</p>
            </div>
          </div>
        </div>

        {/* middle */}
        <div className='mt-8 lg:mt-0 lg:w-[250px] lg:flex lg:justify-between'>
          <ul className='mb-16 lg:mb-0'>
            <li className='mb-4'>
              <a href='#'>About Us</a>
            </li>
            <li className='mb-4'>
              <a href='#'>Jobs</a>
            </li>
            <li className='mb-4'>
              <a href='#'>Press</a>
            </li>
            <li className='mb-4'>
              <a href='#'>Blog</a>
            </li>
          </ul>
          <ul className=''>
            <li className='mb-4'>
              <a href='#'>Contact Us</a>
            </li>
            <li className='mb-4'>
              <a href='#'>Terms</a>
            </li>
            <li className='mb-4'>
              <a href='#'>Privacy</a>
            </li>
          </ul>
        </div>

        {/* right */}
        <ul className='flex justify-center  mt-16 lg:mt-0'>
          <li>
            <a href='https://www.facebook.com/'>
              <div className='border border-white p-1 rounded-full'>
                <FaFacebookF size={15} />
              </div>
            </a>
          </li>
          <li className='mx-2 lg:mx-4'>
            <a href='https://twitter.com/'>
              <div className='border border-white p-1 rounded-full'>
                <AiOutlineTwitter size={15} />
              </div>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/'>
              <div className='border border-white p-1 rounded-full'>
                <AiOutlineInstagram size={15} />
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className=' bottom-2 w-[90%] mx-auto mt-16 text-center'>
        <p className='attribution'>
          Challenge by
          <a
            className='text-violet-700 ml-1'
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'>
            Frontend Mentor
          </a>
          . Coded by
          <a className='text-violet-700 ml-1' href='#'>
            PTMeen
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
