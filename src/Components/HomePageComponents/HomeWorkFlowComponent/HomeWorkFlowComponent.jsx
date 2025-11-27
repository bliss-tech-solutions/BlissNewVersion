import React, { useState } from "react";
import "./HomeWorkFlowComponent.css";
import FlexBetweenHeader from "../../CommonUsedComponents/FlexBetweenHeader/FlexBetweenHeader";
import { motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" }
    }
};

const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const HomeWorkFlowComponent = () => {
    const [activeTab, setActiveTab] = useState(0);

    const categories = [
        {
            name: "Our Work Approach",
            content: {
                title: "Strategic Foundation",
                description: "We begin with an exhaustive analysis of local buyer psychology and competitive positioning. Every insight is backed by data, ensuring your marketing strategy is built on a solid foundation designed for success in the Gujarat real estate market.",
            }
        },
        {
            name: "Brand Architecture",
            content: {
                title: "Crafting Your Identity",
                description: "We design the core narrative, visual identity, and messaging that defines your brand. Our approach ensures instant trust and premium valuation, positioning your properties as the natural choice for discerning buyers across Gujarat.",
            }
        },
        {
            name: "Conversion Platform Deployment",
            content: {
                title: "Digital Infrastructure That Converts",
                description: "Building bespoke web solutions, landing pages, and CRM automation tailored to your needs. Every element is designed for seamless lead capture and qualification, turning visitors into qualified prospects ready to engage.",
            }
        },
        {
            name: "Sales Pipeline Activation",
            content: {
                title: "Performance Marketing Excellence",
                description: "Full funnel performance marketing across Search, Social, and Programmatic channels. Each campaign is meticulously optimized to turn digital interest into high quality site visits, driving serious buyers to your properties rapidly.",
            }
        },
        {
            name: "Future-Proofing & Expansion",
            content: {
                title: "Sustained Growth Strategy",
                description: "Data driven consultation and strategy to transition smoothly to your next project. We ensure sustained brand equity and market growth, building a foundation that continues to deliver results long after launch.",
            }
        },
    ];

    return (
        <motion.div
            id="home-work-flow-component"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div className="Container SectionLargeTopPadding" variants={sectionVariants}>
                <motion.div variants={itemVariants}>
                    <FlexBetweenHeader
                        tagText="Our WorkFlow"
                        heading="How We Transform Properties Into Market Leaders"
                        description="Our proven workflow combines strategic insight, creative excellence, and performance marketing to deliver results that matter. From foundation to expansion, every step is designed to maximize your market impact."
                        buttonLabel="Start your project"
                        onButtonClick={() => { }}
                    />
                </motion.div>
                <motion.div className="HomeWorkFlowComponentContainer MarginTop30" variants={staggerVariants}>
                    <motion.div className="WorkFlowGrid" variants={staggerVariants}>
                        <motion.div className="CategoryButtons" variants={staggerVariants}>
                            {categories.map((category, index) => (
                                <motion.button
                                    key={index}
                                    className={`CategoryButton ${activeTab === index ? 'active' : ''}`}
                                    onClick={() => setActiveTab(index)}
                                    variants={itemVariants}
                                >
                                    {category.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </motion.button>
                            ))}
                        </motion.div>
                        <motion.div className="ContentArea" variants={itemVariants}>
                            <motion.div className="ContentCard" variants={itemVariants}>
                                <div className="StatusIndicator">
                                    <div className="StatusDot"></div>
                                </div>

                                <h2>{categories[activeTab].content.title}</h2>
                                <p className="ContentDescription">{categories[activeTab].content.description}</p>
                                <div className="TagsContainer">
                                    <span className="Tag">Real Estate Marketing</span>
                                    <span className="Tag">Brand Strategy</span>
                                    <span className="Tag">Performance Marketing</span>
                                </div>
                                <div className="processImageContainer">
                                    <img src="/Images/BackgroundImages/OurApporchImageDummy.jpeg" alt="" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default HomeWorkFlowComponent;