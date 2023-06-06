import React from 'react';

import AboutMe from './components/AboutMe';
import ApplicationCard from './components/ApplicationCard';

function Main () {
  return (
    <div>
      <AboutMe/>
      <ApplicationCard/>
      <ApplicationCard/>
      <ApplicationCard/>
    </div>
  )
};

export default Main;