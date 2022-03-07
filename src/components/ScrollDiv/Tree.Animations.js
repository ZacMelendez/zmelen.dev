import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Trees(element, treeORef, treeTwRef, treeThRef) {
    const { innerWidth: width } = window
    const pctToPx = (pct) => parseInt((width > 500 ? 0.4*width : 500) * (pct / 100))

    gsap.set(treeORef.current,
        {
            height: () => pctToPx(100),
            width: 'auto',
            y: () => pctToPx(-10),
            zIndex: 10,
            x: () => pctToPx(-10)
        })

    gsap.set(treeTwRef.current,
        {
            height: () => pctToPx(100),
            width: 'auto',
            y: () => pctToPx(-15),
            zIndex: 9,
            x: () => pctToPx(25),
        })

    gsap.set(treeThRef.current,
        {
            height: () => pctToPx(100),
            width: 'auto',
            x: () => pctToPx(-5),
            y: () => pctToPx(-5),
            zIndex: 8
        })

    gsap.fromTo(
        treeORef.current,
        {
            y: () => pctToPx(-10),
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
            x: () => pctToPx(25),
            y: () => pctToPx(-15),

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
            x: () => pctToPx(-5),
            y: () => pctToPx(-5),
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