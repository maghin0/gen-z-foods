import React from 'react';
import Scroll from '../components/common/Scroll';

import logo from '../images/logo.png'
const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="wrapperlogo">
    <a href='/#'>
    <img src={logo} alt="genzfoods" className="logostyle"/>
    </a>
    </div>
    <div className="inner">
      <h1 className="headsuccess" >Thank you for contacting Gen-z Foods, we will be in touch.</h1>
      
    </div>
  </section>


export default Introduction;
