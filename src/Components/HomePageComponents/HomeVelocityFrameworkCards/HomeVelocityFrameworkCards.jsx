import React, { useEffect, useRef, useState } from "react";
import "./HomeVelocityFrameworkCards.css";
import FlexBetweenHeader from "../../CommonUsedComponents/FlexBetweenHeader/FlexBetweenHeader";
import VelocityFrameWorkData from "./VelocityFrameWorkData";
import AnimatedElement from "../../CommonUsedComponents/AnimatedElement/AnimatedElement";
import RevealImage from "../../CommonUsedComponents/RevealImage/RevealImage";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';

const HomeVelocityFrameworkCards = () => {
    const [cardScales, setCardScales] = useState(VelocityFrameWorkData.map(() => ({ scale: 1, blur: 0 })));
    const cardRefs = useRef([]);
    const videoSliderRef = useRef(null);

    // Dummy video slider data (placeholder boxes)
    const videoPlaceholders = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        title: `Video ${i + 1}`
    }));

    useEffect(() => {
        let ticking = false;

        const updateScales = () => {
            const stickyTop = window.innerHeight * 0.2; // 20% from top

            const newScales = cardRefs.current.map((card, index) => {
                if (!card) return { scale: 1, blur: 0 };

                const rect = card.getBoundingClientRect();

                // Check if THIS card is sticky (at the sticky position)
                const isSticky = Math.abs(rect.top - stickyTop) < 5;

                // Only apply effects if the card is sticky
                if (isSticky) {
                    // Check if there's a next card (card below this one)
                    const nextCard = cardRefs.current[index + 1];

                    if (nextCard) {
                        const nextRect = nextCard.getBoundingClientRect();
                        const cardHeight = rect.height;

                        // Calculate overlap: when next card's top passes the bottom of current card
                        const currentCardBottom = rect.bottom;
                        const overlap = currentCardBottom - nextRect.top;

                        // Start effect when 20% of the card height is overlapping
                        const overlapThreshold = cardHeight * 0.2;

                        if (overlap >= overlapThreshold) {
                            // Calculate progress based on overlap (20% to 100% overlap)
                            const maxOverlap = cardHeight * 0.8; // Animation completes at 80% overlap
                            const progress = Math.min((overlap - overlapThreshold) / maxOverlap, 1);

                            const scale = Math.max(0.90, 1 - (progress * 0.10));
                            const blur = Math.min(progress * 5, 5);

                            return { scale, blur };
                        }
                    }
                }

                return { scale: 1, blur: 0 };
            });

            setCardScales(newScales);
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateScales);
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        updateScales(); // Initial calculation

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="HomeVelocityFrameworkCardsContainer">
                <div className="backgroundAttachmentFixedImage">
                    <div className="LeftCircleContainer">

                    </div>
                </div>
                <div className="Container SectionLargeTopPadding">
                    {/* Animated Header Section */}
                    <AnimatedElement animation="fade-up" duration={0.8} delay={0}>
                        <div>
                            <FlexBetweenHeader
                                tagText="our process"
                                heading="Services and solutions we offer."
                                description=""
                                buttonLabel=""
                            />
                        </div>
                    </AnimatedElement>

                    {/* Animated Description */}
                    <AnimatedElement animation="fade-up" duration={0.8} delay={0.2}>
                        <div className="MaxWidth-600 MarginTop30">
                            <p>We work with creative teams and ambitious founders to turn vision into product with intuitive UX, standout visuals, and seamless digital experiences that users remember.</p>
                        </div>
                    </AnimatedElement>
                    {/* Cards keep their existing scroll-based animations */}
                    <div className="VelocityFrameworkCardsGrid MarginTop30">
                        {VelocityFrameWorkData.map((item, index) => (
                            <div
                                key={index}
                                ref={el => cardRefs.current[index] = el}
                                className="VelocityFrameworkCardsItem"
                                style={{
                                    transform: `scale(${cardScales[index]?.scale || 1})`,
                                    filter: `blur(${cardScales[index]?.blur || 0}px)`
                                }}
                            >
                                <div className="VelocityContentAndImageGrid">
                                    <div className="VelocityContentFirstHalf">
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="PointsTagList">
                                            {item.points.map((point, index) => (
                                                <div key={index}>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                    </svg>
                                                        {point}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="VideosListContainer">
                                            <div className="video-slider-wrapper">
                                                <Swiper
                                                    // ref={videoSliderRef}
                                                    loop={true}
                                                    slidesPerView={4}
                                                    spaceBetween={10}
                                                    freeMode={true}
                                                    navigation={{
                                                        prevEl: `.video-prev-${index}`,
                                                        nextEl: `.video-next-${index}`,
                                                    }}
                                                    modules={[FreeMode, Navigation]}
                                                    className="video-swiper"
                                                >
                                                    {videoPlaceholders.map((video) => (
                                                        <SwiperSlide key={video.id} className="video-slide">
                                                            <div className="video-placeholder-box">
                                                                {video.title}
                                                            </div>
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                                <div className="video-slider-navigation">
                                                    <button className={`video-nav-btn video-prev-${index}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                                        </svg>
                                                    </button>
                                                    <button className={`video-nav-btn video-next-${index}`}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="VelocityContentSecondHalf">
                                        <RevealImage src={item.img} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default HomeVelocityFrameworkCards;