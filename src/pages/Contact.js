import React from 'react';
import FormImage from '../images/FormImage.jpg';
import Form from '../components/Form';

const Contact = () => {
    return (
      <div className="container-contact">
        <div id="Appheader" className="left App-header">
          <img src={FormImage} className="FormImage" alt="FormImage" />
        </div>

        <div id="backForm" className="right blackdiv">
          <Form />
        </div> 
      </div>  
      );
};

export default Contact;