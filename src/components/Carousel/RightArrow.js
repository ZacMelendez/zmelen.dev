export default function LeftArrow({sliderRef}) {
    return (
        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => {sliderRef.current.slickNext()}}>
            <g filter="url(#filter0_d_400_86)">
                <circle cx="42" cy="38" r="35" fill="#62788F" />
                <g filter="url(#filter1_d_400_86)">
                    <path d="M51.5 33.6699C54.8333 35.5944 54.8333 40.4056 51.5 42.3301L30.5 54.4545C27.1667 56.379 23 53.9734 23 50.1244L23 25.8756C23 22.0266 27.1667 19.621 30.5 21.5455L51.5 33.6699Z" fill="#E3B13E" />
                </g>
                <g filter="url(#filter2_d_400_86)">
                    <path d="M64.5 33.6699C67.8333 35.5944 67.8333 40.4056 64.5 42.3301L43.5 54.4545C40.1667 56.379 36 53.9734 36 50.1244L36 25.8756C36 22.0266 40.1667 19.621 43.5 21.5455L64.5 33.6699Z" fill="#E3B13E" />
                </g>
            </g>
            <defs>
                <filter id="filter0_d_400_86" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_400_86" result="shape" />
                </filter>
                <filter id="filter1_d_400_86" x="16" y="16.8682" width="41" height="44.2637" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-2" dy="1" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_400_86" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_400_86" result="shape" />
                </filter>
                <filter id="filter2_d_400_86" x="29" y="16.8682" width="41" height="44.2637" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-2" dy="1" />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.125 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_400_86" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_400_86" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}