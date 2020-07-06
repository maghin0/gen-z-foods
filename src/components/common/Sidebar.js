import React from 'react';
import Scrollspy from 'react-scrollspy';

import Tab from './Tab';

const Sidebar = () => {
  const [tabs] = React.useState([
    { content: 'Welcome', href: 'intro' },
    { content: 'Our story', href: 'one' },    
    { content: 'What we do', href: 'three' },
    { content: 'Who we are', href: 'two' },
    { content: 'Get in touch', href: 'four' },
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
