import React, { useRef } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselItem } from "..";
import { LeftArrow, RightArrow } from ".";
import styles from './Carousel.module.scss'



export default function Carousel({ settings, slideInfo }) {

    const sliderRef = useRef(null);

    return (
        <div>
            <div className={styles.leftArrow}>
                <LeftArrow sliderRef={sliderRef}/>
            </div>
            <Slider ref={sliderRef} {...settings}>
                {slideInfo.map((slide, index) => <CarouselItem link={slide.link} image={slide.image} text={slide.text} desc={slide.desc} key={index} />)}
            </Slider>
            <div className={styles.rightArrow}>
                <RightArrow sliderRef={sliderRef}/>
            </div>
        </div>

    )
}