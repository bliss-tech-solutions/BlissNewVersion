import React from "react";
import "./CenteredHeader.css";
import { motion } from "framer-motion";

const DefaultSparkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
);

// Animation variants
const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.15,
        },
    },
};

const tagVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const headingVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const descriptionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const CenteredHeader = ({
    tagText = "our work",
    tagIcon,
    heading = "Featured Design + AI Project portfolio",
    description = "We team up with startups, SaaS companies, and digital brands to create design-driven solutions that look great — and perform even better.",
    id,
    className,
    textAlign = "center", // 'center' | 'start'
}) => {
    const rootId = id || "centered-header";
    const RootIcon = tagIcon || DefaultSparkIcon;
    const normalizedAlign = textAlign === "start" ? "start" : "center";
    const alignmentClass =
        normalizedAlign === "start"
            ? "CenteredHeaderContent--alignStart"
            : "CenteredHeaderContent--alignCenter";

    return (
        <div id={rootId} className={className}>
            <div className="CenteredHeaderContainer">
                <div className="Container">
                    <motion.div
                        className={`CenteredHeaderContent ${alignmentClass}`}
                        variants={containerVariant}
                        initial="hidden"
                        animate="visible"
                    >
                        {tagText && (
                            <motion.div
                                className="tagParagraphVersion2"
                                variants={tagVariant}
                            >
                                <RootIcon />
                                {tagText}
                            </motion.div>
                        )}
                        {heading && (
                            <motion.h2 variants={headingVariant}>
                                {heading}
                            </motion.h2>
                        )}
                        {description && (
                            <motion.div
                                className="CenteredDescription"
                                variants={descriptionVariant}
                            >
                                <p>{description}</p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CenteredHeader;

