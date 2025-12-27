import React from 'react';
import './ProjectDisplay.css';

export default function ProjectDisplay({ image, video }: { image?: string; video?: string }) {
    return (
        <div className='project-display'>
            <div className='project-image-container'>
                {video ? (
                    <video
                        src={video}
                        controls
                        className='project-image'
                        style={{ borderRadius: '8px', background: '#000' }}
                    >
                        Sorry, your browser does not support embedded videos.
                    </video>
                ) : (
                    <img src={image} alt='project' className='project-image' />
                )}
            </div>
        </div>
    );
}