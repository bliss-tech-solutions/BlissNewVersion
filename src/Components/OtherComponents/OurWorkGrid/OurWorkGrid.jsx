import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import "./OurWorkGrid.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import OurWorkGridData from "./OurWorkGridData";
const OurWorkGrid = () => {
    const [activeCategory, setActiveCategory] = useState(OurWorkGridData[0]?.category || "");
    const [activeVideo, setActiveVideo] = useState(null);

    const categories = useMemo(() => OurWorkGridData.map((item) => item.category), []);

    const worksToRender = useMemo(() => {
        const active = OurWorkGridData.find((item) => item.category === activeCategory);
        return active?.works ?? [];
    }, [activeCategory]);

    useEffect(() => {
        if (activeVideo) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.removeProperty("overflow");
        };
    }, [activeVideo]);

    const openVideo = (work) => {
        setActiveVideo(work);
    };

    const closeVideo = () => {
        setActiveVideo(null);
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
                                <div className="WorkCardHeader">
                                    <span className="WorkCategoryPill">{activeCategory}</span>
                                    {item.year && <span className="WorkYearPill">{item.year}</span>}
                                </div>
                                <div className="WorkContent">
                                    <h4>{item.title}</h4>
                                    {item.description && <p>{item.description}</p>}
                                </div>
                                <div className="OurWorkGridItemImage">
                                    <img
                                        src={
                                            item.videoUrl
                                                ? getVideoThumbnailUrl(item.videoUrl) || item.image
                                                : item.image
                                        }
                                        alt={`${item.title} real estate marketing project by The Bliss Solution`}
                                        loading="lazy"
                                    />
                                    {item.videoUrl && (
                                        <button
                                            type="button"
                                            className="VideoPlayButton"
                                            onClick={() => openVideo(item)}
                                            aria-label={`Play ${item.title} video`}
                                        >
                                            <span></span>
                                        </button>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            {videoModal}
        </>
    );
};

export default OurWorkGrid;