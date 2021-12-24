import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import React, {useContext} from 'react';
import {ThemeContext} from './ThemeContext'

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

import Header from './components/header';
import Footer from './components/footer';


export default function App() {

  const theme = useContext(ThemeContext);
  console.log(theme);

    return (
      <HashRouter>
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </HashRouter>
    );
  }
