import styles from './about.module.scss';
import React from 'react';

export default function About() {
    return (
        <div className={styles.about} id="about">
            <div className={styles.inner} id="aboutText">
                <h1>About Me</h1>
                <p>
                    Hi, my name is Zach Melendez. I am a Mechanical Engineering Graduate from the University of Connecticut who has recently taken a liking to Web Development. <br /><br />
                    Most of my development experience comes from my job as an IoT Development Engineer, where I worked in junction with a DX team to create an Azure Cloud Data Lake, IoT Hub, and Front-End customer application. <br /><br />
                    I am experienced in languages such as Python, JavaScript, HTML & CSS, and have utilized NodeJS, React, SASS, and Next.JS for Web Dev. projects. Outside of that, I have experience with Docker, Azure, and the Linux CLI.
                </p>
            </div>
        </div>
    );
}

