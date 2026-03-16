import React, { useMemo, useState } from "react";
import "./AllClientsByCategories.css";
import FlexBetweenHeader from "../../CommonUsedComponents/FlexBetweenHeader/FlexBetweenHeader";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import AllClientsByCategoriesData, { allClientLogos, clientCategories } from "./AllClientsByCategoriesData";

const AllClientsByCategories = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = clientCategories;

    const clientsToRender = useMemo(() => {
        if (activeCategory === "All") {
            return allClientLogos;
        }

        // Other categories should not show logos for now
        return [];
    }, [activeCategory]);

    return (
        <div id="all-clients-by-categories">
            <div className="Container SectionLargeTopPadding">
                <CenteredHeader
                    heading="Clients by Industry"
                    description="Discover the diverse industries we work with. Select a category to explore the brands that partner with us for growth, visibility, and successful launches."
                />

                <div className="ClientCategoriesTabs">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            className={`ClientCategoriesTab ${activeCategory === category ? "is-active" : ""}`}
                            onClick={() => setActiveCategory(category)}
                            aria-pressed={activeCategory === category}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {activeCategory !== "All" && (
                    <div className="ClientComingSoon">
                        <p>Coming soon</p>
                    </div>
                )}

                <div className="ClientLogosGrid">
                    {clientsToRender.map((client, index) => (
                        <div
                            key={`${client.name}-${index}`}
                            className="ClientLogoCard"
                            data-category={client.category}
                        >
                            <div className="ClientLogoCardInner">
                                {client.logo && (
                                    <img
                                        src={client.logo}
                                        alt={`${client.name} real estate developer client logo trusted partner of The Bliss Solution branding agency`}
                                        loading="lazy"
                                        onError={(e) => {
                                            // Hide image if logo not found
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                )}
                            </div>
                            <span>{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllClientsByCategories;