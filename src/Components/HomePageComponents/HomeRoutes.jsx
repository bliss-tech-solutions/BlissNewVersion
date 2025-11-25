import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroComponent from "./HeroComponent/HeroComponent";
import AboutHomeComponent from "./AboutHomeComponent/AboutHomeComponent";
import FlexBetweenHeader from "../CommonUsedComponents/FlexBetweenHeader/FlexBetweenHeader";
import HomeWorkFlowComponent from "./HomeWorkFlowComponent/HomeWorkFlowComponent";
import HomeOurSolutions from "./HomeOurSolutions/HomeOurSolutions";
import AnimatedZoomContainer from "../CommonUsedComponents/AnimatedZoomContainer/AnimatedZoomContainer";
import HomeVelocityFrameworkCards from "./HomeVelocityFrameworkCards/HomeVelocityFrameworkCards";
import HomePageSomeOfWork from "./HomePageSomeOfWork/HomePageSomeOfWork";
import ROICalculator from "../ROICalculator/ROICalculator";
const HomeRoutes = () => {
    return (
        <>
            <HeroComponent />
            <AboutHomeComponent />
            {/* <HomeWorkFlowComponent /> */}
            {/* <AnimatedZoomContainer /> */}
            <HomeOurSolutions />
            <HomeVelocityFrameworkCards />
            <HomePageSomeOfWork />
            <ROICalculator />
        </>
    );
};

export default HomeRoutes;