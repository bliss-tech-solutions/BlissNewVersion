import React from "react";
import "./HomePageSomeOfWork.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import HomePageSomeOfWorkData from "./HomePageSomeOfWorkData";
import AnimatedElement from "../../CommonUsedComponents/AnimatedElement/AnimatedElement";
import RevealImage from "../../CommonUsedComponents/RevealImage/RevealImage";
import InteractiveButton from "../../CommonUsedComponents/InteractiveButton/InteractiveButton";
// Swiper imports (commented out for future use)
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules';

const HomePageSomeOfWork = () => {
    // Show only first 6 items (3 rows x 2 columns)
    const displayedItems = HomePageSomeOfWorkData.slice(0, 6);

    return (
        <div id="home-page-some-of-work">
            <div className="SectionLargeTopPadding">
                {/* Animated Header */}
                <AnimatedElement animation="fade-up" duration={0.8} delay={0}>
                    <div className="Container">
                        <CenteredHeader
                            tagText="our portfolio"
                            heading="Projects That Define Excellence"
                            description="Verified Success. Unfiltered Data. Explore the Metrics That Define Market Leadership."
                        />
                    </div>
                </AnimatedElement>

                {/* Swiper (commented out for future use) */}
                {/* <div className="WorkSwiperContainer MarginTop60">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        speed={800}
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
                                slidesPerView: 1.7,
                            },
                            1200: {
                                slidesPerView: 1.7,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="workSwiper"
                    >
                        {HomePageSomeOfWorkData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="WorkSlideCard">
                                    <div className="WorkSlideImageContainer">
                                        <RevealImage
                                            src={item.image || "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad140c988deab69a716a_service-small5.webp"}
                                            alt={`${item.title} real estate marketing project portfolio showcase by The Bliss Solution branding agency in Gujarat`}
                                            threshold={0.3}
                                            duration={1.2}
                                        />
                                    </div>
                                    <div className="WorkSlideContent">
                                        <h3>{item.title}</h3>
                                        <div className="WorkSlideTags">
                                            {item.tags && item.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="WorkTag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> */}

                {/* Grid Layout - 3 rows x 2 columns */}
                <div className="Container MarginTop60">
                    <div className="WorkGridContainer">
                        {displayedItems.map((item, index) => (
                            <div key={index} className="WorkGridCard">
                                <div className="WorkGridImageContainer">
                                    <RevealImage
                                        src={item.image || "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad140c988deab69a716a_service-small5.webp"}
                                        alt={`${item.title} real estate marketing project portfolio showcase by The Bliss Solution branding agency in Gujarat`}
                                        threshold={0.3}
                                        duration={1.2}
                                    />
                                </div>
                                <div className="WorkGridContent">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Animated Button */}
                <AnimatedElement animation="zoom-in" duration={0.6} delay={0.2}>
                    <div className="Container" id="home-page-some-of-work-button">
                        <div className="buttonContainerNavigation MarginTop30">
                            <div className="buttonContainer">
                                <InteractiveButton
                                    buttonText="View all projects"
                                    onClick={() => {
                                        window.location.href = "/ourwork";
                                    }}
                                    arrowText=""
                                />
                            </div>
                        </div>
                    </div>
                </AnimatedElement>
                <br /><br />
            </div>
        </div>
    );
};

export default HomePageSomeOfWork;