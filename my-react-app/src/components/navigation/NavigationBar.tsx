import React from 'react';
import './NavigationBar.css';
export default function NavigationBar() {
    return (
        <div className='navigation-bar'>
            <div className='navigation-bar-left'>
                <div>
                    Navigation bar left
                </div>
            </div>
            <div className='navigation-bar-right'>
                <div>
                    Navigation bar right
                </div>
            </div>
        </div>
    );
}