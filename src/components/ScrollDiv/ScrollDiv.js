import styles from './ScrollDiv.module.scss';
import React from 'react';
import { Gradient, TreeOne, TreeTwo, TreeThree, WaveOne, WaveTwo, WaveThree, MountainOne, MountainTwo, MountainThree, Sun, Moon, Jupiter, Saturn} from '../SVGs/';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export function Animations({ element, gradRef, treeORef, treeTwRef, treeThRef, waveORef, waveTwRef, waveThRef, mounORef, mounTwRef, mounThRef, sunRef, moonRef, jupRef, satRef }) {
    // Set initial screen
    const pctToPx = (pct) => parseInt(element.querySelector("#scrollDiv").getBoundingClientRect().height * (pct / 100))

    gsap.set(sunRef.current,
        {
            y: () => pctToPx(-25),
            x: () => pctToPx(-25),
            width: () => pctToPx(30),
            height: () => pctToPx(30),
            fill: "#D6D047"
        })

    gsap.set(treeORef.current,
        {
            height: () => pctToPx(100),
            width: 'auto',
            y: () => pctToPx(-5),
            zIndex: 10,
            x: () => pctToPx(-10)
        })

    gsap.set(treeTwRef.current,
        {
            height: () => pctToPx(100),
            width: 'auto',
            y: () => pctToPx(8),
            zIndex: 9,
            x: 0
        })

    gsap.set(treeThRef.current,
        {
            height: () => pctToPx(100),
            width: 'auto',
            y: () => pctToPx(12),
            zIndex: 8
        })

    gsap.set(mounORef.current, {
        height: () => pctToPx(95),
        width: () => pctToPx(300),
        y: () => pctToPx(80),
        zIndex: 4,
        x: () => pctToPx(100),
        opacity: 0
    })

    gsap.set(mounTwRef.current, {
        height: () => pctToPx(95),
        width: () => pctToPx(300),
        y: () => pctToPx(100),
        zIndex: 3,
    })

    gsap.set(mounThRef.current, {
        height: () => pctToPx(95),
        width: () => pctToPx(300),
        y: () => pctToPx(110),
        zIndex: 2,
        x: () => pctToPx(-80)
    })

    gsap.set(moonRef.current, {
        y: () => pctToPx(-100),
        zIndex: 1,
        x: () => pctToPx(-100)
    }
    )
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
    const sun = gsap.timeline();
    ScrollTrigger.create({
        animation: sun,
        trigger: element,
        start: "top 1",
        end: "75% 100%",
        scrub: 2,
        zIndex: 1,
    })

    sun.fromTo(
        sunRef.current, {
        y: () => pctToPx(-25),
        x: () => pctToPx(-25),
        fill: "#D6D047"
    },
        {
            y: () => pctToPx(20),
            x: 0,
            width: () => pctToPx(60),
            height: () => pctToPx(60),
            fill: "#D69447"
        }
    )

    sun.fromTo(
        sunRef.current, {
        y: () => pctToPx(20),

    }, {
        y: () => pctToPx(200),
    }
    )

    // Animate trees
    gsap.fromTo(
        treeORef.current,
        {
            y: () => pctToPx(-5),
            x: () => pctToPx(-10)
        },
        {
            scrollTrigger: {
                trigger: element.querySelector("#home"),
                start: "top 100",
                end: "bottom 100",
                scrub: 2,
                toggleActions: "restart pause reverse pause"
            },
            y: () => pctToPx(100),
            x: () => pctToPx(100)
        }
    )

    gsap.fromTo(
        treeTwRef.current,
        {
            x: 0,
            y: () => pctToPx(8),
        },
        {
            scrollTrigger: {
                trigger: element.querySelector("#home"),
                start: "top 100",
                end: "bottom 100",
                scrub: 2,
                toggleActions: "restart pause reverse pause"
            },
            y: () => pctToPx(200),
            x: () => pctToPx(-200)
        }
    )

    gsap.fromTo(
        treeThRef.current,
        {
            y: () => pctToPx(12),
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
            y: () => pctToPx(150),
        }
    )

    //   Animate waves
    const waveOne = gsap.timeline();
    ScrollTrigger.create({
        animation: waveOne,
        trigger: element,
        start: "top 1",
        end: "75% 100%",
        scrub: 2,
        zIndex: 1
    })

    waveOne.fromTo(
        waveORef.current,
        {
            height: () => pctToPx(35),
            width: () => pctToPx(300),
            y: () => pctToPx(75),
            zIndex: 7,
        },
        {
            y: () => pctToPx(45),
            ease: 'none',
        }
    )

    waveOne.fromTo(
        waveORef.current,
        {
            y: () => pctToPx(45),
        },
        {
            y: () => pctToPx(100),
            ease: 'none',
        }
    )

    const waveTwo = gsap.timeline();
    ScrollTrigger.create({
        animation: waveTwo,
        trigger: element,
        start: "top 1",
        end: "75% 100%",
        scrub: 2,
        zIndex: 1
    })

    waveTwo.fromTo(
        waveTwRef.current,
        {
            height: () => pctToPx(45),
            width: () => pctToPx(300),
            y: () => pctToPx(75),
            zIndex: 6,
            x: () => pctToPx(-100)
        },
        {
            ease: 'none',
            x: () => pctToPx(0),
            y: () => pctToPx(40)
        }
    )

    waveTwo.fromTo(
        waveTwRef.current,
        {
            y: () => pctToPx(40),
            x: () => pctToPx(0)
        },
        {
            y: () => pctToPx(100),
            ease: 'none',
        }
    )

    const waveThree = gsap.timeline();
    ScrollTrigger.create({
        animation: waveThree,
        trigger: element,
        start: "top 1",
        end: "75% 100%",
        scrub: 2,
        zIndex: 1
    })

    waveThree.fromTo(
        waveThRef.current,
        {
            height: () => pctToPx(95),
            width: () => pctToPx(300),
            y: () => pctToPx(75),
            zIndex: 5,
            x: () => pctToPx(-100)
        },
        {
            y: () => pctToPx(55),
            ease: 'none',
            x: () => pctToPx(20)
        }
    )

    waveThree.fromTo(
        waveThRef.current,
        {
            y: () => pctToPx(55),
            x: () => pctToPx(20)
        },
        {
            y: () => pctToPx(100),
            ease: 'none',
            x: () => pctToPx(100)
        }
    )

    // Animate mountains

    const mounOne = gsap.timeline();
    ScrollTrigger.create({
        animation: mounOne,
        trigger: element,
        start: "top 1",
        end: "100% 100%",
        scrub: 2,
        zIndex: 1,
    })

    mounOne.fromTo(
        mounORef.current,
        {
            y: () => pctToPx(80),
            x: () => pctToPx(100),
        },
        {
            y: () => pctToPx(80),
            x: () => pctToPx(100),
            opacity: 1
        }
    )

    mounOne.fromTo(
        mounORef.current,
        {
            y: () => pctToPx(80),
            x: () => pctToPx(100)
        },
        {
            y: () => pctToPx(30),
            ease: 'none',
            x: () => pctToPx(0)
        }
    )

    mounOne.fromTo(
        mounORef.current,
        {
            y: () => pctToPx(30),
            ease: 'none',
            x: () => pctToPx(0)
        },
        {
            y: () => pctToPx(80),
            x: () => pctToPx(-100)
        }
    )

    const mounTwo = gsap.timeline();
    ScrollTrigger.create({
        animation: mounTwo,
        trigger: element,
        start: "top 1",
        end: "100% 100%",
        scrub: 2,
        zIndex: 1
    })

    mounTwo.fromTo(
        mounTwRef.current,
        {
            y: () => pctToPx(100),
            opacity: 0,
        },
        {
            y: () => pctToPx(100),
            opacity: 1,
        }
    )

    mounTwo.fromTo(
        mounTwRef.current,
        {
            y: () => pctToPx(100),
        },
        {
            y: () => pctToPx(35),
            ease: 'none',
        }
    )

    mounTwo.fromTo(
        mounTwRef.current,
        {
            y: () => pctToPx(35),
        },
        {
            y: () => pctToPx(100),
        }
    )

    const mounThree = gsap.timeline();
    ScrollTrigger.create({
        animation: mounThree,
        trigger: element,
        start: "top 1",
        end: "100% 100%",
        scrub: 2,
        zIndex: 1
    })

    mounThree.fromTo(
        mounThRef.current,
        {
            y: () => pctToPx(110),
            x: () => pctToPx(-80),
            opacity: 0
        },
        {
            y: () => pctToPx(110),
            x: () => pctToPx(-80),
            opacity: 1
        }
    )

    mounThree.fromTo(
        mounThRef.current,
        {
            y: () => pctToPx(110),
            x: () => pctToPx(-80)
        },
        {
            y: () => pctToPx(30),
            ease: 'none',
            x: () => pctToPx(-30)
        }
    )

    mounThree.fromTo(
        mounThRef.current,
        {
            y: () => pctToPx(30),
            x: () => pctToPx(-30)
        },
        {
            y: () => pctToPx(110),
            x: () => pctToPx(20)
        }
    )


    // Animating moon
    const moon = gsap.timeline();
    ScrollTrigger.create({
        animation: moon,
        trigger: element,
        start: "25% 1",
        end: "100% 100%",
        scrub: 2,
        zIndex: 1,
    })

    moon.fromTo(
        moonRef.current, {
        y: () => pctToPx(-100),
        x: () => pctToPx(-100),
        fill: "#D6D047"
    },
        {
            y: () => pctToPx(-20),
            x: () => pctToPx(-20),
            width: () => pctToPx(20),
            height: () => pctToPx(20),
            fill: "#D69447"
        }
    )

    moon.fromTo(
        moonRef.current, {
        y: () => pctToPx(-20),
    }, {
        y: () => pctToPx(75),
    }
    )

    // Animating planets
    gsap.fromTo(
        jupRef.current,
        {
            y: () => pctToPx(-60),
            x: () => pctToPx(-60),
            width: () => pctToPx(60),
            height: () => pctToPx(60)
        },
        {
            scrollTrigger: {
                trigger: element.querySelector("#work"),
                start: "+=500 1",
                end: "bottom 100",
                markers: true,
                scrub: 2,
                toggleActions: "restart pause reverse pause"
            },
            y: () => pctToPx(20),
            x: () => pctToPx(-20)
        }
    )

    gsap.fromTo(
        satRef.current,
        {
            y: () => pctToPx(-100),
            x: () => pctToPx(100),
            width: () => pctToPx(37.6),
            height: () => pctToPx(26)
        },
        {
            scrollTrigger: {
                trigger: element.querySelector("#work"),
                start: "top 100",
                end: "bottom 100",
                scrub: 2,
                toggleActions: "restart pause reverse pause"
            },
            y: () => pctToPx(-30),
            x: () => pctToPx(25)
        }
    )
}

export function ScrollDiv({ gradRef, treeORef, treeTwRef, treeThRef, waveORef, waveTwRef, waveThRef, mounORef, mounTwRef, mounThRef, sunRef, moonRef, jupRef, satRef }) {
    console.log(jupRef)
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