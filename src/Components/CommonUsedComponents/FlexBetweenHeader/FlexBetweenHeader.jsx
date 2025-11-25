import React from "react";
import "./FlexBetweenHeader.css";

const DefaultSparkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
);

const DefaultArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
);

const FlexBetweenHeader = ({
    tagText = "our work",
    tagIcon,
    heading = "Featured Design + AI Project portfolio",
    description = "We team up with startups, SaaS companies, and digital brands to create design-driven solutions that look great — and perform even better.",
    buttonLabel = "View portfolio",
    onButtonClick,
    buttonIcon,
    rightContent,
    id,
    className,
}) => {
    const rootId = id || "flex-between-header";
    const RootIcon = tagIcon || DefaultSparkIcon;
    const CtaIcon = buttonIcon || DefaultArrowIcon;

    return (
        <div id={rootId} className={className}>
            <div className="Container ">
                <div className="FlexHeaderGridContainer">
                    <div className="HeaderGridItem">
                        <div className="gapAdjustment">
                            {tagText && (
                                <div className="tagParagraphVersion2">
                                    <RootIcon />
                                    {tagText}
                                </div>
                            )}
                            {heading && <h2>{heading}</h2>}
                        </div>
                        {description && (
                            <div>
                                <p>{description}</p>
                                {buttonLabel && (
                                    <div className="buttonContainer MarginTop30">
                                        <button type="button" onClick={onButtonClick}>
                                            {buttonLabel}
                                            <CtaIcon />
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    <div>
                        {rightContent}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlexBetweenHeader;