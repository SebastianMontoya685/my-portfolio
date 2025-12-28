import React from 'react';
import './Links.css';
import { useNavigate } from 'react-router-dom';

export default function Links() {
    const navigate = useNavigate();
    return (
        <div className="footer-links" aria-label="left footer site links">
            <a href="#header" className="footer-link">Home.</a>
            <a href="#projects" className="footer-link">Projects.</a>
            <button className="footer-link-btn" onClick={() => navigate('/jpi')}>JPI.</button>
        </div>
    );
}