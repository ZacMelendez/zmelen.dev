import styles from './App.module.scss';
import React from 'react';

import { Home, About, Contact } from './pages/pages';

import { Header, Footer, ScrollDiv } from './components/components';

const wheel = (e) => {
  console.log(e.deltaY);
}

export default function App() {
  React.useEffect(() => {
    document.onwheel = wheel;
  })
  return (
    <div className={styles.App}>
      <ScrollDiv />
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
