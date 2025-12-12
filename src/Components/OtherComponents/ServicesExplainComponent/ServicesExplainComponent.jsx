import React from "react";
import { motion } from "framer-motion";
import "./ServicesExplainComponent.css";
import FlexBetweenHeader from "../../CommonUsedComponents/FlexBetweenHeader/FlexBetweenHeader";
import ServicesData from "./ServicesData";

const ServicesExplainComponent = () => {
    // Animation variants for container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Delay between each card
                delayChildren: 0.1, // Initial delay before first card
            },
        },
    };

    // Animation variants for individual cards
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30, // Start slightly below
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1], // Smooth easing
            },
        },
    };

    return (
        <div id="services-explain-component">
            <div className="Container SectionLargeTopPadding PaddingBottomSection">
            <FlexBetweenHeader
    tagText="Branding Solutions"
    heading="Branding Solutions We Offer"
    description="Build a strong, memorable brand with clear, user-focused design that connects with your audience and drives results."
    buttonLabel="Reach Out"
    onButtonClick={() => { window.location.href = "mailto:info@blisssolutions.com"; }}
/>

                <div className="ServicesWithDetailsContainer MarginTop60">
                    <motion.div
                        className="ServicesGridContainer"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {ServicesData.map((service, index) => (
                            <motion.div
                                key={index}
                                className="ServicesGridItem"
                                variants={cardVariants}
                            >
                                <div className="ServicesGridItemIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h5>{service.title}</h5>
                                <p className="SmallParagraph">{service.description}</p>
                                {/* <div className="ServicesTagsContainer">
                                    {service.servicesTags.map((tag, index) => (
                                        <div key={index} className="ServicesTagItem">
                                           <div>{index + 1}</div> {tag}
                                        </div>
                                    ))}
                                </div> */}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServicesExplainComponent;