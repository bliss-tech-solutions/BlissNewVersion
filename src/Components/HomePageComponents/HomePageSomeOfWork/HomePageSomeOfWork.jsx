import React, { useState, useEffect, useMemo } from "react";
import { Modal } from "antd";
import "./HomePageSomeOfWork.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
// import HomePageSomeOfWorkData from "./HomePageSomeOfWorkData";
import AnimatedElement from "../../CommonUsedComponents/AnimatedElement/AnimatedElement";
import RevealImage from "../../CommonUsedComponents/RevealImage/RevealImage";
import InteractiveButton from "../../CommonUsedComponents/InteractiveButton/InteractiveButton";
import OurWorkGridData from "../../OtherComponents/OurWorkGrid/OurWorkGridData";
// Swiper imports (commented out for future use)
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules';

const HomePageSomeOfWork = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Get top 6 items from Brochures category
    const displayedItems = useMemo(() => {
        const brochuresCategory = OurWorkGridData.find(
            (item) => item.category === "Brochures"
        );
        if (!brochuresCategory || !brochuresCategory.works) return [];

        // Map the data structure to match component expectations and take only top 6
        return brochuresCategory.works.slice(0, 6).map((item) => ({
            tagline: item.title,
            title: item.title,
            img: item.image,
            alt: item.alt || `${item.title} real estate marketing project portfolio showcase by The Bliss Solution branding agency in Gujarat`,
            pdfDocument: item.pdfUrl,
            description: item.description || "Premium real estate project brochure.",
        }));
    }, []);

    const handleCardClick = (item) => {
        if (!item || !item.pdfDocument) return;
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closePdfModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    const getPdfUrl = (pdfPath = "") => {
        if (!pdfPath) return "";

        const trimmedPath = pdfPath.trim();

        // Absolute URLs: encode and return
        if (/^https?:\/\//i.test(trimmedPath)) {
            return encodeURI(trimmedPath);
        }

        // Normalize local paths and encode to handle spaces/special chars
        const normalizedPath = trimmedPath.startsWith("/")
            ? trimmedPath
            : `/${trimmedPath}`;

        try {
            const url = new URL(normalizedPath, window.location.origin);
            return url.href;
        } catch (error) {
            return encodeURI(normalizedPath);
        }
    };

    // Handle body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

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
                            <div
                                key={index}
                                className="WorkGridCard"
                                onClick={() => handleCardClick(item)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="WorkGridImageContainer">
                                    <RevealImage
                                        src={item.img || "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad140c988deab69a716a_service-small5.webp"}
                                        alt={item.alt || `${item.title} real estate marketing project portfolio showcase by The Bliss Solution branding agency in Gujarat`}
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

            {/* PDF Modal Viewer using Ant Design */}
            <Modal
                open={isModalOpen}
                onCancel={closePdfModal}
                footer={null}
                width="85%"
                style={{ maxWidth: '1000px', top: 40 }}
                styles={{
                    body: {
                        padding: 0,
                        height: '75vh',
                        overflow: 'hidden',
                        background: '#282828',
                    },
                    content: {
                        background: '#282828',
                        borderRadius: '12px',
                    },
                }}
                closeIcon={
                    <span className="PdfModalCloseIcon">×</span>
                }
                destroyOnClose={true}
                title={selectedItem ? (
                    <div className="PdfModalHeader">
                        <div className="PdfModalHeaderContent">
                            <h3 className="PdfModalTitle" style={{ color: 'black' }}>{selectedItem.title}</h3>
                        </div>
                    </div>
                ) : null}
            >
                {selectedItem && (
                    <iframe
                        src={getPdfUrl(selectedItem.pdfDocument)}
                        className="PdfModalIframe"
                        id={`pdf_iframe_${selectedItem.pdfDocument.replace(/\//g, '_')}`}
                        allow="autoplay; fullscreen"
                        scrolling="auto"
                        title={`${selectedItem.title} PDF Viewer`}
                    />
                )}
            </Modal>
        </div>
    );
};

export default HomePageSomeOfWork;