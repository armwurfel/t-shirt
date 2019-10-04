import React, {Component} from 'react';
import Header from './components/sections/header/Header';
import Home from './components/pages/Home';
import Footer from './components/sections/footer/Footer';
import './App.css';

class App extends Component {
    render() {
    return (
      <div className="app">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
