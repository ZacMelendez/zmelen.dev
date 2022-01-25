import styles from './ScrollDiv.module.scss';
import React from 'react';
import { Gradient, TreeOne, TreeTwo, TreeThree, WaveOne, WaveTwo, WaveThree, MountainOne, MountainTwo, MountainThree, Sun, Moon } from '../SVGs/index';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const pctToPx = (elem, pct) => parseInt(elem.current.parentNode.getBoundingClientRect().height * (pct / 100))

gsap.registerPlugin(ScrollTrigger);

export function Animations({ element, gradRef, treeORef, treeTwRef, treeThRef, waveORef, waveTwRef, waveThRef, mounORef, mounTwRef, mounThRef, sunRef, moonRef }) {
    // Set initial screen

    // gsap.set(sunRef.current, {
    //     y: "-100%",
    //     x: "-100%",
    //     scale: 1.25,
    //     ease: 'none',
    //     fill: "#D6D047"
    // })

    // gsap.set(treeORef.current, {
    //         scale: 2,
    //         y: "65%",
    //         zIndex: 10,
    //         x: 0
    //     })

    //     gsap.set(treeTwRef.current,
    //     {
    //         scale: 2,
    //         y: "60%",
    //         zIndex: 9,
    //         x: 0
    //     })

    //     gsap.set(treeThRef.current,
    //     {
    //         scale: 2,
    //         y: "50%",
    //         zIndex: 8
    //     })


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

    // Animate gradient background
    gsap.fromTo(
        gradRef.current,
        {
            y: "-35%",
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
            y: '50%',
            ease: 'none',
        }
    )

    // Animate Sun
    const sun = gsap.timeline();
    ScrollTrigger.create({
        animation: sun,
        trigger: element,
        start: "top top",
        end: "100% 100%",
        scrub: 2,
        zIndex: 1,
    })

    sun.fromTo(
        sunRef.current, {
        y: "-100%",
        x: "-100%",
        scale: 1.25,
        ease: 'none',
        fill: "#D6D047"
    },
        {
            y: "50%",
            x: 0,
            scale: 2.25,
            fill: "#D69447"
        }
    )

    sun.fromTo(
        sunRef.current, {
        y: "50%",
        scale: 2.25,
    }, {
        y: "400%",
        scale: 2.25,
    }
    )

    // Animate trees
    gsap.fromTo(
        treeORef.current,
        {
            scale: 2,
            y: "65%",
            zIndex: 10,
            x: 0
        },
        {
            scrollTrigger: {
                trigger: element.querySelector("#home"),
                start: "top 100",
                end: "bottom 100",
                scrub: 2,
                toggleActions: "restart pause reverse pause"
            },
            y: "300%",
            scale: 2,
            ease: 'none',
            x: 300
        }
    )

    gsap.fromTo(
        treeTwRef.current,
        {
            scale: 2,
            y: "60%",
            zIndex: 9,
            x: 0
        },
        {
            scrollTrigger: {
                trigger: element.querySelector("#home"),
                start: "top 100",
                end: "bottom 100",
                scrub: 2,
                toggleActions: "restart pause reverse pause"
            },
            y: "400%",
            scale: 2,
            ease: 'none',
            x: '-400'
        }
    )

    gsap.fromTo(
        treeThRef.current,
        {
            scale: 2,
            y: "50%",
            zIndex: 8
        },
        {
            scrollTrigger: {
                trigger: element.querySelector("#home"),
                start: "top 100",
                end: "bottom 100",
                scrub: 2,
                toggleActions: "restart pause reverse pause"
            },
            y: "600%",
            scale: 2,
            ease: 'none',
        }
    )

    const waveOne = gsap.timeline();
    ScrollTrigger.create({
        animation: waveOne,
        trigger: element,
        start: "top top",
        end: "100% 100%",
        scrub: 2,
        zIndex: 1
    })

    //   Animate waves
    waveOne.fromTo(
        waveORef.current,
        {
            scale: 3,
            y: () => pctToPx(waveORef, 75),
            zIndex: 7,
        },
        {
            y: () => pctToPx(waveORef, 45),
            ease: 'none',
        }
    )

    waveOne.fromTo(
        waveORef.current,
        {
            y: () => pctToPx(waveORef, 45),
        },
        {
            y: () => pctToPx(waveORef, 75),
            ease: 'none',
        }
    )

    const waveTwo = gsap.timeline();
    ScrollTrigger.create({
        animation: waveTwo,
        trigger: element,
        start: "top top",
        end: "100% 100%",
        scrub: 2,
        zIndex: 1
    })

    waveTwo.fromTo(
        waveTwRef.current,
        {
            scale: 3,
            y: () => pctToPx(waveORef, 75),
            zIndex: 6,
            x: () => pctToPx(waveORef, -100)
        },
        {
            y: () => pctToPx(waveORef, 40),
            ease: 'none',
            x: () => pctToPx(waveORef, 0)
        }
    )

    waveTwo.fromTo(
        waveTwRef.current,
        {
            y: () => pctToPx(waveORef, 40),
            x: () => pctToPx(waveORef, 0)
        },
        {
            y: () => pctToPx(waveORef, 75),
            ease: 'none',
        }
    )

    const waveThree = gsap.timeline();
    ScrollTrigger.create({
        animation: waveThree,
        trigger: element,
        start: "top top",
        end: "100% 100%",
        scrub: 2,
        zIndex: 1
    })

    waveThree.fromTo(
        waveThRef.current,
        {
            scale: 3,
            y: () => pctToPx(waveThRef, 75),
            zIndex: 5,
            x: () => pctToPx(waveThRef, -100)
        },
        {
            y: () => pctToPx(waveThRef, 45),
            ease: 'none',
            x: () => pctToPx(waveThRef, 20)
        }
    )

    waveThree.fromTo(
        waveThRef.current,
        {
            y: () => pctToPx(waveThRef, 45),
            x: () => pctToPx(waveThRef, 20)
        },
        {
            y: () => pctToPx(waveThRef, 75),
            ease: 'none',
            x: () => pctToPx(waveThRef, 100)
        }
    )

    // Animate mountains
    gsap.fromTo(
        mounORef.current,
        {
            scale: 2,
            y: () => pctToPx(mounORef, 60),
            zIndex: 4,
            x: () => pctToPx(mounORef, 100)
        },
        {
            scrollTrigger: {
                trigger: element.querySelector("#about"),
                start: "top 100",
                end: "bottom 100",
                scrub: 2,
                toggleActions: "restart pause reverse pause"
            },
            y: () => pctToPx(mounORef, 30),
            scale: 2,
            ease: 'none',
            x: () => pctToPx(mounORef, 0)
        }
    )

    gsap.fromTo(
        mounTwRef.current,
        {
            scale: 2,
            y: () => pctToPx(mounORef, 100),
            zIndex: 3,
        },
        {
            scrollTrigger: {
                trigger: element.querySelector("#about"),
                start: "top 100",
                end: "bottom 100",
                scrub: 2,
                toggleActions: "restart pause reverse pause"
            },
            y: () => pctToPx(mounORef, 35),
            ease: 'none',
        }
    )

    gsap.fromTo(
        mounThRef.current,
        {
            scale: 2,
            y: () => pctToPx(mounORef, 90),
            zIndex: 2,
            x: () => pctToPx(mounORef, -80)
        },
        {
            scrollTrigger: {
                trigger: element.querySelector("#about"),
                start: "top 100",
                end: "bottom 100",
                scrub: 2,
                toggleActions: "restart pause reverse pause"
            },
            y: () => pctToPx(mounORef, 30),
            ease: 'none',
            x: () => pctToPx(mounORef, -30)
        }
    )

    // Animating moon
    gsap.fromTo(
        moonRef.current,
        {
            y: () => pctToPx(moonRef, -100),
            zIndex: 1,
            x: () => pctToPx(moonRef, -100)
        },
        {
            scrollTrigger: {
                trigger: element.querySelector("#about"),
                start: "top 100",
                end: "bottom 100",
                scrub: 2,
                toggleActions: "restart pause reverse pause"
            },
            y: () => pctToPx(moonRef, -20),
            ease: 'none',
            x: () => pctToPx(moonRef, -20)
        }
    )
}

export function ScrollDiv({ gradRef, treeORef, treeTwRef, treeThRef, waveORef, waveTwRef, waveThRef, mounORef, mounTwRef, mounThRef, sunRef, moonRef }) {
    return (
        <div className={styles.scrollDiv}>
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
            </div>
        </div>
    );
}