import styles from './App.module.scss';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { Home, About, Contact, Work } from './pages/pages';
import { Header, Footer, ScrollDiv, Animations } from './components/';

import gsap from 'gsap';

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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, [])


  useLayoutEffect(() => {
    const element = ref.current;
    Animations({ element, gradRef, treeORef, treeTwRef, treeThRef, waveORef, waveTwRef, waveThRef, mounORef, mounTwRef, mounThRef, sunRef, moonRef, jupRef, satRef });
    console.log(element.querySelector("#scrollDiv").getBoundingClientRect().height)
    // Animate about section
    gsap.fromTo(
      element.querySelector("#aboutText"),
      {
        x: 100,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: element.querySelector("#about"),
          start: "top center",
          end: "top 200",
          scrub: 1,
        },
        x: 0,
        opacity: 1,
        ease: 'none',
        duration: .500
      }
    )

    // Animate work section
    gsap.fromTo(
      element.querySelector("#workContents"),
      {
        x: 100,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: element.querySelector("#work"),
          start: "top center",
          end: "top 200",
          scrub: 1,
        },
        x: 0,
        opacity: 1,
        ease: 'none',
        duration: .500
      }
    )

    // Animate contact section
    gsap.fromTo(
      element.querySelector("#formDiv"),
      {
        x: 100,
        opacity: 0
      },
      {
        scrollTrigger: {
          trigger: element.querySelector("#contact"),
          start: "top center",
          end: "top 200",
          scrub: 1,
        },
        x: 0,
        opacity: 1,
        ease: 'none',
        duration: .500
      }
    )
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
