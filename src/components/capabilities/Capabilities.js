import React from 'react';
import { Link } from 'gatsby';

import CapabilityList from './CapabilityList';

import profit from '../../images/profit-graph.png'
import sprofit from '../../images/sprofit-graph.png'
const Capabilities = () =>
  <section id="one" className="wrapper style3 fade-up">
    <div className="inner">
      <h2>  Make more money with gen z foods!</h2>
      <p style={{ textAlign: "center"}}>
     

Big portals like Otlob, Uber Eats, and Glovo take a hefty percentage of your online sales revenue (20-30%) which means the more you sell online the more money they’ll take from you. With gen z foods, you’ll pay a flat monthly subscription (only 750 EGP) no matter how many online sales you make, which means you won’t be punished for selling more online! The more sales you make the more money you’ll keep!
<br />
<p>Here’s an example to show you how much more money you can make with gen z foods online ordering system. If you have an average order of 50 EGP, and you sell an average of 20 online orders per day, that means you’ll have a monthly revenue of 30,000 EGP. If you’re making those sales on platforms such as Otlob or Uber Eats, you’ll be giving them 9,000 EGP, leaving you with 21,000 EGP. However, if you’re making those online sales with gen z foods, you’ll only give us a flat monthly fee of 750 EGP, and keep 29,250 EGP. Which means you get to make 8,250 EGP more with gen z foods! </p>
<br />
<br/>
<picture></picture>
   
   <source media="(min-width:1000px)" srcset={profit}/>

   <img src={sprofit} alt="" data-position="center center"/>

   </picture> 
      </p>
     
  
     
  

<br />
      <h2 id="two"> Our Services</h2>
      <h2 >
      Only <a style={{color: "#041836"}}> 750EGP/month</a> for all our services!
      </h2>
      <div className="features">
      
        <CapabilityList />
      </div>
     
    </div>
  </section>

export default Capabilities;
