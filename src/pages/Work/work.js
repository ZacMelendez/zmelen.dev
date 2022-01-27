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
    arrows: false
};

const slides = [
    <CarouselItem />,
    <CarouselItem />,
    // <CarouselItem />
]

const slideInfo = [
    {
        image: 'https://res.cloudinary.com/drmatz1gd/image/upload/v1643159809/honsbun_nufcwh.png',
        text: 'Hon\'s Buns NFT Website',
        link: 'https://www.honsbuns.com/',
        desc: 'React & Next.js website built with integration with MongoDB & Discord'
    },
    {
        image: 'https://res.cloudinary.com/drmatz1gd/image/upload/v1643223933/jakzbk_oi1egj.png',
        text: 'JAKZ Bookkeeping Website',
        link: 'https://www.jakzbookkeeping.com/',
        desc: 'Vanilla JS Website'
    }
]

export default function Work() {
    return (
        <div className={styles.work} id="work">
            <div className={styles.inner}>
                <h1>Work</h1>
                <div className={styles.carousel}>
                    <Carousel settings={settings} slideInfo={slideInfo} />
                </div>
            </div>
        </div>
    );
}

