import React, { useMemo, useState } from "react";
import "./AllClientsByCategories.css";
import FlexBetweenHeader from "../../CommonUsedComponents/FlexBetweenHeader/FlexBetweenHeader";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import AllClientsByCategoriesData from "./AllClientsByCategoriesData";

const AllClientsByCategories = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = useMemo(() => {
        const categoryList = AllClientsByCategoriesData.map((item) => item.category);
        return ["All", ...categoryList];
    }, []);

    const clientsToRender = useMemo(() => {
        if (activeCategory === "All") {
            return AllClientsByCategoriesData.flatMap((item) =>
                item.clients.map((client) => ({
                    ...client,
                    category: item.category,
                }))
            );
        }

        const selectedCategory = AllClientsByCategoriesData.find(
            (item) => item.category === activeCategory
        );

        return (
            selectedCategory?.clients.map((client) => ({
                ...client,
                category: activeCategory,
            })) ?? []
        );
    }, [activeCategory]);

    return (
        <div id="all-clients-by-categories">
            <div className="Container SectionLargeTopPadding">
                <CenteredHeader
                    heading="All Clients by Categories"
                    description="Explore the industries we collaborate with. Tap a segment to filter the roster and see who's trusting us with their next launch."
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

                <div className="ClientLogosGrid">
                    {clientsToRender.map((client, index) => (
                        <div
                            key={`${client.name}-${index}`}
                            className="ClientLogoCard"
                            data-category={client.category}
                        >
                            <div className="ClientLogoCardInner">
                                <img src={client.logo} alt={client.name} loading="lazy" />
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