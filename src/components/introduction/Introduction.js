import React from 'react';
import Scroll from '../common/Scroll';

import logo from '../../images/logo.png'
const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="wrapperlogo">
    <img src={logo} alt="" className="logostyle"/>
    </div>
    <div className="inner">
      <h1 className="head">Commission Free Online Ordering & Table Reservation System</h1>
      <div className="wrapperlogo">
      <ul className="actions logostyle">
        <li>
          <Scroll type="id" element="four">
            <a href="#four" className="button cta">
              Get in Touch
            </a>
          </Scroll>
        </li>
      </ul>
      </div>
    </div>
  </section>


export default Introduction;
