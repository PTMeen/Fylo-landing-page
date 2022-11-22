import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CTA from './components/CTA';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Feature />
        <CTA />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
