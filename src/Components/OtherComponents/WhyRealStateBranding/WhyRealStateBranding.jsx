import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import "./WhyRealStateBranding.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import WhyRealStateBrandingData from "./WhyRealStateBrandingData";
import RevealImage from "../../CommonUsedComponents/RevealImage/RevealImage";
const WhyRealStateBranding = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                                onClick={() => handleCardClick(item)}
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
                        {/* <div className="PdfModalHeaderImage">
                            <img
                                src={selectedItem.img}
                                alt={selectedItem.title}
                                loading="eager"
                            />
                        </div> */}
                        <div className="PdfModalHeaderContent">
                            {/* <p className="PdfModalTagline">{selectedItem.tagline}</p> */}
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
    )
}

export default WhyRealStateBranding;