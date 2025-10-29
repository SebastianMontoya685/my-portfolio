import React, { useState, useEffect } from 'react';
import './ProjectSlideshow.css';

type ProjectSlideshowProps = {
    images: string[];
    autoAdvanceInterval?: number;
    onImageClick?: () => void;
    objectFit?: 'cover' | 'contain' | ('cover' | 'contain')[];
};

export default function ProjectSlideshow({ images, autoAdvanceInterval = 3000, onImageClick, objectFit = 'cover' }: ProjectSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, autoAdvanceInterval);

        return () => clearInterval(interval);
    }, [images.length, autoAdvanceInterval]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    if (images.length === 0) {
        return <div className="slideshow-placeholder">No images available</div>;
    }

    // Determine object-fit for current image
    const getCurrentObjectFit = () => {
        if (Array.isArray(objectFit)) {
            return objectFit[currentIndex] || 'cover';
        }
        return objectFit;
    };

    return (
        <div className="project-slideshow">
            <div className="slideshow-container">
                <img 
                    src={images[currentIndex]} 
                    alt={`Project slide ${currentIndex + 1}`} 
                    className="slideshow-image"
                    onClick={onImageClick}
                    style={{ 
                        cursor: onImageClick ? 'pointer' : 'default',
                        objectFit: getCurrentObjectFit()
                    }}
                />
                
                {images.length > 1 && (
                    <>
                        <button className="slideshow-nav prev" onClick={goToPrevious}>
                            &#8249;
                        </button>
                        <button className="slideshow-nav next" onClick={goToNext}>
                            &#8250;
                        </button>
                        
                        <div className="slideshow-indicators">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
