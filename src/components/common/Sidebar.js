import React from 'react';
import Scrollspy from 'react-scrollspy';

import Tab from './Tab';

const Sidebar = () => {
  const [tabs] = React.useState([
    { content: 'Welcome', href: 'intro' },
    { content: 'Gen z Foods', href: 'one' },   
    { content: 'Our Services', href: 'two' },   
    { content: 'How it works', href: 'three' },
    { content: 'Get in Touch', href: 'four' },
  ]);

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
          >
            {tabs.map(tab => <Tab key={tab.href} {...tab} />)}
          </Scrollspy>
        </nav>
      </div>
    </section>
  );
}

export default Sidebar;
