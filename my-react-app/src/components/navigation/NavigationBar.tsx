import React from 'react';
import './NavigationBar.css';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export default function NavigationBar() {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    
    return (
        <div className='navigation-bar'>
            <div className='navigation-bar-left'>
                <h1 className='nav-title' onClick={() => navigate('/')}>Sebastian Montoya.</h1>
            </div>
            <div className='navigation-bar-right'>
                <div className='navigation-bar-right-buttons'>
                    <button onClick={() => navigate('/')}>Home</button>
                    <button onClick={() => navigate('/jpi-project')}>JPI</button>
                    <button 
                        onClick={toggleTheme} 
                        className='theme-toggle-btn'
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
        </div>
    );
}