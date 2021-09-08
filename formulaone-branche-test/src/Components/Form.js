import React from 'react';
import '../Styles/Form.css';
import emailjs from 'emailjs-com';
import Popup from "reactjs-popup";

const Form = () => {
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
    <div className="blackContainer">
      <div className="Form">
        <div className="text">
          <h2>CONTACTEZ NOUS</h2>
          <p>Vous souhaitez organiser un évenement à nos cotés, nous soumettre de nouvelles idées ou tout simplement adhérer à notre association? Ce formulaire est là pour ça!</p>
        </div>
        <form onSubmit={sendEmail}>
          <input type="text" name="name" required placeholder="votre nom" />
          <input type="email" name="user_email" required placeholder="votre email" />
          <textarea name="message" required placeholder="votre message" />
          <input type='submit' value='Send' className="submit" required />

          <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
          </Popup>

        </form>
      </div>
    </div >
  )
}

export default Form;



