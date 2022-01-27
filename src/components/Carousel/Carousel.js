import React, { useEffect } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CarouselItem } from "..";



export default function Carousel({settings, slideInfo}) {
    return (
        <div>
        <Slider {...settings}>
            {slideInfo.map((slide, index) => <CarouselItem link={slide.link} image={slide.image} text={slide.text} key={index}/>)}
        </Slider>
      </div>

    )
}