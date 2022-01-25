export default function Gradient({ width, height, refer }) {
    return (
        <svg width="896" height="2688" viewBox="0 0 896 2688" fill="none" xmlns="http://www.w3.org/2000/svg" ref={refer}>
            <path d={`M0 0H896V2688H0V0Z`} fill="url(#paint0_linear_358_410)" />
            <defs>
                <linearGradient id="paint0_linear_358_410" x1={896/2} y1="0" x2={896/2} y2={2688} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#220B40" />
                    <stop offset="0.270089" stopColor="#3B5483" />
                    <stop offset="0.504464" stopColor="#B5364D" />
                    <stop offset="0.634672" stopColor="#C56863" />
                    <stop offset="0.879464" stopColor="#79C8D2" />
                </linearGradient>
            </defs>
        </svg>
    )
}