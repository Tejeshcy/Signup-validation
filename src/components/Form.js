import React, { useState } from 'react'
import Signup from './Signup';
import SuccessForm from './SuccessForm';

function Form() {
  const[isSubmitted, setIsSubmitted]= useState(false);

  const submitForm = () =>{
    setIsSubmitted(true)
  }

  return (
    <div>
      {isSubmitted? <SuccessForm /> : <Signup submitForm={submitForm}/>}
    </div>
  )
}

export default Form;