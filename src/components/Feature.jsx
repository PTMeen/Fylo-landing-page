import React from 'react';
import curveMobileBg from '../assets/images/bg-curve-mobile.svg';
import curveDesktopBg from '../assets/images/bg-curve-desktop.svg';
import illustration2 from '../assets/images/illustration-2.svg';
import arrowIcon from '../assets/images/icon-arrow.svg';
import Testimony from './Testomony';

const Feature = () => {
  return (
    <section className='relative w-screen bg-lightGrayishBlue mt-16'>
      <div>
        <img
          className='w-screen absolute -top-8 lg:hidden'
          src={curveMobileBg}
          alt=''
          aria-hidden={true}
        />
        <img
          className=' h-[80px] w-screen absolute -top-[80px] hidden lg:block'
          src={curveDesktopBg}
          alt=''
          aria-hidden={true}
        />
      </div>
      <div className='w-[90%] max-w-[1240px] mx-auto py-16 lg:flex lg:flex-row-reverse lg:justify-between'>
        <div className='w-[300px] lg:w-[550px] mx-auto lg:flex lg:justify-center lg:items-center'>
          <img
            className='w-full object-cover'
            src={illustration2}
            alt=''
            aria-hidden={true}
          />
        </div>
        <div className='max-w-[600px]'>
          <h2 className='text-lg lg:text-4xl lg:text-left font-bold text-veryDarkBlue mb-8 mt-16 text-center'>
            Stay productive, wherever you are
          </h2>
          <article className='lg:text-left'>
            <p className='mb-4'>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
          </article>
          <div className='text-center mt-8  grid place-items-center lg:place-content-start'>
            <a
              className='flex text-moderateCyan pb-2 border-b border-b-moderateCyan hover:text-green-300 hover:border-green-300 duration-300'
              href='#'>
              See how Fylo works
              <img
                className='w-[25px] ml-2 fill-inherit'
                src={arrowIcon}
                alt=''
                aria-hidden={true}
              />
            </a>
          </div>
          <div className='my-16'>
            <Testimony />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
