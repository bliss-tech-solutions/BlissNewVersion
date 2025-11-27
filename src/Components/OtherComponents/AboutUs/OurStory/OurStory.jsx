import React, { useEffect } from "react";
import "./OurStory.css";
import CenteredHeader from "../../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import InteractiveButton from "../../../CommonUsedComponents/InteractiveButton/InteractiveButton";
import HomeWorkFlowComponent from "../../../HomePageComponents/HomeWorkFlowComponent/HomeWorkFlowComponent";
import { motion } from "framer-motion";
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
                                    <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca55235fd8bbc19dbef3e_about-hero-image1.webp" alt="" />
                                </div>
                                <div></div>
                                <div></div>
                                <div>
                                    <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca55235fd8bbc19dbef3e_about-hero-image1.webp" alt="" />
                                </div>
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <img src="/Images/TeamPhoto/AlokImage.jpg" alt="" />
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <div></div>
                                <div>
                                    <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca55235fd8bbc19dbef3e_about-hero-image1.webp" alt="" />
                                </div>
                                <div>
                                    <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca55235fd8bbc19dbef3e_about-hero-image1.webp" alt="" />
                                </div>
                                <div></div>
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca553ceece6ab5502d275_about-hero-image4.webp" alt="" />
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <div></div>
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca553f729022091570393_about-hero-image5.webp" alt="" />
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <div></div>
                            </motion.div>
                            <motion.div variants={gridItemVariant}>
                                <div></div>
                                <div>
                                    <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca55235fd8bbc19dbef3e_about-hero-image1.webp" alt="" />
                                </div>
                                <div>
                                    <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca55235fd8bbc19dbef3e_about-hero-image1.webp" alt="" />
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
            <HomeWorkFlowComponent />
        </>
    );
};

export default OurStory;