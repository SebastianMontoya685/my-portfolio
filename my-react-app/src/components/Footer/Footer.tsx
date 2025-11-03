import React from 'react';
import Socials from './Socials';
import './Footer.css';
import Links from './Links';

export default function Footer() {
    return (
        <div className='footer' id='footer'>
            <Links />
            <Socials />
        </div>
    );
}