import React, { useEffect, useRef, useState } from "react";
import "./HeroComponent.css";

const AnimatedCounter = ({ target, duration, isVisible }) => {
    const targetString = target.toString();
    const digits = targetString.split('');

    return (
        <span className="counter-wrapper">
            {digits.map((digit, index) => (
                <RollingDigit
                    key={index}
                    digit={parseInt(digit)}
                    duration={duration}
                    delay={index * 50}
                    isVisible={isVisible}
                />
            ))}
        </span>
    );
};

const RollingDigit = ({ digit, duration, delay, isVisible }) => {
    const [currentDigit, setCurrentDigit] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (!isVisible) return;

        const timeout = setTimeout(() => {
            setIsAnimating(true);
            let startTime = null;
            const startValue = 0;

            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = Math.floor(easeOutQuart * (digit - startValue) + startValue);

                setCurrentDigit(current);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCurrentDigit(digit);
                    setTimeout(() => setIsAnimating(false), 100);
                }
            };

            requestAnimationFrame(animate);
        }, delay);

        return () => clearTimeout(timeout);
    }, [isVisible, digit, duration, delay]);

    return (
        <span className="rolling-digit">
            <span
                className={`digit-container ${isAnimating ? 'animating' : ''}`}
                style={{
                    transform: `translateY(-${currentDigit * 10}%)`,
                    filter: isAnimating ? 'blur(1.5px)' : 'blur(0px)'
                }}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <span key={num} className="digit-item">
                        {num}
                    </span>
                ))}
            </span>
        </span>
    );
};

const HeroComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    const companyWorkDetails = [
        {
            title: "Real Estate Branding Agency",
            number: "#1",
            suffix: "",
            isSpecial: true,
        },
        {
            title: "Years in the Industry",
            number: "5",
            suffix: "+",
            duration: 1000,
        },
        {
            title: "Projects Delivered",
            number: "500",
            suffix: "+",
            duration: 1200,
        },
        {
            title: "Team Members",
            number: "100",
            suffix: "+",
            duration: 1100,
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.3 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);
    return (
        <div id="hero-component">
            <div className="HeroComponentContainer">
                <div className="LeftCircleContainer">

                </div>
                <img src="/Images/BackgroundImages/HeroBackgroundRoughBack.webp" alt="" />
                <div className="RightCircleContainer">

                </div>
            </div>
            <div className="HeroContentContainer MaxWidth-900">
                <div className="ContainerGridSystem">
                    <div>
                        <p className="SmallParagraph"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>
                            WE RUN THE SHOW</p>
                    </div>
                    <div>
                        <div className="gapAdjustment">
                            <h1>From Brand Story to Sold-Out Inventory</h1>
                            <p className="WhiteColor">High-Impact Identity. High-Conversion Sales. One seamless engine that takes your project <br /> from 'Coming Soon' to 'Sold Out' on autopilot.</p>
                        </div>
                    </div>
                    <div className="buttonContainer">
                        <button>Let’s Talk Strategy <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                        </button>
                    </div>
                </div>
                <div className="CompanyWorkDetailsContainer" ref={counterRef}>
                    <div className="ContainerGridSystem">
                        {companyWorkDetails.map((item, index) => (
                            <div key={index} className="CompanyWorkDetailsItem">
                                <h3>
                                    {item.isSpecial ? (
                                        <span className={isVisible ? 'counter-animate' : ''}>
                                            {item.number}
                                        </span>
                                    ) : (
                                        <AnimatedCounter
                                            target={parseInt(item.number)}
                                            duration={item.duration}
                                            isVisible={isVisible}
                                        />
                                    )}
                                    {item.suffix}
                                </h3>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroComponent;