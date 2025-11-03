import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
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
                <span className="icon-box"><FaInstagram /></span>
                <span>Instagram.</span>
            </a>
            <a 
                href="https://www.linkedin.com/in/sebastian-montoya-232393283/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-item"
            >
                <span className="icon-box"><FaLinkedin /></span>
                <span>LinkedIn.</span>
            </a>
            <a 
                href="https://github.com/SebastianMontoya685" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-item"
            >
                <span className="icon-box"><FaGithub /></span>
                <span>GitHub.</span>
            </a>
            <div className="social-item">
                <span className="icon-box"><FaFacebook /></span>
                <span>Facebook.</span>
            </div>
        </div>
    );
}