import React from 'react';

import { 
  Header, 
  Intro, 
  StoryAboutUs, 
  StoryProgress, 
  AmazingServices, 
  UniqueDesign, 
  Service,
  MeetOurTeam,
  SomeOfOurWork,
  SomeOOWSlider,
  WhatPeopleSay,
  LatestBlog,
  Map,
  Footer,
} from './components';


function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <StoryAboutUs/>
      <StoryProgress/>
      <AmazingServices/>
      <UniqueDesign/> 
      <Service/>
      <MeetOurTeam/>
      <SomeOfOurWork/>
      <SomeOOWSlider/>
      <WhatPeopleSay/>
      <LatestBlog/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;