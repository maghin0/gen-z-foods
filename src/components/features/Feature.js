import React from 'react';
import { Link } from 'gatsby';

const Feature = ({href, image, simage, heading, description, to}) =>
  <section>
    <div  className="image" >
    
    <picture>
    <a href={href}alt="image">
  <source media="(min-width: 500px)" srcset={image}/>
  <img src={simage} alt="" data-position="center center"/>
  </a>
</picture> 
      

    </div>
    <div className="content">
      <div className="inner">
        <h2>{heading}</h2>
        <p>{description}</p>
        <ul className="actions">
          <li>
            <Link className="button" to={to.href}>
              {to.label}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>

export default Feature;
