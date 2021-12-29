import './App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'

import { Home, About, Contact, PageNotFound } from './pages/pages';

import { Header, Footer } from './components/components';


export default function App() {

  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <HashRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
