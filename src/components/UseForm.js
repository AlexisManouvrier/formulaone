import { useState, useEffect } from "react";
import Validation from "./Validation";
//import React from 'react';

const useForm = (submitForm) => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, SetErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values, [event.target.name]: event.target.value,
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    SetErrors(Validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors])
  return (
    { handleChange, handleFormSubmit, errors, values }
    );

}
export default useForm;