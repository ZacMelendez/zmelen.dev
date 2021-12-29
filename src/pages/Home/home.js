import './home.scss';
import React from 'react';
import {BashCommand} from '../../components/components';
// import { ThemeContext, } from './themeContext'

export default function Home() {
    return (
        <div className='content'>
            <BashCommand />
            <p>Hello there, welcome to my website! Feel free to take a look around</p>
        </div>
    );
}

