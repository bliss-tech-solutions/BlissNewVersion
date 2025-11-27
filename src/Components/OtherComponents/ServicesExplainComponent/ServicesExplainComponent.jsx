import React from "react";
import "./ServicesExplainComponent.css";
import FlexBetweenHeader from "../../CommonUsedComponents/FlexBetweenHeader/FlexBetweenHeader";
import ServicesData from "./ServicesData";
const ServicesExplainComponent = () => {
    return (
        <div id="services-explain-component">
            <div className="Container SectionLargeTopPadding">
                <FlexBetweenHeader
                    tagText="Branding Solutions"
                    heading="Branding Solutions We Offer"
                    description="Elevate Your Brand with Intuitive and Engaging User-Centered Design Solutions"
                    buttonLabel="Reach Out"
                    onButtonClick={() => { window.location.href = "mailto:info@blisssolutions.com"; }}
                />
                <div className="ServicesWithDetailsContainer MarginTop60">
                    <div className="ServicesGridContainer">
                        {ServicesData.map((service, index) => (
                            <div key={index} className="ServicesGridItem">
                                <h4>{service.title}</h4>
                                <p className="SmallParagraph">{service.description}</p>
                                <div className="ServicesTagsContainer">
                                    {service.servicesTags.map((tag, index) => (
                                        <div key={index} className="ServicesTagItem">
                                           <div>{index + 1}</div> {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesExplainComponent;