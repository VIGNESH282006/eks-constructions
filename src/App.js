import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Footer />
    </div>
  );
}

export default App;