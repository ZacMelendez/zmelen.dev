import './App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import React, {useContext} from 'react';
import {ThemeContext} from './ThemeContext'

import {Home, About, Contact} from './pages/pages';

import {Header, Footer} from './components/components';


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
