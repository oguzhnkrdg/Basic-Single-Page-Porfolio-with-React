import React from 'react';
import './App.css';
import Header from './components/Header';
import Hakkimda from './components/Hakkimda';
import Hizmetler from './components/Hizmetler';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <div className='f-heading'>
        <h1>Hakkımda</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <Hakkimda />
      <Hizmetler />
      <Footer />
    </div>
  );
}

export default App;
