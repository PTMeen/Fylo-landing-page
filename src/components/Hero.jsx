import React from 'react';
import illustration1 from '../assets/images/illustration-1.svg';
import useEmail from '../hooks/useEmail';

const Hero = () => {
  const { email, setEmail, emailError, handleSubmit } = useEmail();

  return (
    <section className='w-[90%] max-w-[1240px] mx-auto py-16 lg:flex lg:flex-row-reverse lg:justify-between'>
      <div className='w-[300px] lg:w-[600px] mx-auto'>
        <img className='w-full object-cover' src={illustration1} alt='' />
      </div>
      <article className='text-center lg:text-left text-veryDarkBlue max-w-[530px] mx-auto'>
        <h2 className='font-raleway font-bold text-2xl lg:text-4xl text-veryDarkBlue my-8'>
          All your files in one secure location, accessible anywhere.
        </h2>
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <form
          onSubmit={handleSubmit}
          className='my-8 lg:grid lg:grid-cols-3 lg:gap-2 lg:h-fit'>
          <div className=' w-full mb-4 lg:col-start-1 lg:col-span-2'>
            <input
              className={`px-4 py-2 lg:h-[40px] lowercase block w-full  border border-veryDarkBlue ${
                emailError && 'border-red-500'
              } rounded-sm `}
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className='my-1 text-red-500 text-left'>
                Please check your email.
              </p>
            )}
          </div>
          <div>
            <button className='w-full py-2 bg-brightBlue text-white capitalize rounded-sm hover:bg-blue-400 duration-300'>
              Get Started
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Hero;
