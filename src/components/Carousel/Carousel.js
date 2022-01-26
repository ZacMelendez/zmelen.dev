import React, { useEffect } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default function Carousel({settings, slides}) {
    return (
        <div>
        <Slider {...settings}>
            {slides.map((slide) => slide)}
        </Slider>
      </div>

    )
}