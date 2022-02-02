import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Planets(element, satRef, jupRef) {
    const pctToPx = (pct) => parseInt(element.querySelector("#scrollDiv").getBoundingClientRect().height * (pct / 100))
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