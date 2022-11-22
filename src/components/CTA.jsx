import React from 'react';
import useEmail from '../hooks/useEmail';

const CTA = () => {
  const { email, setEmail, emailError, handleSubmit } = useEmail();

  return (
    <section className='bg-desaturatedBlue py-16 lg:flex'>
      <article className='w-[90%] max-w-[1240px] mx-auto text-lightGray text-center lg:text-left lg:flex lg:justify-between'>
        <div className='max-w-[500px] mx-auto'>
          <h2 className='text-xl lg:text-4xl text-white font-bold'>
            Get early access today
          </h2>

          <p className='my-8'>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <form className='lg:w-[500px]' onSubmit={handleSubmit}>
          <input
            className={`block mx-auto lg:mx-0 w-full mb-2 lg:mb-4 px-2 py-1 lg:px-4 lg:py-2 rounded-sm text-veryDarkBlue border ${
              emailError ? 'border-red-500' : 'border-veryDarkBlue'
            }`}
            type='text'
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <p className='my-1 text-red-500'>
              Please make sure your email is valid.
            </p>
          )}
          <button className='capitalize w-full lg:w-[40%] bg-brightBlue text-white px-2 py-1 lg:px-4 lg:py-2 rounded-sm hover:bg-blue-400 duration-300'>
            get started for free
          </button>
        </form>
      </article>
    </section>
  );
};

export default CTA;
