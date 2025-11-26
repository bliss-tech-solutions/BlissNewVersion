import React, { useEffect, useRef, useState } from "react";
import "./AboutHomeComponent.css";
import AnimatedElement from "../../CommonUsedComponents/AnimatedElement/AnimatedElement";
import InteractiveButton from "../../CommonUsedComponents/InteractiveButton/InteractiveButton";

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

const AboutHomeComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [startCounter, setStartCounter] = useState(false);
    const counterRef = useRef(null);

    const companyWorkDetails = [
        {
            title: "Projects completed",
            number: "500",
            suffix: "+",
            duration: 1200,
        },
        {
            title: "Team members",
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
            <div className="Container">
                <div className="AboutHomeComponentContainer SectionTopPadding SectionTopMargin">
                    <div className="FlexGridSystem">
                        {/* Layer 1: Tag - Fades in from left */}
                        <AnimatedElement animation="fade-right" duration={0.6} delay={0}>
                            <div className="FlexAdd">
                                <div className="tagParagraph"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>
                                    Trusted by 150+ tech-driven teams.</div>
                            </div>
                        </AnimatedElement>

                        {/* Layer 2: Main Heading - Fades up */}
                        <AnimatedElement animation="fade-up" duration={0.8} delay={0.2}>
                            <h2>You conceive the Landmark. We architect the Demand. Together, we Define the Market.</h2>
                        </AnimatedElement>

                        {/* Layer 3: Description - Fades up */}
                        <AnimatedElement animation="fade-up" duration={0.8} delay={0.4}>
                            <p>This is the most direct, sales-focused variant. "We guarantee the buyer" is a bold, high-stakes promise that addresses the developer's core concern: sales volume.</p>
                        </AnimatedElement>

                        {/* Layer 4: Stats Container - Fades up */}
                        <AnimatedElement animation="fade-up" duration={0.8} delay={0.6}>
                            <div className="CompanyWorkDetailsContainer MarginTop30" ref={counterRef}>
                                <div className="ContainerGridSystem">
                                    {companyWorkDetails.map((item, index) => (
                                        <div key={index} className="CompanyWorkDetailsItem">
                                            <h3>
                                                <AnimatedCounter
                                                    target={parseInt(item.number)}
                                                    duration={item.duration}
                                                    isVisible={startCounter}
                                                />
                                                {item.suffix}
                                            </h3>
                                            <p>{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedElement>

                        {/* Layer 5: Button - Zooms in */}
                        <AnimatedElement animation="zoom-in" duration={0.6} delay={0.8}>
                            <InteractiveButton 
                                buttonText="Explore Pricing Plan"
                                arrowText="Got a concept? Let's design it right."
                            />
                        </AnimatedElement>
                    </div>

                    {/* Layer 6: Image - Fades in from right */}
                    <AnimatedElement animation="fade-left" duration={1} delay={0.3}>
                        <div className="imageContainer">
                            <img src="/Images/BackgroundImages/HomeAboutSectionImage.jpeg" alt="" />
                        </div>
                    </AnimatedElement>
                </div>
            </div>
        </div>
    );
};

export default AboutHomeComponent;