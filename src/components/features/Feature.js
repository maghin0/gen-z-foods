import React from 'react';
import { Link } from 'gatsby';

const Feature = ({href, image, simage, heading, description, to}) =>
  <section>
    <div  className="image" >
    
    <picture>
   
  <source media="(min-width:500px)" srcset={image}/>

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
