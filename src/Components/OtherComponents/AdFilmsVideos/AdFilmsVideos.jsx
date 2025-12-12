import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./AdFilmsVideos.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import AdFilmsVideosData from "./AdFilmsVideosData";

const AdFilmsVideos = () => {
    const [activeVideo, setActiveVideo] = useState(null);

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

    const openVideo = () => {
        setActiveVideo(AdFilmsVideosData);
    };

    const closeVideo = () => {
        setActiveVideo(null);
    };

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

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && activeVideo) {
                setActiveVideo(null);
            }
        };

        if (activeVideo) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [activeVideo]);

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
            <div id="AdFilmsVideos">
                <div className="Container SectionLargeTopPadding">
                    <CenteredHeader
                        tagText="Ad Films Videos"
                        heading="Ad Films Videos"
                        description=""
                    />
                    
                    <div className="AdFilmsVideoContainer MarginTop60">
                        <div className="AdFilmsVideoCard">
                            <div className="AdFilmsVideoImage">
                                <img
                                    src={getVideoThumbnailUrl(AdFilmsVideosData.videoUrl)}
                                    alt={AdFilmsVideosData.title || "Ad Films Videos"}
                                    loading="lazy"
                                />
                                <button
                                    type="button"
                                    className="VideoPlayButton"
                                    onClick={openVideo}
                                    aria-label={`Play ${AdFilmsVideosData.title} video`}
                                >
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {videoModal}
        </>
    )
}

export default AdFilmsVideos;