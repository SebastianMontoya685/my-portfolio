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
                <span className="icon-box" aria-label="Instagram">
                    <img src="/instagram-logo.svg" alt="Instagram" width={26} height={26} />
                </span>
                <span>Instagram.</span>
            </a>
            <a 
                href="https://www.linkedin.com/in/sebastian-montoya-232393283/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-item"
            >
                <span className="icon-box" aria-label="LinkedIn">
                    <img src="/linkedin-logo.svg" alt="LinkedIn" width={26} height={26} />
                </span>
                <span>LinkedIn.</span>
            </a>
            <a 
                href="https://github.com/SebastianMontoya685" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-item"
            >
                <span className="icon-box" aria-label="GitHub">
                    <img src="/github-logo.svg" alt="GitHub" width={26} height={26} />
                </span>
                <span>GitHub.</span>
            </a>
        </div>
    );
}