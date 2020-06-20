import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Header />
      <hr/>
      <NavBar />
      <h1>[Landing]</h1>
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
