import React from 'react';
import './Header.css';
import NavigationBar from '../navigation/NavigationBar.tsx';    
export default function Header() {
    return (
        <div className='header-container'>
            <NavigationBar />
            <div className='header'>
                <div className='header-left'>
                    <div>
                        Header left
                    </div>
                </div>
                <div className='header-right'>
                    <div>
                        Header right
                    </div>
                </div>
            </div>
        </div>
        
    );
}