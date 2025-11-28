import React, { useState, useEffect, useRef } from "react";
import "./WhyRealStateBranding.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import WhyRealStateBrandingData from "./WhyRealStateBrandingData";
import RevealImage from "../../CommonUsedComponents/RevealImage/RevealImage";
const WhyRealStateBranding = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [pdfSrc, setPdfSrc] = useState("");
    const [isPdfLoading, setIsPdfLoading] = useState(false);
    const [pdfError, setPdfError] = useState("");
    const pdfObjectUrlRef = useRef(null);

    const handleCardClick = (pdfPath) => {
        if (!pdfPath) return;
        setSelectedPdf(pdfPath);
    };

    const closePdfModal = () => {
        setSelectedPdf(null);
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

    useEffect(() => {
        if (!selectedPdf) {
            if (pdfObjectUrlRef.current) {
                URL.revokeObjectURL(pdfObjectUrlRef.current);
                pdfObjectUrlRef.current = null;
            }
            setPdfSrc("");
            setPdfError("");
            setIsPdfLoading(false);
            return;
        }

        const controller = new AbortController();

        const loadPdf = async () => {
            try {
                setIsPdfLoading(true);
                setPdfError("");
                const pdfUrl = getPdfUrl(selectedPdf);
                const response = await fetch(pdfUrl, { signal: controller.signal });

                if (!response.ok) {
                    throw new Error(`Failed to load PDF (${response.status})`);
                }

                const blob = await response.blob();

                if (pdfObjectUrlRef.current) {
                    URL.revokeObjectURL(pdfObjectUrlRef.current);
                }

                const objectUrl = URL.createObjectURL(blob);
                pdfObjectUrlRef.current = objectUrl;
                setPdfSrc(objectUrl);
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("PDF load error:", error);
                    setPdfError("Unable to preview this PDF. Please use the download option instead.");
                    setPdfSrc("");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsPdfLoading(false);
                }
            }
        };

        loadPdf();

        return () => {
            controller.abort();
            if (pdfObjectUrlRef.current) {
                URL.revokeObjectURL(pdfObjectUrlRef.current);
                pdfObjectUrlRef.current = null;
            }
        };
    }, [selectedPdf]);

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