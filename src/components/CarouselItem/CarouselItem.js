import React from 'react';
import styles from './CarousellIem.module.scss';

export default function CarouselItem({ image, text, desc, link}) {
    return (
        <div className={styles.card}>
            <div className={styles.image} >
                <a href={link ? link : '#/#home'} rel={'noopener noreferrer'} target="_blank">
                    <img src={image ? image : (window.innerWidth < 576) ? 'https://res.cloudinary.com/drmatz1gd/image/upload/v1643499435/ztmMobile_yevnyr.png' : "https://res.cloudinary.com/drmatz1gd/image/upload/v1643515187/recursion_momlis.png"} alt={text} />
                </a>
            </div>
            <div className={styles.text}>
                <h4>{text ? text : "My Personal Site"}</h4>
                <p>{desc ? desc : "Ever heard of recursion? React, SASS, & Node.js Website"}</p>
            </div>
        </div>
    )
}