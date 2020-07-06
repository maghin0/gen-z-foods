import React from 'react';
import Scroll from '../common/Scroll';

import logo from '../../images/logo.png'
const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="wrapperlogo">
    <img src={logo} alt="" className="logostyle"/>
    </div>
    <div className="inner">
      <h1>Commission Free Online Ordering & Table Reservation System</h1>
     
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
