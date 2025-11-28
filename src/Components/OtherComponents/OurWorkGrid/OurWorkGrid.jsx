import React, { useMemo, useState } from "react";
import "./OurWorkGrid.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import OurWorkGridData from "./OurWorkGridData";
const OurWorkGrid = () => {
    const [activeCategory, setActiveCategory] = useState(OurWorkGridData[0]?.category || "");

    const categories = useMemo(() => OurWorkGridData.map((item) => item.category), []);

    const worksToRender = useMemo(() => {
        const active = OurWorkGridData.find((item) => item.category === activeCategory);
        return active?.works ?? [];
    }, [activeCategory]);

    return (
        <div id="our-work-grid">
            <div className="Container SectionLargeTopPadding">
                <CenteredHeader
                    heading="Some of Our Work"
                    description="We have worked with some of the best real estate brands in Gujarat. We have helped them to launch their projects and to sell out their inventory."
                />
                <div className="OurWorkTabs">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`OurWorkTab ${activeCategory === category ? "is-active" : ""}`}
                            onClick={() => setActiveCategory(category)}
                            aria-pressed={activeCategory === category}
                        >
                            <span>{category}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    ))}
                </div>
                <div className="OurWorkGridContainer MarginTop60">
                    {worksToRender.map((item, index) => (
                        <article className="OurWorkGridItem" key={`${item.title}-${index}`}>
                            <div className="WorkCardHeader">
                                <span className="WorkCategoryPill">{activeCategory}</span>
                                {item.year && <span className="WorkYearPill">{item.year}</span>}
                            </div>
                            <div className="WorkContent">
                                <h4>{item.title}</h4>
                                {item.description && <p>{item.description}</p>}
                            </div>
                            <div className="OurWorkGridItemImage">
                                <img
                                    src={item.image}
                                    alt={`${item.title} real estate marketing project portfolio by The Bliss Solution branding agency`}
                                    loading="lazy"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurWorkGrid;