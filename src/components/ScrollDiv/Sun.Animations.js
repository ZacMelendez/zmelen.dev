import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function SunAnim(element, sunRef) {
    const pctToPx = (pct) => parseInt(element.querySelector("#scrollDiv").getBoundingClientRect().height * (pct / 100))

    gsap.set(sunRef.current,
        {
            y: () => pctToPx(-25),
            x: () => pctToPx(-25),
            width: () => pctToPx(30),
            height: () => pctToPx(30),
            fill: "#D6D047"
        })

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
}