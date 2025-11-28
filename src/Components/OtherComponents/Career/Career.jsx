import React from "react";
import "./Career.css";
import { useNavigate } from "react-router-dom";
import RevealImage from "../../CommonUsedComponents/RevealImage/RevealImage";
const Career = () => {
    const navigate = useNavigate();

    const handlePositionClick = (positionName) => {
        // Convert position name to URL-friendly format
        const urlFriendlyName = positionName.toLowerCase().replace(/\s+/g, '-');
        navigate(`/career/${urlFriendlyName}`);
    };

    const CareerPositionsNames = [

        {
            name: "Software and website developer",
            img: "/Images/CareerImages/Developer.jpg",
        },
        {
            name: "Graphics Designer",
            img: "/Images/CareerImages/GraphicsDesigner.jpg",
        },
        {
            name: "Content Writer",
            img: "/Images/CareerImages/ContentWriter.jpg",
        },
        {
            name: "Social Media Manager",
            img: "/Images/CareerImages/SocialMediaMarketing.jpg",
        },
        {
            name: "Video Editor",
            img: "/Images/CareerImages/VideoEditor.jpg",
        },
    ]


    const WeHirePositionCards = [

        {
            name: "Graphics Designer",
        },
        {
            name: "Content Writer",
        },
        {
            name: "Social Media Manager",
        },
        {
            name: "Video Editor",
        },
        {
            name: "Software and website developer",
        },
    ]
    return (
        <div id="career">
            <div className="Container SectionLargeTopPadding">
                <div className="CareerHeaderContainerGridSystem">
                    <div>
                        <div>
                            <p>fearless minds build</p>
                        </div>
                        <div className="BigHeadingInCareer">
                            ideas reshape the world
                        </div>
                    </div>
                    <div className="CareerHeadertagContainer">
                        <div>
                            The Bliss Opportunities
                        </div>
                    </div>
                </div>
                <div className="CareerPositionsContainer MarginTop60">
                    {CareerPositionsNames.map((position, index) => (
                        <div key={index} className="CareerPositionCard">
                            <RevealImage
                                src={position.img}
                                alt={`${position.name} career opportunity at The Bliss Solution real estate branding agency in Gujarat`}
                                loading="lazy"
                            />
                            {/* <h4>{position.name}</h4> */}
                        </div>
                    ))}
                </div>
                <div className="WeHirePositionCards MarginTop60">
                    {WeHirePositionCards.map((position, index) => (
                        <div
                            key={index}
                            className="WeHirePositionCard"
                            onClick={() => handlePositionClick(position.name)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handlePositionClick(position.name);
                                }
                            }}
                        >
                            {position.name}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Career;