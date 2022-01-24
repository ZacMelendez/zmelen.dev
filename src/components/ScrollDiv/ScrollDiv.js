import styles from './ScrollDiv.module.scss';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollDiv() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let speed = 100;

        /*  SCENE 1 */
        let scene1 = gsap.timeline();
        ScrollTrigger.create({
            animation: scene1,
            trigger: ".scrollElement",
            start: "top top",
            end: "45% 100%",
            scrub: 3,
        });
    }, [])

    return (
        <div className={`scrollElement ${styles.scrollDiv}`}>
            <div className={styles.inner}>
                
            </div>
        </div>
    );
}