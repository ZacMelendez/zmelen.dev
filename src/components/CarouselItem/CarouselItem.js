import React from 'react';
import styles from './CarousellIem.module.scss';

export default function CarouselItem({ image, text, desc, link}) {
    return (
        <div className={styles.card}>
            <div className={styles.image} >
                <a href={link ? link : '#/#home'} rel={'noopener'} target="_blank">
                    <img src={image ? image : (window.innerWidth < 576) ? 'https://res.cloudinary.com/drmatz1gd/image/upload/v1643499435/ztmMobile_yevnyr.png' : "https://res.cloudinary.com/drmatz1gd/image/upload/v1643515187/recursion_momlis.png"} alt="Card Image" />
                </a>
            </div>
            <div className={styles.text}>
                <h2>{text ? text : "My Personal Site"}</h2>
                <p>{desc ? desc : "Ever heard of recursion? React, SASS, & Node.js Website"}</p>
            </div>
        </div>
    )
}