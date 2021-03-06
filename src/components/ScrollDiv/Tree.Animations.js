import gsap from "gsap";

export default function Trees(element, treeORef, treeTwRef, treeThRef) {
    const { innerWidth: width } = window
    const pctToPx = (pct) => parseInt((width > 500 ? 0.4*width : 500) * (pct / 100))

    gsap.set(treeORef.current,
        {
            height: () => pctToPx(120),
            width: 'auto',
            y: () => pctToPx(-20),
            zIndex: 10,
            x: () => pctToPx(-10)
        })

    gsap.set(treeTwRef.current,
        {
            height: () => pctToPx(130),
            width: 'auto',
            y: () => pctToPx(-35),
            zIndex: 9,
            x: () => pctToPx(-35)
        })

    gsap.set(treeThRef.current,
        {
            height: () => pctToPx(130),
            width: 'auto',
            x: () => pctToPx(-10),
            y: () => pctToPx(-20),
            zIndex: 8
        })

    gsap.fromTo(
        treeORef.current,
        {
            y: () => pctToPx(-20),
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
            y: () => pctToPx(-35),
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
            x: () => pctToPx(-10),
            y: () => pctToPx(-20),
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