import React from 'react';
import { Link } from 'gatsby';

import CapabilityList from './CapabilityList';

const Capabilities = () =>
  <section id="one" className="wrapper style3 fade-up">
    <div className="inner">
      <h2> Our Story</h2>
      <p style={{ textAlign: "center"}}>
     

Big portals like Otlob, Uber Eats, and Glovo tell you what to do, keep your clients for themselves and hope to resell them back to you and your competitors as orders and charge a commission. Do you also see a problem there? There is a definite advantage of having your own online ordering system.

Online ordering means less hassle of handling undecided clients via phone and the staff time lost in the process. Moreover, having online ordering monetizes your online presence and opens a whole new market of customers that are online-based. With our online ordering system, the order confirmation is received by your clients in real time. That’s why your clients will love ordering online over and over again.
      </p>
<br />
      <h2 id="two"> Our Services</h2>
      <div className="features">
      
        <CapabilityList />
      </div>
     
    </div>
  </section>

export default Capabilities;
