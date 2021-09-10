import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import SignupFormSuccess from './SignupFormSuccess';


const Form = () => {
  const [FormIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  }
  
  return (
    <>
      {!FormIsSubmitted ? <SignUpForm submitForm={submitForm} /> : <SignupFormSuccess />}
    </>
  )
}

export default Form;
