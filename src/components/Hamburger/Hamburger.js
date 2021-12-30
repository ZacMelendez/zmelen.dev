import React from 'react';
import './Hamburger.scss'

export default function Hamburger({ isOpen }){
    return(
            <div className="hamburger">
                <div className={`burger burger1 ${isOpen ? 'b1open' : ''}`} />
                <div className={`burger burger2 ${isOpen ? 'b2open' : ''}`} />
                <div className={`burger burger3 ${isOpen ? 'b3open' : ''}`} />
            </div>
    )
}
