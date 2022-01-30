export default function LeftArrow({sliderRef}) {
    return (
        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {sliderRef.current.slickPrev()}}>
            <g filter="url(#filter0_d_400_94)">
                <circle cx="42" cy="38" r="35" transform="rotate(-180 42 38)" fill="#62788F" />
                <g filter="url(#filter1_d_400_94)">
                    <path d="M32.5 42.3301C29.1667 40.4056 29.1667 35.5944 32.5 33.6699L53.5 21.5455C56.8333 19.621 61 22.0266 61 25.8756L61 50.1244C61 53.9734 56.8333 56.379 53.5 54.4545L32.5 42.3301Z" fill="#E3B13E" />
                </g>
                <g filter="url(#filter2_d_400_94)">
                    <path d="M19.5 42.3301C16.1667 40.4056 16.1667 35.5944 19.5 33.6699L40.5 21.5455C43.8333 19.621 48 22.0266 48 25.8756L48 50.1244C48 53.9734 43.8333 56.379 40.5 54.4545L19.5 42.3301Z" fill="#E3B13E" />
                </g>
            </g>
            <defs>
                <filter id="filter0_d_400_94" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_400_94" result="shape" />
                </filter>
                <filter id="filter1_d_400_94" x="23" y="16.8682" width="41" height="44.2637" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-2" dy="1" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_400_94" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_400_94" result="shape" />
                </filter>
                <filter id="filter2_d_400_94" x="10" y="16.8682" width="41" height="44.2637" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-2" dy="1" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_400_94" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_400_94" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}