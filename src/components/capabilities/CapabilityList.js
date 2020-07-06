import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'Take Unlimited Online Orders',
      description: 'We provide you an online ordering system that works with your website or facebook page! No matter how many online orders you get, you’ll only be charged a flat subscription fee. Your customers can order immediately or schedule an order for later, pick up or delivery.',
      iconClass: 'fa-shopping-cart',
    },
    {
      heading: 'Take Unlimited Table Reservations',
      description: 'We also provide a table reservation system if your customers want to eat at your restaurant. You can still get as many reservations and still only pay the flat subscription fee',
      iconClass: 'fa-tag',
    },
    {
      heading: 'Menu Set Up',
      description: 'We will set up an online menu for you that your customers can use to choose their orders. We’ll also use research backed menu item descriptions tailored for SEO and keywords proven to increase sales. You can also run promotions or special deals and they will appear at the top of your online menu.',
      iconClass: 'fa-cog',
    },
    {
      heading: 'Detailed Reports',
      description: 'We’ll provide you with analytics on all the orders taken online so you can take business decisions based on relevant data from the reporting dashboard.',
      iconClass: 'fa-bar-chart-o',
    },
    {
      heading: 'Google Business Set Up',
      description: 'We’ll set up a Google Business account for your restaurant so you’re more visible online whenever you’re searched on Google.',
      iconClass: 'fa-google',
    },
    {
      heading: 'Flat Subscription, No Commission',
      description: 'All of our services come at an affordable flat subscription fee, there is no commission for how many orders you get or table reservations. So the more you sell the more you earn! There’s no contract so you you can cancel your subscription anytime.',
      iconClass: 'fa-diamond',
    },
  ]

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map((capability) => <Capability key={capability.heading} {...capability} />)}
    </>
  )
}

export default CapabilityList;
