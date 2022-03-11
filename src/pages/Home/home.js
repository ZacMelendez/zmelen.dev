import styles from './home.module.scss';
import React from 'react';
import container from '../../styles/container.module.scss';


export default function Home() {
    return (
        <div className={container.container} id="home">
            <div className={styles.inner}>
                <h1>zach melendez</h1>
                <h2>developer, engineer</h2>
            </div>
        </div>
    );
}

