import React from "react";
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Home /> */}
    </div>
  );
}

export default App;
