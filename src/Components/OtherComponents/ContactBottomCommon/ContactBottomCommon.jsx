import React from "react";
import "./ContactBottomCommon.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import InteractiveButton from "../../CommonUsedComponents/InteractiveButton/InteractiveButton";

const ContactBottomCommon = () => {
    return (
        <div id="contact-bottom-common">
            <div className="Container SectionLargeTopPadding PaddingBottomSection">
                <CenteredHeader
                    tagText="We have  AI + Product Agencies"
                    textAlign="center"
                    heading="Get started for free"
                    description="From idea to investment, MVP to market — we adapt to your goals and build around what your product truly needs."
                />
                <div className="ContactBottomCommonGridSystem MarginTop60">
                    <div>
                        <InteractiveButton
                            buttonText="Get Started"
                            arrowText=""
                        />
                    </div>
                    <div>
                        <InteractiveButton
                        arrowImage="/Images/Icons/ButtonArrowImage2.svg"
                            buttonText="Get Started"
                            arrowText="Get Started"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBottomCommon