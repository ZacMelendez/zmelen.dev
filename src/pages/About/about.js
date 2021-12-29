import './about.scss';
import React from 'react';
import { BashCommand } from '../../components/components';

export default function About() {
    return (
        <div className='content'>
            <BashCommand />
            {/* <p id='about_me'>Lucas ipsum dolor sit amet organa palpatine bespin obi-wan wedge jinn bespin greedo calamari solo. Calrissian moff wicket hutt organa greedo mustafar. Sidious amidala antilles cade organa darth organa ben. Twi'lek darth skywalker ventress dagobah hutt palpatine ahsoka baba. Wedge organa organa fett mace zabrak skywalker. C-3po lobot dagobah dantooine amidala skywalker. Darth fett binks kessel luuke solo. Jar jinn antilles calamari. Moff calrissian luuke fett ben secura thrawn gonk mon. Secura mon darth dooku.</p> */}
            <p className='about_me'>Hi, my name is Zach Melendez. I am a Mechanical Engineering Graduate from the University of Connecticut who has recently taken a liking to Web Development.</p>
            <p className='about_me'>Most of my development experience comes from my job as an IoT Development Engineer, where I worked in junction with a DX team to create an Azure Cloud Data Lake, IoT Hub, and Front-End customer application.</p>
            <p className='about_me'>I am experienced in languages such as Python, JavaScript, HTML & CSS, and have utilized NodeJS, React, SASS, and Next.JS for Web Dev. projects. Outside of that, I have experience with Docker, Azure, and the Linux CLI, which you may have been able to tell ;)</p>
            <BashCommand />
        </div>
    );
}

