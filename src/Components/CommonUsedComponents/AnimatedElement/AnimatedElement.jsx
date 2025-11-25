import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedElement - Reusable animation component similar to AOS
 * 
 * @param {string} animation - Type of animation: 'fade-in', 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out'
 * @param {number} duration - Animation duration in seconds (default: 0.6)
 * @param {number} delay - Animation delay in seconds (default: 0)
 * @param {number} threshold - Intersection observer threshold (default: 0.2)
 * @param {boolean} once - Animate only once (default: true)
 * @param {object} children - Child elements to animate
 */

const AnimatedElement = ({
    children,
    animation = "fade-in",
    duration = 0.6,
    delay = 0,
    threshold = 0.2,
    once = true,
    className = "",
    ...props
}) => {
    // Animation variants based on type
    const variants = {
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        "fade-up": {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
        },
        "fade-down": {
            hidden: { opacity: 0, y: -40 },
            visible: { opacity: 1, y: 0 }
        },
        "fade-left": {
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 }
        },
        "fade-right": {
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0 }
        },
        "zoom-in": {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        },
        "zoom-out": {
            hidden: { opacity: 0, scale: 1.2 },
            visible: { opacity: 1, scale: 1 }
        },
        "slide-up": {
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 }
        },
        "slide-down": {
            hidden: { opacity: 0, y: -60 },
            visible: { opacity: 1, y: 0 }
        },
        "slide-left": {
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0 }
        },
        "slide-right": {
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 }
        },
        "flip-up": {
            hidden: { opacity: 0, rotateX: -90 },
            visible: { opacity: 1, rotateX: 0 }
        },
        "flip-down": {
            hidden: { opacity: 0, rotateX: 90 },
            visible: { opacity: 1, rotateX: 0 }
        }
    };

    const selectedVariant = variants[animation] || variants["fade-in"];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth animation
            }}
            variants={selectedVariant}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedElement;

