import React from 'react';

const ContactForm = () =>
  <section style={{marginLeft: "3rem"}}>
 
  <h3>Social</h3>
        <ul className="icons">
          <li>
            <a href="https://www.youtube.com/channel/UCzXPXCckCicUToA15pnN7UA " className="fa-youtube fa-2x"  target="_blank"
                        rel="noopener noreferrer">
              <span className="label">Youtube</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Gen-Z-Foods-113501907094326" className="fa-facebook fa-2x"  target="_blank"
                        rel="noopener noreferrer">
              <span className="label">Facebook</span>
            </a>
          </li>
     </ul>
     <ul className="icons">
          <li>
         
        <h3>Email</h3>
        <a href="mailto:foodsgenz@gmail.com"  className="fa-mail-reply-all fa-2x">
        <span style={{paddingLeft: 10, fontSize: "1.1rem"}}>foodsgenz@gmail.com</span>
        </a>
      </li>
      </ul>
      
    {/* <form name="contact gen-z" method="POST" data-netlify="true">
      <div className="fields">
        <div className="field half">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" />
        </div>
      </div>
      <ul className="actions">
        <li>
          <a href="/success" target="_blank" rel="noopener noreferrer" className="button submit">
            Send Message
          </a>
        </li>
      </ul>
    </form> */}
  </section>

export default ContactForm;
