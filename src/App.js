import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import ThemeContext from './themeContext'

import Home from './pages/home';
import About from './pages/about';

import Header from './components/header';
import Footer from './components/footer';


export default function App() {

  const [theme, toggleTheme] = useState('light')

    return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <HashRouter>
        <div className="App">
          <div className="header">
            <Header />
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </HashRouter>
      </ThemeContext.Provider>
    );
  }
