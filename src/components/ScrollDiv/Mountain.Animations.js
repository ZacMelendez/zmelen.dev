import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Mountains(element, mounORef, mounTwRef, mounThRef) {
    const pctToPx = (pct) => parseInt(element.querySelector("#scrollDiv").getBoundingClientRect().height * (pct / 100))
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

}