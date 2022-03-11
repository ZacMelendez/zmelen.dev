import styles from './about.module.scss';
import React from 'react';
import container from '../../styles/container.module.scss'

export default function About() {
    return (
        <div className={container.container} id="about">
            <div className={styles.inner} id="aboutText">
                <h2>About Me</h2>
                <p>
                    Hi, my name is Zach Melendez. I am a Mechanical Engineering Graduate from the University of Connecticut with experience in Front & Back-End Development.
                </p>
                <p>
                    I currently work as an IoT Development Engineer, where I work in conjunction with our developer team to manage a Microsoft Azure Cloud Data Lake & IoT Hub which communicate with a JavaScript based customer application.
                </p>
                <p>
                    I am experienced in languages such as Python, JavaScript, HTML & CSS, and have utilized NodeJS, React, SASS, and Next.JS for web development projects. I also have experience with Docker, Azure, and the Linux CLI from my work with IoT Applications.
                </p>
            </div>
        </div>
    );
}

