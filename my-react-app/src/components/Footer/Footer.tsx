import React from 'react';
import Socials from './Socials.tsx';
import './Footer.css';
import Links from './Links.tsx';

export default function Footer() {
    return (
        <div className='footer' id='footer'>
            <Socials />
            <Links />
        </div>
    );
}