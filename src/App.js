import styles from './App.module.scss';
import { useEffect, useRef } from 'react';


import { Home, About, Contact, Work } from './pages/pages';

import { Header, Footer, ScrollDiv, Animations } from './components/';


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
  const jupRef = useRef(null);
  const satRef = useRef(null);


  useEffect(() => {
    const element = ref.current;
    Animations({ element, gradRef, treeORef, treeTwRef, treeThRef, waveORef, waveTwRef, waveThRef, mounORef, mounTwRef, mounThRef, sunRef, moonRef, jupRef, satRef });
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
        jupRef={jupRef}
        satRef={satRef}
      />
      <Header />
      <div className={styles.content}>
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
