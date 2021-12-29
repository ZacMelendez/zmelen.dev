import React from 'react';
import './BashCommand.scss'

export function BashCommand({ props, command, params, blink}) {
    const currentPath = window.location.href.split('#')[1]

    return (
        <div className='bash_command'>
            <p className='user'>ztm@zmelendev</p>
            <p className='colon'>:</p>
            <p className='bash_prefix'>~{props==='404' ? '/' : currentPath} $ </p>
            <p className={`dynamic_text ${blink ? 'after' : ''}`}>{props==='404' ? `cd ..` + currentPath : command}</p>
        </div>
    )
}