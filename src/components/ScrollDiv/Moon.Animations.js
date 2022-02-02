import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function MoonAnim(element, moonRef) {
    const pctToPx = (pct) => parseInt(element.querySelector("#scrollDiv").getBoundingClientRect().height * (pct / 100))
    gsap.set(
        moonRef.current,
        {
            y: () => pctToPx(-100),
            zIndex: 1,
            x: () => pctToPx(-100)
        }
    )

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
}