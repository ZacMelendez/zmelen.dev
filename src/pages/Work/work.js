import styles from './work.module.scss';
import React from 'react';

import { CarouselItem } from '../../components/CarouselItem';
import { Carousel } from '../../components/';
import LeftArrow from '../../components/Carousel/LeftArrow';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrow/>,
    nextArrow: <LeftArrow/>,
};

const slides = [
    <CarouselItem />,
    <CarouselItem />,
    // <CarouselItem />
]

const slideInfo = [
    {
        image: '',
        text: ''
    }
]

export default function Work() {
    return (
        <div className={styles.work} id="work">
            <div className={styles.inner}>
                <h1>Work</h1>
                <div className={styles.carousel}>
                    <Carousel settings={settings} slides={slides} />
                </div>
            </div>
        </div>
    );
}

