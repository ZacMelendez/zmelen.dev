import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Trees(element, treeORef, treeTwRef, treeThRef) {
    const pctToPx = (pct) => parseInt(element.querySelector("#scrollDiv").getBoundingClientRect().height * (pct / 100))
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
}