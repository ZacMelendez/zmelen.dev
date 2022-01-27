import React from 'react';
import styles from './CarousellIem.module.scss';

export default function CarouselItem({ image, text, link}) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <a href={link ? link : 'https://honsbuns.com'} rel="noreferrer" target="_blank">
                    <img src={image ? image : "https://res.cloudinary.com/drmatz1gd/image/upload/v1643159809/honsbun_nufcwh.png"} alt="Card Image" />
                </a>
            </div>
            <div className={styles.text}>
                <p>{text ? text : "My Personal Site"}</p>
            </div>
        </div>
    )
}