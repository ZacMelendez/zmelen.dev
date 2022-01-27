import styles from './App.module.scss';
import { useEffect, useRef } from 'react';


import { Home, About, Contact } from './pages/pages';

import { Header, Footer, ScrollDiv, Animations } from './components/components';


export default function App() {

  const ref = useRef(null);

  const gradRef = useRef(null);
  const treeORef = useRef(null);
  const treeTwRef = useRef(null);
  const treeThRef = useRef(null);
  const waveORef = useRef(null);
  const waveTwRef = useRef(null);
  const waveThRef = useRef(null);
  const mounORef = useRef(null);
  const mounTwRef = useRef(null);
  const mounThRef = useRef(null);
  const sunRef = useRef(null);
  const moonRef = useRef(null);


  useEffect(() => {
    const element = ref.current;
    Animations({ element, gradRef, treeORef, treeTwRef, treeThRef, waveORef, waveTwRef, waveThRef, mounORef, mounTwRef, mounThRef, sunRef, moonRef })
  }, [])

  return (
    <div className={styles.App} ref={ref}>
      <ScrollDiv
        gradRef={gradRef}
        treeORef={treeORef}
        treeTwRef={treeTwRef}
        treeThRef={treeThRef}
        waveORef={waveORef}
        waveTwRef={waveTwRef}
        waveThRef={waveThRef}
        mounORef={mounORef}
        mounTwRef={mounTwRef}
        mounThRef={mounThRef}
        sunRef={sunRef}
        moonRef={moonRef}
      />
      <Header />
      <div className={styles.content}>
        <Home />
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}