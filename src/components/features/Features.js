import React from 'react';

import pic1 from '../../images/pic01.png';
import pic2 from '../../images/pic02.png';
import pic3 from '../../images/pic03.png';
import spic1 from '../../images/spic01.png';
import spic2 from '../../images/spic02.png';
import spic3 from '../../images/spic03.png';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: pic1,
      simage: spic1,
      heading: 'Take orders from Facebook',
      description: 'Engage and monetize your Facebook followers by allowing them to order directly on your Facebook page. Create an online ordering opportunity where your customers spend time.',
      to: {
        href: '/',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: pic2,
      simage: spic2,
      heading: 'Take table reservations',
      description: 'With our table booking system, you can allow your clients to book a table and also order food ahead if they so wish. Now the food waits for the customers, not the other way around. You are offering your customers, the ultimate dining experience by allowing them to order your delicious food in advance.',
      to: {
        href: '/',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: pic3,
      simage: spic3,
      heading: 'Take orders from your site', 
      description: 'If you have a website, let your customers order directly from your own custom branded website. Turn your web traffic to loyal customers. We’ll take care of the heavy lifting by setting it all up for you.',
      to: {
        href: '/',
        label: 'Learn more',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="two" className="wrapper style2 spotlights">
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
}

export default Features;
