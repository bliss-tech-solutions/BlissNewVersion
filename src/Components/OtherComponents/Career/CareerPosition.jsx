import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CareerPosition.css";
import { getPositionData } from "./CareerPositionData";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import InteractiveButton from "../../CommonUsedComponents/InteractiveButton/InteractiveButton";
import RevealImage from "../../CommonUsedComponents/RevealImage/RevealImage";
const CareerPosition = () => {
    const { positionName } = useParams();
    const navigate = useNavigate();

    // Convert URL-friendly name back to original format and try multiple variations
    const formatPositionName = (urlName) => {
        return urlName
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // Try different case variations to find the position
    const getPositionDataWithVariations = (urlName) => {
        const formatted = formatPositionName(urlName);
        const variations = [
            formatted,
            formatted.toLowerCase(),
            formatted.toUpperCase(),
            formatted.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' '),
            formatted.split(' ').map((w, i) => i === 0 ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase() : w).join(' ')
        ];
        
        for (const variation of variations) {
            const data = getPositionData(variation);
            if (data) return data;
        }
        
        // Try with "And" capitalized
        const withAnd = formatted.replace(/\s+and\s+/gi, ' And ');
        return getPositionData(withAnd) || null;
    };

    const positionData = getPositionDataWithVariations(positionName);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Redirect to career page if position not found
        if (!positionData) {
            navigate('/career');
        }
    }, [positionData, navigate]);

    if (!positionData) {
        return null;
    }

    const handleApplyClick = () => {
        // TODO: Implement application form or redirect to application page
        console.log('Apply for:', positionData.title);
    };

    return (
        <div id="career-position">
            <div className="Container SectionLargeTopPadding">
                {/* Main Content: Image Left, Details Right */}
                <div className="CareerPositionMainLayout">
                    {/* Left Side: Image */}
                    <div className="CareerPositionImageContainer">
                        <RevealImage         
                            src={positionData.image || "/Images/CareerImages/Developer.jpg"} 
                            alt={`${positionData.title} career opportunity at The Bliss Solution real estate branding agency`}
                            loading="eager"
                        />
                    </div>

                    {/* Right Side: Position Details */}
                    <div className="CareerPositionDetailsContainer">
                        <div className="PositionTitleSmall">{positionData.department}</div>
                        <h1 className="PositionTitleLarge">{positionData.title.toUpperCase()}</h1>
                        <p className="PositionDescription">{positionData.description}</p>

                        {/* Contact Information */}
                        <div className="PositionContactInfo">
                            <div className="ContactInfoItem">
                                <div className="ContactLabel">ADDRESS</div>
                                <div className="ContactValue">{positionData.address}</div>
                            </div>
                            <div className="ContactInfoItem">
                                <div className="ContactLabel">EMAIL</div>
                                <div className="ContactValue">{positionData.email}</div>
                            </div>
                            <div className="ContactInfoItem">
                                <div className="ContactLabel">CONTACT</div>
                                <div className="ContactValue">{positionData.contact}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Experience Profile */}
                <div className="ExperienceProfileSection MarginTop60">
                    <h2 className="ExperienceProfileTitle">EXPERIENCE PROFILE</h2>
                    <p className="ExperienceProfileText">{positionData.experienceProfile}</p>
                </div>

                {/* Additional Details Section */}
                <div className="PositionAdditionalDetails MarginTop60">
                    {/* Responsibilities */}
                    <div className="PositionSection">
                        <h3>Key Responsibilities</h3>
                        <ul className="PositionList">
                            {positionData.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Requirements */}
                    <div className="PositionSection">
                        <h3>Requirements</h3>
                        <ul className="PositionList">
                            {positionData.requirements.map((requirement, index) => (
                                <li key={index}>{requirement}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Skills */}
                    <div className="PositionSection">
                        <h3>Required Skills</h3>
                        <div className="SkillsContainer">
                            {positionData.skills.map((skill, index) => (
                                <span key={index} className="SkillTag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Apply Button */}
                    <div className="ApplyButtonContainer MarginTop60">
                        <InteractiveButton
                            buttonText="Apply for this Position"
                            arrowText="Ready to join our team?"
                            onClick={handleApplyClick}
                        />
                    </div>

                    {/* Back Button */}
                    <div className="BackButtonContainer MarginTop30">
                        <button
                            className="BackButton"
                            onClick={() => navigate('/career')}
                        >
                            ← Back to Careers
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerPosition;
