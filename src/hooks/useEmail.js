import React, { useState } from 'react';
import { notifyError, notifySuccess } from '../utils/notify';
import { validateEmail } from '../utils/email';

const useEmail = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true);
      return notifyError('Please check your email.');
    }
    setEmailError(false);
    setEmail('');
    notifySuccess('Email submitted.');
  };

  return {
    email,
    setEmail,
    emailError,
    handleSubmit,
  };
};

export default useEmail;
