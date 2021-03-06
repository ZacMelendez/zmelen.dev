import gsap from "gsap";

export default function Planets(element, satRef, jupRef) {
    const { innerWidth: width } = window
    const pctToPx = (pct) => parseInt((width > 500 ? 0.4*width : 500) * (pct / 100))

    gsap.fromTo(
        jupRef.current,
        {
            y: () => pctToPx(-70),
            x: () => pctToPx(-70),
            width: () => pctToPx(60),
            height: () => pctToPx(60)
        },
        {
            scrollTrigger: {
                trigger: element.querySelector("#work"),
                start: "+=500 1",
                end: "bottom 100",
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
};