import styles from './work.module.scss';
import React, { useRef } from 'react';

import { CarouselItem } from '../../components/CarouselItem';
import { Carousel } from '../../components/';

export default function Work() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }

    const slideInfo = [
        {
            image: (window.innerWidth < 576) ? 'https://res.cloudinary.com/drmatz1gd/image/upload/v1643501169/hbMobile_oml4lk.png' : 'https://res.cloudinary.com/drmatz1gd/image/upload/v1643159809/honsbun_nufcwh.png',
            text: 'Hon\'s Buns',
            link: 'https://www.honsbuns.com/',
            desc: 'NFT website created using React, TypeScript, and Next.js'
        },
        {
            image: (window.innerWidth < 576) ? 'https://res.cloudinary.com/drmatz1gd/image/upload/v1643499435/jakzBKMobile_kc60gf.png' : 'https://res.cloudinary.com/drmatz1gd/image/upload/v1643223933/jakzbk_oi1egj.png',
            text: 'JAKZ Bookkeeping',
            link: 'https://www.jakzbookkeeping.com/',
            desc: 'Vanilla HTML5, CSS3, & JS Website'
        },
        {}
    ]

    return (
        <div className={styles.work} id="work">
            <div className={styles.inner} id="workContents">
                <h1>Work</h1>
                <div className={styles.carousel}>
                    <Carousel settings={settings} slideInfo={slideInfo} />
                </div>
            </div>
        </div>
    );
}

