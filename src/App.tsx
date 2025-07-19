import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Academics />
      <Admissions />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;