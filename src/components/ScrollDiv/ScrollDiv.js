import styles from './ScrollDiv.module.scss';
import React from 'react';
import { Gradient, TreeOne, TreeTwo, TreeThree, WaveOne, WaveTwo, WaveThree, MountainOne, MountainTwo, MountainThree, Sun, Moon, Jupiter, Saturn } from '../SVGs/';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MoonAnim from './Moon.Animations'
import Trees from './Tree.Animations';
import Waves from './Wave.Animations';
import SunAnim from './Sun.Animations';
import Mountains from './Mountain.Animations';
import Planets from './Planets.Animations'


gsap.registerPlugin(ScrollTrigger);

export function Animations({ element, gradRef, treeORef, treeTwRef, treeThRef, waveORef, waveTwRef, waveThRef, mounORef, mounTwRef, mounThRef, sunRef, moonRef, jupRef, satRef }) {

    // Animate gradient background
    gsap.fromTo(
        gradRef.current,
        {
            y: "-40%",
            zIndex: 0
        },
        {
            scrollTrigger: {
                trigger: element,
                start: "top 100",
                end: "bottom 100",
                scrub: 2,
                toggleActions: "restart pause reverse pause"
            },
            y: '62.5%',
            ease: 'none',
        }
    )

    // Animate Sun

    SunAnim(element, sunRef)

    // Animate trees

    Trees(element, treeORef, treeTwRef, treeThRef)

    //   Animate waves

    Waves(element, waveORef, waveTwRef, waveThRef)

    // Animate mountains

    Mountains(element, mounORef, mounTwRef, mounThRef)

    // Animating moon

    MoonAnim(element, moonRef)

    // Animating planets
    

    Planets(element, satRef, jupRef);
}

export function ScrollDiv({ gradRef, treeORef, treeTwRef, treeThRef, waveORef, waveTwRef, waveThRef, mounORef, mounTwRef, mounThRef, sunRef, moonRef, jupRef, satRef }) {
    return (
        <div className={styles.scrollDiv} id="scrollDiv">
            <div className={styles.inner}>
                <Gradient refer={gradRef} />
                <TreeOne refer={treeORef} />
                <TreeTwo refer={treeTwRef} />
                <TreeThree refer={treeThRef} />
                <WaveOne refer={waveORef} />
                <WaveTwo refer={waveTwRef} />
                <WaveThree refer={waveThRef} />
                <MountainOne refer={mounORef} />
                <MountainTwo refer={mounTwRef} />
                <MountainThree refer={mounThRef} />
                <Sun refer={sunRef} />
                <Moon refer={moonRef} />
                <Jupiter refer={jupRef} />
                <Saturn refer={satRef} />
            </div>
        </div>
    );
}