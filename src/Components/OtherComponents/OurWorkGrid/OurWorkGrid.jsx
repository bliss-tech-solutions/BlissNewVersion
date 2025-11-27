import React from "react";
import "./OurWorkGrid.css";
import HomePageSomeOfWorkData from "../../HomePageComponents/HomePageSomeOfWork/HomePageSomeOfWorkData";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
const OurWorkGrid = () => {
    return (
        <div id="our-work-grid">
            <div className="Container SectionLargeTopPadding">
                <CenteredHeader
                    heading="Some of Our Work"
                    description="We have worked with some of the best real estate brands in Gujarat. We have helped them to launch their projects and to sell out their inventory."
                />
                <div className="OurWorkGridContainer MarginTop60">
                    {HomePageSomeOfWorkData.map((item, index) => (
                        <div className="OurWorkGridItem" key={index}>
                         
                            <div className="OurWorkGridItemImage">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurWorkGrid;