import React, { useState, useEffect } from "react";
import "./WhyRealStateBranding.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import WhyRealStateBrandingData from "./WhyRealStateBrandingData";
import RevealImage from "../../CommonUsedComponents/RevealImage/RevealImage";
const WhyRealStateBranding = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);

    const handleCardClick = (pdfPath) => {
        if (!pdfPath) return;
        setSelectedPdf(pdfPath);
    };

    const closePdfModal = () => {
        setSelectedPdf(null);
    };

    const getPdfUrl = (pdfPath) => {
        // If it's a local path, return it directly
        if (pdfPath.startsWith('/')) {
            return pdfPath;
        }
        // If it's a full URL, return it
        return pdfPath;
    };

    // Handle ESC key to close modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && selectedPdf) {
                setSelectedPdf(null);
            }
        };

        if (selectedPdf) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [selectedPdf]);

    return (
        <div id="why-real-state-branding">
            <div className="Container PaddingBottomSection">
                <div className="WhyRealStateBrandingGridSystemContainer SectionLargeTopPadding">
                    <div className="WhyRealStateBrandingGridSystemContainerLeftSide">
                        <CenteredHeader
                            textAlign="start"
                            heading="Why Branding Matters in Real Estate"
                            tagText=""
                            description="In a saturated market, a strong brand is the difference between interest and investment. Buyers don't just purchase properties—they buy into a vision, a lifestyle, a promise. We shape real estate brands that exude credibility, create emotional connections, and leave lasting impressions, ensuring your project rises above the noise and commands attention."
                        />
                    </div>
                    <div className="WhyRealStateBrandingGridSystemContainerRightSide">
                        {WhyRealStateBrandingData.map((item, index) => (
                            <div
                                key={index}
                                className="WhyRealStateBrandingCard"
                                onClick={() => handleCardClick(item.pdfDocument)}
                            >
                                <div>
                                    <div className="taglineStyle">
                                        {item.tagline}
                                    </div>
                                    <h4 style={{ textTransform: "uppercase" }}>{item.title}</h4>
                                </div>
                                <div className="WhyRealStateBrandingGridSystemContainerRightSideImage">
                                    <RevealImage        
                                        src={item.img} 
                                        alt={`${item.title} real estate branding case study and portfolio showcase by The Bliss Solution agency `} 
                                        loading="lazy"
                                    />
                                </div>
                                <div className="descriptionStyle">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* PDF Modal Viewer */}
            {selectedPdf && (
                <div className="PdfModalOverlay" onClick={closePdfModal}>
                    <div className="PdfModalContent" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={getPdfUrl(selectedPdf)}
                            className="PdfModalIframe"
                            id={`pdf_iframe_${selectedPdf.replace(/\//g, '_')}`}
                            allow="autoplay; fullscreen"
                            scrolling="auto"
                            title="PDF Viewer"
                        />
                        <button
                            className="PdfModalClose"
                            onClick={closePdfModal}
                            title="Close"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default WhyRealStateBranding;