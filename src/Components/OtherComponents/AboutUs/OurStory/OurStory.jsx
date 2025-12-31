import React, { useEffect } from "react";
import "./OurStory.css";
import CenteredHeader from "../../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import InteractiveButton from "../../../CommonUsedComponents/InteractiveButton/InteractiveButton";
import HomeWorkFlowComponent from "../../../HomePageComponents/HomeWorkFlowComponent/HomeWorkFlowComponent";
import { motion } from "framer-motion";
import RevealImage from "../../../CommonUsedComponents/RevealImage/RevealImage";
import AboutUsCounters from "../AboutUsCounters/AboutUsCounters";
const pageFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const gridVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
};

const gridItemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};
const OurStory = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <motion.div
                id='OurStory'
                className='OnlyMobileDevicesLargePaddingTop'
                initial="hidden"
                animate="visible"
                variants={pageFade}
            >
                <div className='backgroundOverlayImageSetAboutUs'>

                </div>
                <motion.div className="Container" variants={containerVariant} initial="hidden" animate="visible">
                    <motion.div className="AboutUsHeaderGridSystem" variants={gridVariant} initial="hidden" animate="visible">
                        <motion.div variants={gridItemVariant}>
                            <CenteredHeader
                                tagText="Our Story"
                                textAlign="start"
                                heading="We design identities that instantly command premium valuation and investor trust."
                                description="We design delightful experiences that make life simpler and more enjoyable."
                            />
                            <div className="MarginTop60">
                                <InteractiveButton
                                    arrowImage="/Images/Icons/ButtonArrowImage2.svg"
                                    buttonText="Dummy Button"
                                    arrowText="Dummy Arrow Text"
                                />
                            </div>
                        </motion.div>
                        <motion.div className='AboutUsRightSideGridSystem' variants={gridVariant}>
                            <motion.div variants={gridItemVariant}>
                                <div>
                                    <RevealImage
                                        src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WhatsApp Image 2025-12-12 at 13.59.46.jpeg"
                                        alt="Real estate branding team collaboration workspace at The Bliss Solution agency"
                                        loading="lazy"
                                    />
                                </div>
                                <div></div>
                                <div></div>
                                <div>
                                    <RevealImage
                                        src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WhatsApp Image 2025-12-12 at 13.59.46.jpeg"
                                        alt="Real estate branding team collaboration workspace at The Bliss Solution agency"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <RevealImage
                                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/OurStoryBoxImage2.jpeg"
                                    alt="Alok team member at The Bliss Solution real estate branding and marketing agency"
                                    loading="lazy"
                                />
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <div></div>
                                <div>
                                    <RevealImage
                                        src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WhatsApp Image 2025-12-12 at 13.59.46.jpeg"
                                        alt="Real estate branding team collaboration workspace at The Bliss Solution agency"
                                        loading="lazy"
                                    />
                                </div>
                                <div>
                                    <RevealImage
                                        src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WhatsApp Image 2025-12-12 at 13.59.46.jpeg"
                                        alt="Real estate branding team collaboration workspace at The Bliss Solution agency"
                                        loading="lazy"
                                    />
                                </div>
                                <div></div>
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <RevealImage
                                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/OurStoryBoxImage4.jpeg"
                                    alt="Creative design process for real estate branding projects at The Bliss Solution"
                                    loading="lazy"
                                />
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <div></div>
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <RevealImage
                                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/OurStoryBoxImage3.jpeg"
                                    alt="Real estate marketing strategy session and brand development workshop at The Bliss Solution"
                                    loading="lazy"
                                />
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <div></div>
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <div></div>
                                <div>
                                    <RevealImage
                                        src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WhatsApp Image 2025-12-12 at 13.59.46.jpeg"
                                        alt="Real estate branding team collaboration workspace at The Bliss Solution agency"
                                        loading="lazy"
                                    />
                                </div>
                                <div>
                                    <RevealImage
                                        src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/WhatsApp Image 2025-12-12 at 13.59.46.jpeg"
                                        alt="Real estate branding team collaboration workspace at The Bliss Solution agency"
                                        loading="lazy"
                                    />
                                </div>
                                <div></div>
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <div></div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <div className="GradientOverlay">

            </div>

            {/* <AboutUsCounters /> */}
            <HomeWorkFlowComponent />
        </>
    );
};

export default OurStory;