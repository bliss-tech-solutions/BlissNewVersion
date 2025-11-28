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
 * @param {number} stripeCount - Number of overlay stripes for reveal animation
 */

const RevealImage = ({
    src,
    alt = "",
    threshold = 0.3,
    duration = 1.2,
    className = "",
    stripeCount = 5,
    ...props
}) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const imageRef = useRef(null);
    const stripesArray = Array.from({ length: Math.max(1, stripeCount) });

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
                loading="lazy"
            />
            <div className="reveal-overlay-grid">
                {stripesArray.map((_, index) => (
                    <span
                        key={index}
                        className={`reveal-stripe ${isRevealed ? 'reveal' : ''}`}
                        style={{
                            '--stripe-duration': `${duration}s`,
                            '--stripe-delay': `${index * 0.12}s`
                        }}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default RevealImage;

