import styles from './home.module.scss';
import React from 'react';

export default function Home() {

    return (
        <div className={styles.home} id="home">
            <div className={styles.title}>
                <h1>zach melendez</h1>
                <h2>developer, designer</h2>
            </div>
        </div>
    );
}

