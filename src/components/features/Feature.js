import React from 'react';
import { Link } from 'gatsby';

const Feature = ({href, image, simage, heading, description, to}) =>
  <section>
    <div  className="image" >
    
    <picture>
<<<<<<< HEAD
    <a href={href}alt="image">
  <source media="(min-width: 500px)" srcset={image}/>
=======
   
  <source media="(min-width:1200px)" srcset={image}/>

>>>>>>> 3ef30c20c8e2564dcec975db2c14efe038a05eb3
  <img src={simage} alt="" data-position="center center"/>
 
</picture> 
    

    </div>
    <div className="content">
      <div className="inner">
        <h3 style={{fontSize: "1.5em"}}>{heading}</h3>
        <p>{description}</p>
        
      </div>
    </div>
  </section>

export default Feature;
