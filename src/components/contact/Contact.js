import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="four" className="wrapper style1 fade-up" >
    <div className="inner" >
      <h2>Get in touch</h2>
      
      <div className="split style5">
       
        <ContactInformation />
        <ContactForm />
      </div>
    </div>
  </section>

export default Contact;
