import React from "react";
import "./InteractiveButton.css";

/**
 * InteractiveButton - Dynamic button with optional arrow text (reference style)
 * 
 * @param {string} buttonText - Main button text (e.g., "Explore Pricing Plan")
 * @param {string} arrowText - Optional text shown with arrow (e.g., "Got a concept? Let's design it right.")
 * @param {string} arrowImage - Optional image path/URL for the arrow (defaults to branded arrow icon)
 * @param {function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 */

const InteractiveButton = ({
    buttonText = "Click Here",
    arrowText = null,
    arrowImage = "/Images/Icons/SmallArrowToUserIntactButtonSign.svg",
    onClick,
    className = "",
    ...props
}) => {
    return (
        <div className={`interactive-button-wrapper ${className}`} {...props}>
            <button className="interactive-button" onClick={onClick}>
                <span className="button-main-text">{buttonText}</span>
            </button>

            {arrowText && (
                <div className="button-arrow-section">
                    <img
                        src={arrowImage}
                        alt="arrow"
                        className="button-arrow-icon"
                    />
                    <p className="button-arrow-text">{arrowText}</p>
                </div>
            )}
        </div>
    );
};

export default InteractiveButton;

