import React from "react";

const ContactInformation = () =>
  <section>
    <ul className="contact">
      
    <ul className="icons">
      <li>
        <h3>Phone</h3>
       
       <a href="https://wa.me/201551030938 " target="_blank"
                        rel="noopener noreferrer" className=" fa-whatsapp fa-2x"> <span>(+20) 114-540-1948</span></a>
      
      </li>
      </ul>
      <li>
      <h3>Direct Message</h3>
      <ul className="icons">
          <li>
            <a href="https://www.instagram.com/foodsgenz/ " className="fa-instagram fa-2x"  target="_blank"
                        rel="noopener noreferrer">
                        
              <span style={{paddingLeft: 10}}> Instagram</span>
            </a>
          </li>
          </ul>
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
          
          <li>
        <h3>Email</h3>
        <a href="mailto:foodsgenz@gmail.com">foodsgenz@gmail.com</a>
      </li>
       
      </li>
    </ul>
  </section>

export default ContactInformation;
