import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Waves(element, waveORef, waveTwRef, waveThRef) {
    const pctToPx = (pct) => parseInt(element.querySelector("#scrollDiv").getBoundingClientRect().height * (pct / 100))
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
}