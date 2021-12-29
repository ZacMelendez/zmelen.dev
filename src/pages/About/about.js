import './about.scss';
import React from 'react';

export default function About() {
    return (
        <div className="About">
            <div className='text_entry'>
                <p id='user'>ztm@zmelendev</p>
                <p id='colon'>:</p>
                <p id='bash_prefix'>~/About $ </p>
                <p id='dynamic_text'>cat about_me.txt</p>
            </div>
            <p id='about_me'>Lucas ipsum dolor sit amet organa palpatine bespin obi-wan wedge jinn bespin greedo calamari solo. Calrissian moff wicket hutt organa greedo mustafar. Sidious amidala antilles cade organa darth organa ben. Twi'lek darth skywalker ventress dagobah hutt palpatine ahsoka baba. Wedge organa organa fett mace zabrak skywalker. C-3po lobot dagobah dantooine amidala skywalker. Darth fett binks kessel luuke solo. Jar jinn antilles calamari. Moff calrissian luuke fett ben secura thrawn gonk mon. Secura mon darth dooku.</p>
            <div className='text_entry'>
                <p id='user'>ztm@zmelendev</p>
                <p id='colon'>:</p>
                <p id='bash_prefix'>~ $</p>
                <p id='dynamic_text'></p>
                <div id='blinker' />
            </div>
        </div>
    );
}

