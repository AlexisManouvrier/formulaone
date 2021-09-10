import React from 'react';
import useForm from "./UseForm";
import emailjs from "emailjs-com";
//import '../Styles/Form.css';



const SignUpForm = ({ submitForm }) => {
  const { handleChange, handleFormSubmit, values, errors } = useForm(submitForm);

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_zybvu0n",
      "template_vgifjxp",
      e.target,
      "user_Q8dPZH323utYc2XigSKn5"
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }

  return (
    <>
      <div className="Form">
        <div className="text">
          <h2 className="title">Nous contacter </h2>
          <p>Vous souhaitez organiser un évenement à nos cotés, nous soumettre de nouvelles idées ou tout simplement adhérer à notre association? Ce formulaire est là pour ça!</p>
        </div>
        <form className="form-wrapper" onSubmit={sendEmail}>
          <div className="name">

            <input className="input" type="text" name="name" value={values.name} placeholder="votre nom" onChange={handleChange} />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}
          <div className="email">

            <input
              className="input" type="email" name="email" value={values.email} placeholder="votre email" onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="message">
            <textarea type="text" placeholder="votre message" name="message" value={values.message} onChange={handleChange} />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <div>
            <button className="Submit" onClick={handleFormSubmit}>Envoyer</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default SignUpForm;
