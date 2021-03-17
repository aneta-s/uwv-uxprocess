import React, { useState, useEffect } from 'react';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ projects, contact, footer }}>
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
