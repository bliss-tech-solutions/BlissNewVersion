import React, { useEffect, useRef, useState } from "react";
import "./HeroComponent.css";
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

const HeroComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [startCounter, setStartCounter] = useState(false);
    const counterRef = useRef(null);

    // Top 12 Client Logos
    const clientLogos = [
        { id: 1, name: "Samruddh", logo: "/Images/ClientsLogos/samruddh.png" },
        { id: 2, name: "Pravish", logo: "/Images/ClientsLogos/pravish.png" },
        { id: 3, name: "Origin Group", logo: "/Images/ClientsLogos/origingroup.png" },
        { id: 4, name: "Vraj", logo: "/Images/ClientsLogos/Vraj.png" },
        { id: 5, name: "VR Buildcon", logo: "/Images/ClientsLogos/VrBuildcon.png" },
        { id: 6, name: "Vision Creative Group", logo: "/Images/ClientsLogos/VisionCreativeGroup.png" },
        { id: 7, name: "Vinayak", logo: "/Images/ClientsLogos/Vinayak.png" },
        { id: 8, name: "Verdana", logo: "/Images/ClientsLogos/Verdana.png" },
        { id: 9, name: "VR Group", logo: "/Images/ClientsLogos/VRGroup.png" },
        { id: 10, name: "Trisha", logo: "/Images/ClientsLogos/Trisha.png" },
        { id: 11, name: "Times Square Arcade Group", logo: "/Images/ClientsLogos/TimesSquareArcadeGroup.png" },
        { id: 12, name: "The Orion", logo: "/Images/ClientsLogos/TheOrion.png" }
    ];

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

    // Start counter animation after stats container animation completes
    // Container animation: delay 1.5s + duration 0.8s = 2.3s total
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setStartCounter(true);
            }, 2300); // Wait for container animation to complete

            return () => clearTimeout(timer);
        } else {
            setStartCounter(false);
        }
    }, [isVisible]);
    return (
        <div id="hero-component">
            {/* Background Layer - Fades in first */}
            <AnimatedElement animation="fade-in" duration={1} delay={0}>
                <div className="HeroComponentContainer">
                    <div className="LeftCircleContainer">

                    </div>
                    <img 
                        src="/Images/BackgroundImages/HeroBackgroundRoughBack.webp" 
                        alt="Modern real estate branding agency hero background showcasing premium property marketing services" 
                        loading="eager"
                    />
                    <div className="RightCircleContainer">

                    </div>
                </div>
            </AnimatedElement>

            <div className="HeroContentContainer MaxWidth-900">
                <div className="ContainerGridSystem">
                    {/* Layer 1: Small tag - appears after background */}
                    <AnimatedElement animation="fade-down" duration={0.6} delay={0.3}>
                        <div>
                            <p className="SmallParagraph"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                            </svg>
                                WE RUN THE SHOW</p>
                        </div>
                    </AnimatedElement>

                    {/* Layer 2: Main content container */}
                    <div>
                        <div className="gapAdjustment">
                            {/* Layer 3: Main heading - slides up */}
                            <AnimatedElement animation="fade-up" duration={0.8} delay={0.6}>
                                <h1>From Brand Story to Sold-Out Inventory</h1>
                            </AnimatedElement>

                            {/* Layer 4: Description - slides up with more delay */}
                            <AnimatedElement animation="fade-up" duration={0.8} delay={0.9}>
                                <p className="WhiteColor">High-Impact Identity. High-Conversion Sales. One seamless engine that takes your project <br /> from 'Coming Soon' to 'Sold Out' on autopilot.</p>
                            </AnimatedElement>
                        </div>
                    </div>

                    {/* Layer 5: Button - appears last in main section */}
                    <AnimatedElement animation="zoom-in" duration={0.6} delay={1.2}>
                        <InteractiveButton
                            buttonText="Let's Talk Strategy"
                            arrowText=""
                        />
                    </AnimatedElement>
                </div>

                {/* Layer 6: Stats Container - fades in from bottom */}
                {/* <AnimatedElement 
                    animation="fade-up" 
                    duration={0.8} 
                    delay={1.5} 
                    once={false}
                    className="stats-container-wrapper"
                >
                    <div className="CompanyWorkDetailsContainer" ref={counterRef}>
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
                </AnimatedElement> */}
            </div>

            {/* Client Logos Marquee */}
            <div className="client-logos-marquee">
                <div className="marquee-container">
                    <div className="marquee-content">
                        {/* Render logos twice for seamless infinite loop */}
                        {[...clientLogos, ...clientLogos].map((client, index) => (
                            <div key={`logo-${index}`} className="client-logo-item">
                                <img 
                                    src={client.logo} 
                                    alt={`${client.name} real estate developer client of The Bliss Solution branding agency Gujarat`} 
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroComponent;