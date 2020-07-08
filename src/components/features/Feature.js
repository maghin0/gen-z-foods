import React from 'react';
import { Link } from 'gatsby';

const Feature = ({href, image, heading, description, to}) =>
  <section>
    <div  className="image" >
    <a href={href}alt="image">
      <img src={image} alt="" data-position="center center" />
    </a>
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
