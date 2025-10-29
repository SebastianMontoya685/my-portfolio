import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import './Socials.css';

export default function Socials() {
    return (
        <div className="footer-socials" aria-label="right footer social links">
            <div className="social-item">
                <span className="icon-box"><FaInstagram /></span>
                <span>Instagram.</span>
            </div>
            <div className="social-item">
                <span className="icon-box"><FaLinkedin /></span>
                <span>LinkedIn.</span>
            </div>
            <div className="social-item">
                <span className="icon-box"><FaGithub /></span>
                <span>GitHub.</span>
            </div>
            <div className="social-item">
                <span className="icon-box"><FaFacebook /></span>
                <span>Facebook.</span>
            </div>
        </div>
    );
}