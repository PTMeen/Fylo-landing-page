import React from 'react';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <header className='w-[90%] mx-auto max-w-[1240px] flex justify-between items-center py-8 font-raleway'>
      <img className='w-[90px] lg:w-[120px]' src={logo} alt='Fylo logo' />
      <nav className='text-sm lg:text-lg h-fit'>
        <ul className='flex'>
          <li className='ml-6 lg:ml-12'>
            <a href='#'>Features</a>
          </li>
          <li className='ml-6 lg:ml-12'>
            <a href='#'>Team</a>
          </li>
          <li className='ml-6 lg:ml-12'>
            <a href='#'>Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
