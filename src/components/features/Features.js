import React from 'react';

import pic1 from '../../images/pic01.jpg';
import pic2 from '../../images/pic02.jpg';
import pic3 from '../../images/pic03.jpg';
import spic1 from '../../images/spic01.jpg';
import spic2 from '../../images/spic02.jpg';
import spic3 from '../../images/spic03.jpg';


import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: pic1,
      simage: spic1,
      heading: 'Take orders from your site',
      description: 'If you have a website, let your customers order directly from your own custom branded website. Turn your web traffic to loyal customers. We’ll take care of the heavy lifting by setting it all up for you.',
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
      heading: 'Monetize your social media followers', 
      description: 'Engage and monetize your Facebook/Instagram followers by easily directing them from your Facebook page or Instagram account to order online. Create an online ordering opportunity where your customers are spending time.',
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
