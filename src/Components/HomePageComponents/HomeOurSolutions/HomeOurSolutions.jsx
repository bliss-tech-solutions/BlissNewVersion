import React, { useRef } from "react";
import "./HomeOurSolutions.css";
import FlexBetweenHeader from "../../CommonUsedComponents/FlexBetweenHeader/FlexBetweenHeader";
import AnimatedElement from "../../CommonUsedComponents/AnimatedElement/AnimatedElement";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Our360SolutionsData from "./Our360SolutionsData.jsx";

const HomeOurSolutions = () => {
    const swiperRef = useRef(null);

    return (
        <div id="home-our-solutions">
            <div className="Container SectionLargeTopPadding">
                <div className="HomeOurSolutionsContainer">
                    {/* Layer 1: Header Section - Fades up */}
                    <AnimatedElement animation="fade-up" duration={0.8} delay={0}>
                        <div>
                            <FlexBetweenHeader
                                tagText="what we offer"
                                heading="Your Exclusive 360° Real Estate Growth Engine"
                                description={<div>
                                    <div className="CarousalControlsBtns">
                                        <button
                                            className="swiper-button-prev-custom"
                                            onClick={() => swiperRef.current?.slidePrev()}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                            </svg>

                                        </button>
                                        <button
                                            className="swiper-button-next-custom"
                                            onClick={() => swiperRef.current?.slideNext()}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>}
                            />
                            {/* <div className="MaxWidth-600">
                                <p className="MarginTop30">From brand strategy to digital execution, we deliver integrated solutions that position your properties for maximum market impact and accelerated sales velocity.</p>
                            </div> */}
                        </div>
                    </AnimatedElement>

                    {/* Layer 2: Swiper Container - Fades up with delay */}
                    <AnimatedElement animation="fade-up" duration={0.8} delay={0.3}>
                        <div className="MarginTop30">
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            slidesPerView={1}
                            spaceBetween={30}
                            freeMode={true}
                            speed={800}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 1,
                                },
                                992: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                            }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            modules={[FreeMode, Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            {Our360SolutionsData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="Our360SolutionsCard">
                                        <div className="Our360SolutionsCardImage">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="Our360SolutionsCardContent">
                                            <h4>{item.title}</h4>
                                            <br />
                                            <p className="FadeParaColor">{item.tagline}</p>
                                        </div>
                                        <div className="Our360SolutionsCardButton">
                                            <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        </div>
                    </AnimatedElement>
                </div>
            </div>
        </div>
    );
};

export default HomeOurSolutions;