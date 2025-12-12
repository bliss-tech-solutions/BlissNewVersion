import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./MainLineCreatives.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import MainLineCreativesData from "./MainLineCreativesData";

const MainLineCreatives = () => {
    const swiperRef = useRef(null);
    const [activeImage, setActiveImage] = useState(null);

    const openImage = (image) => {
        setActiveImage(image);
    };

    const closeImage = () => {
        setActiveImage(null);
    };

    useEffect(() => {
        if (activeImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.removeProperty("overflow");
        };
    }, [activeImage]);

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && activeImage) {
                setActiveImage(null);
            }
        };

        if (activeImage) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [activeImage]);

    const imageModal = activeImage
        ? createPortal(
            <div className="ImageModalOverlay" onClick={closeImage}>
                <div className="ImageModalContent" onClick={(e) => e.stopPropagation()}>
                    <button className="ImageModalClose" onClick={closeImage} aria-label="Close image">
                        ×
                    </button>
                    <div className="ImageModalWrapper">
                        <img
                            src={activeImage.image}
                            alt={activeImage.alt || activeImage.title}
                            className="ImageModalImage"
                        />
                    </div>
                </div>
            </div>,
            document.body
        )
        : null;

    return (
        <>
            <div id="MainLineCreatives">
                <div className="Container SectionLargeTopPadding">
                    <CenteredHeader
                        tagText="Main Line Creatives"
                        heading="Main Line Creatives"
                        description=""
                    />
                    
                    <div className="MainLineCreativesSwiperContainer MarginTop60">
                        <div className="MainLineCreativesNavigation">
                            <button
                                className="main-line-prev-btn"
                                onClick={() => swiperRef.current?.slidePrev()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                </svg>
                            </button>
                            <button
                                className="main-line-next-btn"
                                onClick={() => swiperRef.current?.slideNext()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>

                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            slidesPerView={1}
                            spaceBetween={30}
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
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 25,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Navigation, Autoplay]}
                            className="main-line-swiper"
                        >
                            {MainLineCreativesData.map((item) => (
                                <SwiperSlide key={item.id} className="main-line-slide">
                                    <div 
                                        className="main-line-image-wrapper"
                                        onClick={() => openImage(item)}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.alt || item.title}
                                            loading="lazy"
                                            className="main-line-image"
                                        />
                                        <div className="main-line-overlay">
                                            <button className="main-line-view-btn" aria-label={`View ${item.title} in fullscreen`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            {imageModal}
        </>
    )
}

export default MainLineCreatives;