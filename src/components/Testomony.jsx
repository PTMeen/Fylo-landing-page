import React from 'react';
import quoteIcon from '../assets/images/icon-quotes.svg';
import avatar from '../assets/images/avatar-testimonial.jpg';

const Testimony = () => {
  return (
    <article className='bg-white p-8 text-sm text-veryDarkBlue rounded-md shadow-md lg:max-w-[60%]'>
      <img
        className='scale-150 mb-4'
        src={quoteIcon}
        alt=''
        aria-label={true}
      />
      <p>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className='flex mt-8'>
        <img
          className='w-[45px] h-[45px] rounded-full mr-4'
          src={avatar}
          alt='Kyle Burton'
        />
        <div>
          <p className='text-veryDarkBlue font-semibold'>Kyle Burton</p>
          <p className='text-xs font-thin mt-1 opacity-75'>
            Founder & CEO, Huddle
          </p>
        </div>
      </div>
    </article>
  );
};

export default Testimony;
