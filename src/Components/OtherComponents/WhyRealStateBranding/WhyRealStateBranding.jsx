import React, { useState, useEffect, useMemo } from "react";
import { Modal } from "antd";
import "./WhyRealStateBranding.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import OurWorkGridData from "../OurWorkGrid/OurWorkGridData";
import RevealImage from "../../CommonUsedComponents/RevealImage/RevealImage";

const WhyRealStateBranding = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Get top 5 items from Brochures category
    const brochureData = useMemo(() => {
        const brochuresCategory = OurWorkGridData.find(
            (item) => item.category === "Brochures"
        );
        if (!brochuresCategory || !brochuresCategory.works) return [];

        // Map the data structure to match component expectations
        return brochuresCategory.works.slice(0, 3).map((item) => ({
            tagline: item.title,
            title: item.title,
            img: item.image,
            alt: item.alt || `${item.title} real estate branding case study and portfolio showcase by The Bliss Solution agency`,
            pdfDocument: item.pdfUrl,
            description: item.description ? (
                <p>{item.description}</p>
            ) : (
                <p>Premium real estate project brochure.</p>
            ),
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
        <div id="why-real-state-branding">
            <div className="Container PaddingBottomSection">
                <div className="WhyRealStateBrandingGridSystemContainer SectionLargeTopPadding">
                    <div className="WhyRealStateBrandingGridSystemContainerLeftSide">
                        <CenteredHeader
                            textAlign="start"
                            heading="Why Branding Matters in Real Estate"
                            tagText=""
                            description={<>Branding is the difference between being seen and being chosen. In a crowded real estate market, buyers don’t just select projects they choose the story, the lifestyle, and the trust behind them. A strong brand shapes perception, builds credibility, and turns curiosity into conviction. <br /> <br />We craft real estate brands that feel premium, trustworthy, and emotionally resonant. From brochures and ad campaigns to visual identity systems, our work ensures your project stands out, commands attention, and stays memorable long after the first impression.</>}
                        />
                    </div>
                    <div className="WhyRealStateBrandingGridSystemContainerRightSide">
                        {brochureData.map((item, index) => (
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
                                        alt={item.alt || `${item.title} real estate branding case study and portfolio showcase by The Bliss Solution agency`}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="descriptionStyle">
                                    {item.description}
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
                                alt={selectedItem.alt || `${selectedItem.title} real estate branding case study by The Bliss Solution`}
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