import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <hr/>
      <NavBar />
      <Main />
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
