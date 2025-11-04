import React from 'react';
import './Socials.css';

export default function Socials() {
    return (
        <div className="footer-socials" aria-label="right footer social links">
            <a 
                href="https://www.instagram.com/sebastianmontoya800/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-item"
            >
                <span className="icon-box" role="img" aria-label="Instagram">📸</span>
                <span>Instagram.</span>
            </a>
            <a 
                href="https://www.linkedin.com/in/sebastian-montoya-232393283/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-item"
            >
                <span className="icon-box" role="img" aria-label="LinkedIn">🔗</span>
                <span>LinkedIn.</span>
            </a>
            <a 
                href="https://github.com/SebastianMontoya685" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-item"
            >
                <span className="icon-box" role="img" aria-label="GitHub">🐱</span>
                <span>GitHub.</span>
            </a>
            <div className="social-item">
                <span className="icon-box" role="img" aria-label="Facebook">📘</span>
                <span>Facebook.</span>
            </div>
        </div>
    );
}