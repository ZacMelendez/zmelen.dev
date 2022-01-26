export default function LeftArrow(props) {
    const {className, style, onClick} = props;
    return (
        <svg width="71" height="35" viewBox="0 0 71 35" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <path d="M0.0908966 16.8184L18.9545 16.8184L18.9545 9.446C18.9545 14.7449 26.2273 16.8184 33.9545 16.8184L71 16.8184C40.0909 16.8184 23.4242 5.60623 18.9545 0.000172833L0.0908966 16.8184Z" fill="#E3B13E" />
            <path d="M0.0908966 18.1821L18.9545 18.1821L18.9545 25.5545C18.9545 20.2556 26.2273 18.1821 33.9545 18.1821L71 18.1821C40.0909 18.1821 23.4242 29.3942 18.9545 35.0003L0.0908966 18.1821Z" fill="#E3B13E" />
        </svg>
    )
}