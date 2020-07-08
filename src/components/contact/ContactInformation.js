import React from "react";

const ContactInformation = () =>
  <section>
    <ul className="contact">
      
      <li>
        <h3>Email</h3>
        <a href="/#">foodsgenz@gmail.com</a>
      </li>
      <li>
        <h3>Phone</h3>
        <span>(+20) 114-540-1948</span>
      </li>
      <li>
        <h3>Social</h3>
        <ul className="icons">
          <li>
            <a href="https://www.youtube.com/channel/UCzXPXCckCicUToA15pnN7UA " className="fa-youtube"  target="_blank"
                        rel="noopener noreferrer">
              <span className="label">Youtube</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Gen-Z-Foods-113501907094326" className="fa-facebook"  target="_blank"
                        rel="noopener noreferrer">
              <span className="label">Facebook</span>
            </a>
          </li>
         
          <li>
            <a href="https://www.instagram.com/foodsgenz/ " className="fa-instagram"  target="_blank"
                        rel="noopener noreferrer">
              <span className="label">Instagram</span>
            </a>
          </li>
         
        </ul>
      </li>
    </ul>
  </section>

export default ContactInformation;
