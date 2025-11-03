import React from 'react';
import './NavigationBar.css';
import { useNavigate } from 'react-router-dom';

const backendURL = "http://localhost:8080";

async function invokeLambda() {
    const response = await fetch(`${backendURL}/api/lambda/invoke`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            action: 'jpi-button',
            timestamp: new Date().toISOString()
        })
    });

    const data = await response.json();
    console.log(data);
}

export default function NavigationBar() {
    const navigate = useNavigate();
    return (
        <div className='navigation-bar'>
            <div className='navigation-bar-left'>
                <h1 className='nav-title' onClick={() => navigate('/')}>Sebastian Montoya.</h1>
            </div>
            <div className='navigation-bar-right'>
                <div className='navigation-bar-right-buttons'>
                    <button onClick={() => navigate('/')}>Home</button>
                    <button onClick={() => navigate('/contact')}>Contact</button>
                    <button onClick={async () => {
                        navigate('/jpi-project');
                        await invokeLambda();
                    }}>JPI</button>
                    <button onClick={() => navigate('/tpra')}>TPRA</button>
                    <button onClick={() => navigate('/unsw')}>UNSW</button>
                    <button onClick={() => navigate('/projects')}>All Projects</button>
                </div>
            </div>
        </div>
    );
}