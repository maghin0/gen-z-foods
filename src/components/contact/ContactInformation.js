import React from "react";

const ContactInformation = () =>
  <section style={{marginLeft: "3rem"}}>
    <ul className="contact">
      
    <ul className="icons">
      <li>
        <h3>Phone</h3>
       
       <a href="https://wa.me/201551030938 " target="_blank"
                        rel="noopener noreferrer" className=" fa-whatsapp fa-2x"> 
                        <span style={{paddingLeft: 10, fontSize: "1.5rem"}} >(+20) 114-540-1948</span></a>
      
      </li>
      </ul>
      <li>
      <h3>Direct Message</h3>
      <ul className="icons">
          <li>
            <a href="https://www.instagram.com/foodsgenz/ " className="fa-instagram fa-2x"  target="_blank"
                        rel="noopener noreferrer">
                        
              <span style={{paddingLeft: 10, fontSize: "1.5rem"}}> Instagram</span>
            </a>
          </li>
          </ul>
        
       
      </li>
    </ul>
  </section>

export default ContactInformation;
