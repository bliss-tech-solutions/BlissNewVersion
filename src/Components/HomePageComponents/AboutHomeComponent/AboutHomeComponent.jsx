import React, { useEffect, useRef, useState } from "react";
import "./AboutHomeComponent.css";
import AnimatedElement from "../../CommonUsedComponents/AnimatedElement/AnimatedElement";
import InteractiveButton from "../../CommonUsedComponents/InteractiveButton/InteractiveButton";
// import FlexCenteredHeader from "../../CommonUsedComponents/FlexCenteredHeader/FlexCenteredHeader";
import FlexBetweenHeader from "../../CommonUsedComponents/FlexBetweenHeader/FlexBetweenHeader";

const AnimatedCounter = ({ target, duration, isVisible }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (!isVisible) return;

        setIsAnimating(true);
        let startTime = null;
        const startValue = 0;
        let animationFrameId = null;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Smoother easing function - easeOutCubic for more natural motion
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOutCubic * (target - startValue) + startValue);

            setCurrentValue(current);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCurrentValue(target);
                setTimeout(() => setIsAnimating(false), 150);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isVisible, target, duration]);

    // Convert current value to string and pad to match target length
    const targetString = target.toString();
    const currentString = currentValue.toString().padStart(targetString.length, '0');
    const digits = currentString.split('');

    return (
        <span className="counter-wrapper">
            {digits.map((digit, index) => (
                <RollingDigit
                    key={index}
                    digit={parseInt(digit)}
                    isAnimating={isAnimating}
                />
            ))}
        </span>
    );
};

const RollingDigit = ({ digit, isAnimating }) => {
    return (
        <span className="rolling-digit">
            <span
                className={`digit-container ${isAnimating ? 'animating' : ''}`}
                style={{
                    transform: `translateY(-${digit * 10}%)`,
                    filter: isAnimating ? 'blur(1px)' : 'blur(0px)'
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

const AboutHomeComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [startCounter, setStartCounter] = useState(false);
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

    // Start counter animation after container appears
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setStartCounter(true);
            }, 300); // Small delay after container appears

            return () => clearTimeout(timer);
        } else {
            setStartCounter(false);
        }
    }, [isVisible]);

    return (
        <div id="about-home-component">
            <div className="backgroundOverlayImageSet">

            </div>
            <div className="Container">
                <div className="AboutHomeComponentContainer SectionTopPadding">
                    <div className="FlexGridSystem">
                        <div className="Max1000px">
                            <FlexBetweenHeader
                                tagText="Real estate demand engineering"
                                heading="Real Estate Marketing Agency for Developers – We Engineer Buyer Demand"
                                description=""
                            />
                            <p>Partner‑first real estate marketing agency helping property developers turn landmark projects into sold‑out addresses. Through brand architecture, launch strategy, high‑intent lead generation and sales pipeline activation, we create consistent buyer demand and accelerate bookings for residential and commercial projects.</p>

                        </div>

                        {/* Layer 4: Stats Container - Fades up */}
                        <AnimatedElement animation="fade-up" duration={0.8} delay={0.6}>
                            <div className="CompanyWorkDetailsContainer MarginTop30" ref={counterRef}>
                                <div className="ContainerGridSystem">
                                    {companyWorkDetails.map((item, index) => (
                                        <div key={index} className="CompanyWorkDetailsItem">
                                            <h3>
                                                {item.isSpecial ? (
                                                    <span className={startCounter ? 'counter-animate' : ''}>
                                                        {item.number}
                                                    </span>
                                                ) : (
                                                    <AnimatedCounter
                                                        target={parseInt(item.number)}
                                                        duration={item.duration}
                                                        isVisible={startCounter}
                                                    />
                                                )}
                                                {item.suffix}
                                            </h3>
                                            <p>{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedElement>

                        {/* Layer 5: Button - Zooms in */}
                        <div className="MarginTop60">
                            <AnimatedElement animation="zoom-in" duration={0.6} delay={0.8}>
                                <InteractiveButton
                                    onClick={() => {
                                        window.location.href = "tel:+919067157357";
                                    }}
                                    buttonText="Start Your Project"
                                    arrowText="Got a concept? Let’s engineer the demand."
                                />
                            </AnimatedElement>
                        </div>
                    </div>

                    {/* Layer 6: Image - Fades in from right */}
                    {/* <AnimatedElement animation="fade-left" duration={1} delay={0.3}>
                        <div className="imageContainer">
                            <img src="/Images/BackgroundImages/HomeAboutSectionImage.jpeg" alt="" />
                        </div>
                    </AnimatedElement> */}
                </div>
            </div>
        </div>
    );
};

export default AboutHomeComponent;