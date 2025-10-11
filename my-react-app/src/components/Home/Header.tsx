import React from 'react';
import './Header.css';
import NavigationBar from '../navigation/NavigationBar.tsx';    
export default function Header() {
    return (
        <div className='header-container' id='header'>
            <div className='header'>
                {/* <div className='header-left-container'> */}
                <div className='header-left'>
                    <h1>Sebastian Montoya</h1>
                    <p>Backend, Frontend, and AI Developer</p>
                    <button>See Projects</button>
                </div>
                {/* </div> */}
                <div className='header-right-container'>
                    <div className='header-right'>
                        <a href='#header'>Header</a>
                        <a href='#projects'>Projects</a>
                        <a href='#footer'>Footer</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}