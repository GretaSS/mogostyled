import React, {Component} from 'react';

import { 
  Header, 
  Intro, 
  Cont, 
  OurProgress, 
  WorkServices, 
  UniqueDesign, 
  Service,
  OurTeam,
  SomeWork,
  SWorkSlider,
  HappyClients,
  OurStoryes,
  Map,
  Footer,
} from './components';


function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Cont/>
      <OurProgress/>
      <WorkServices/>
      <UniqueDesign/> 
      <Service/>
      <OurTeam/>
      <SomeWork/>
      <SWorkSlider/>
      <HappyClients/>
      <OurStoryes/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;