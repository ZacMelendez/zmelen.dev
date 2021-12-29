import './404.scss';
import React from 'react';
import { BashCommand } from '../../components/components';
// import { ThemeContext, } from './themeContext'

export default function PageNotFound() {
    return (
        <div className='content'>
            <BashCommand props='404' />
            <p>zash: cd: 404: the page you were looking for was not found</p>
        </div>
    );
}

