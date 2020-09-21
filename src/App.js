import React from 'react';
import './style.css';
import Header from './Header'
import Body from './my-body'
import Illustration from './illustration'
import Contact from './Contact'
import Footer from './Footer'


function App() {
  return (
    <div className = "content">
      <Header />
      <Body />
      <Illustration />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
