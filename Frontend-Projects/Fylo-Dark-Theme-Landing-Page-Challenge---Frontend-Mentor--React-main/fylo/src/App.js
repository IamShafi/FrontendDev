import React from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Intro from './components/Intro';
import Features from './components/Features';
import Productivity from './components/Productivity';
import Testimonials from './components/Testimonials';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <MainMenu />
     <Intro />
     <Features />
      <Productivity />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default App;
