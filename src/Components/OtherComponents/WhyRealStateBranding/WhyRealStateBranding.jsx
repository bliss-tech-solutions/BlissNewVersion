import React from "react";
import "./WhyRealStateBranding.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import WhyRealStateBrandingData from "./WhyRealStateBrandingData";
const WhyRealStateBranding = () => {
    return (
        <div id="why-real-state-branding">
            <div className="Container">
                <div className="WhyRealStateBrandingGridSystemContainer SectionLargeTopPadding">
                    <div className="WhyRealStateBrandingGridSystemContainerLeftSide">
                        <CenteredHeader
                            heading="Why Branding Matters in Real Estate"
                            tagText=""
                            description="In a saturated market, a strong brand is the difference between interest and investment. Buyers don’t just purchase properties—they buy into a vision, a lifestyle, a promise. We shape real estate brands that exude credibility, create emotional connections, and leave lasting impressions, ensuring your project rises above the noise and commands attention."
                        />
                    </div>
                    <div className="WhyRealStateBrandingGridSystemContainerRightSide">
                        {WhyRealStateBrandingData.map((item, index) => (
                            <div key={index}>
                                <div>
                                    <div>
                                        {item.tagline}
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                                <div>
                                    {/* <img src={item.img} alt={item.title} /> */}
                                </div>
                                <div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyRealStateBranding;