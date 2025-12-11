import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import "./OurWorkGrid.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import OurWorkGridData from "./OurWorkGridData";
const OurWorkGrid = () => {
    const [activeCategory, setActiveCategory] = useState(OurWorkGridData[0]?.category || "");
    const [activeVideo, setActiveVideo] = useState(null);
    const [activePdf, setActivePdf] = useState(null);

    const categories = useMemo(() => OurWorkGridData.map((item) => item.category), []);

    const worksToRender = useMemo(() => {
        const active = OurWorkGridData.find((item) => item.category === activeCategory);
        return active?.works ?? [];
    }, [activeCategory]);

    useEffect(() => {
        if (activeVideo || activePdf) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.removeProperty("overflow");
        };
    }, [activeVideo, activePdf]);

    const openVideo = (work) => {
        setActiveVideo(work);
    };

    const closeVideo = () => {
        setActiveVideo(null);
    };

    const openPdf = (work) => {
        setActivePdf(work);
    };

    const closePdf = () => {
        setActivePdf(null);
    };

    const getPdfUrl = (pdfPath) => {
        if (!pdfPath) return "";
        const trimmedPath = pdfPath.trim();
        if (/^https?:\/\//i.test(trimmedPath)) {
            return encodeURI(trimmedPath);
        }
        const normalizedPath = trimmedPath.startsWith("/") ? trimmedPath : `/${trimmedPath}`;
        try {
            const url = new URL(normalizedPath, window.location.origin);
            return url.href;
        } catch {
            return encodeURI(normalizedPath);
        }
    };

    const extractYouTubeId = (url = "") => {
        try {
            const youtubeShort = /https?:\/\/youtu\.be\/([A-Za-z0-9_-]+)/;
            const youtubeLong = /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;

            if (youtubeShort.test(url)) {
                return url.match(youtubeShort)?.[1] || "";
            }
            if (youtubeLong.test(url)) {
                return url.match(youtubeLong)?.[1] || "";
            }
            return "";
        } catch (error) {
            console.error("Failed to parse video URL:", error);
            return "";
        }
    };

    const getVideoEmbedUrl = (url) => {
        const videoId = extractYouTubeId(url);
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1` : url || "";
    };

    const getVideoThumbnailUrl = (url) => {
        const videoId = extractYouTubeId(url);
        return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    // Handle ESC key to close modals
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                if (activeVideo) {
                    setActiveVideo(null);
                }
                if (activePdf) {
                    setActivePdf(null);
                }
            }
        };

        if (activeVideo || activePdf) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [activeVideo, activePdf]);

    const videoModal = activeVideo
        ? createPortal(
            <div className="VideoModalOverlay" onClick={closeVideo}>
                <div className="VideoModalContent" onClick={(e) => e.stopPropagation()}>
                    <button className="VideoModalClose" onClick={closeVideo} aria-label="Close video">
                        ×
                    </button>
                    <div className="VideoFrameWrapper">
                        <iframe
                            src={getVideoEmbedUrl(activeVideo.videoUrl)}
                            title={activeVideo.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>,
            document.body
        )
        : null;

    const pdfModal = activePdf
        ? createPortal(
            <div className="VideoModalOverlay" onClick={closePdf}>
                <div className="PdfModalContent" onClick={(e) => e.stopPropagation()}>
                    <button className="VideoModalClose" onClick={closePdf} aria-label="Close PDF">
                        ×
                    </button>
                    <div className="PdfFrameWrapper">
                        <iframe
                            src={getPdfUrl(activePdf.pdfUrl)}
                            title={activePdf.title}
                            className="PdfModalIframe"
                            allow="autoplay; fullscreen"
                            scrolling="auto"
                        ></iframe>
                    </div>
                </div>
            </div>,
            document.body
        )
        : null;

    return (
        <>
            <div id="our-work-grid">
                <div className="Container SectionLargeTopPadding">
                    <CenteredHeader
                        heading="Some of Our Work"
                        description="We have worked with some of the best real estate brands in Gujarat. We have helped them to launch their projects and to sell out their inventory."
                    />
                    <div className="OurWorkTabs">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={`OurWorkTab ${activeCategory === category ? "is-active" : ""}`}
                                onClick={() => setActiveCategory(category)}
                                aria-pressed={activeCategory === category}
                            >
                                <span>{category}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        ))}
                    </div>
                    <div className="OurWorkGridContainer MarginTop60">
                        {worksToRender.map((item, index) => (
                            <article className="OurWorkGridItem" key={`${item.title}-${index}`}>
                                <div className="OurWorkGridItemContent">
                                    <div className="WorkContent">
                                        <h4>{item.title}</h4>
                                        {/* {item.description && <p>{item.description}</p>} */}
                                    </div>
                                    <div className="WorkCardHeader">
                                        <span className="WorkCategoryPill">{activeCategory}</span>
                                        {item.year && <span className="WorkYearPill">{item.year}</span>}
                                    </div>
                                </div>
                                <div className="OurWorkGridItemImage">
                                    <img
                                        src={
                                            // For videos: use YouTube thumbnail, fallback to item.image
                                            // For PDFs (brochures): always use item.image from data
                                            item.type === "video" && item.videoUrl
                                                ? getVideoThumbnailUrl(item.videoUrl) || item.image
                                                : item.image
                                        }
                                        alt={`${item.title} real estate marketing project by The Bliss Solution`}
                                        loading="lazy"
                                    />
                                    {item.type === "video" && (
                                        <button
                                            type="button"
                                            className="VideoPlayButton"
                                            onClick={() => openVideo(item)}
                                            aria-label={`Play ${item.title} video`}
                                        >
                                            <span></span>
                                        </button>
                                    )}
                                    {item.type === "pdf" && (
                                        <button
                                            type="button"
                                            className="VideoPlayButton PdfViewButton"
                                            onClick={() => openPdf(item)}
                                            aria-label={`View ${item.title} PDF`}
                                        >
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '20px', height: '20px' }}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                </svg>
                                            </span>
                                        </button>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            {videoModal}
            {pdfModal}
        </>
    );
};

export default OurWorkGrid;