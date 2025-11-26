import React, { useEffect, useRef, useState } from "react";
import "./RevealImage.css";

/**
 * RevealImage - Image component with black overlay reveal animation
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 * @param {number} threshold - Intersection observer threshold (default: 0.3)
 * @param {number} duration - Animation duration in seconds (default: 1.2)
 * @param {string} className - Additional CSS classes
 */

const RevealImage = ({
    src,
    alt = "",
    threshold = 0.3,
    duration = 1.2,
    className = "",
    ...props
}) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                }
            },
            { threshold }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, [threshold]);

    return (
        <div 
            ref={imageRef}
            className={`reveal-image-wrapper ${className}`}
            {...props}
        >
            <img 
                src={src} 
                alt={alt} 
                className="reveal-image"
            />
            <div 
                className={`reveal-overlay ${isRevealed ? 'reveal' : ''}`}
                style={{
                    animationDuration: `${duration}s`
                }}
            ></div>
        </div>
    );
};

export default RevealImage;

