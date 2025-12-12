import React from "react";
import "./HomeWorkFlowComponent.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import { motion } from "framer-motion";
import {
    FaChartLine,
    FaPalette,
    FaLaptopCode,
    FaRocket,
    FaChartBar
} from "react-icons/fa";

const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const HomeWorkFlowComponent = () => {
    const workflowCards = [
        {
            icon: FaChartLine,
            title: "Strategic Foundation",
            description: "We begin with an exhaustive analysis of local buyer psychology and competitive positioning. Every insight is backed by data, ensuring your marketing strategy is built on a solid foundation designed for success in the Gujarat real estate market.",
        },
        {
            icon: FaPalette,
            title: "Crafting Your Identity",
            description: "We design the core narrative, visual identity, and messaging that defines your brand. Our approach ensures instant trust and premium valuation, positioning your properties as the natural choice for discerning buyers across Gujarat.",
        },
        {
            icon: FaLaptopCode,
            title: "Digital Infrastructure That Converts",
            description: "Building bespoke web solutions, landing pages, and CRM automation tailored to your needs. Every element is designed for seamless lead capture and qualification, turning visitors into qualified prospects ready to engage.",
        },
        {
            icon: FaRocket,
            title: "Performance Marketing Excellence",
            description: "Full funnel performance marketing across Search, Social, and Programmatic channels. Each campaign is meticulously optimized to turn digital interest into high quality site visits, driving serious buyers to your properties rapidly.",
        },
        {
            icon: FaChartBar,
            title: "Sustained Growth Strategy",
            description: "Data driven consultation and strategy to transition smoothly to your next project. We ensure sustained brand equity and market growth, building a foundation that continues to deliver results long after launch.",
        },
    ];

    return (
        <motion.div
            id="home-work-flow-component"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="Container SectionLargeTopPadding PaddingBottomSection">
                <CenteredHeader
                    tagText="Our WorkFlow"
                    heading="How We Transform Properties Into Market Leaders"
                    description=""
                />
                <motion.div
                    className="WorkflowCardsGrid MarginTop60"
                    variants={staggerVariants}
                >
                    {workflowCards.map((card, index) => {
                        const IconComponent = card.icon;
                        return (
                            <motion.div
                                key={index}
                                className="WorkflowCard"
                                variants={itemVariants}
                            >
                                <div className="WorkflowCardIcon">
                                    <IconComponent />
                                </div>
                                <h3 className="WorkflowCardTitle">{card.title}</h3>
                                <p className="WorkflowCardDescription">{card.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HomeWorkFlowComponent;