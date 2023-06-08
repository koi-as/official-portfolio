import React, { useState } from 'react';

import Nav from './Nav';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Repository from './pages/Repository';

export default function Main () {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />
    }
    if (currentPage === 'Repository') {
      return <Repository />
    }
    return <Home />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  )
};