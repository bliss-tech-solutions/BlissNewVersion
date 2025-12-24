import { useEffect, useRef, useState } from "react";
import "./Influence.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import { Image } from "antd";
import FlexBetweenHeader from "../../CommonUsedComponents/FlexBetweenHeader/FlexBetweenHeader";

const loadedSrcs = new Set();

const LazyAntdImage = ({ src, alt, eager = false }) => {
    const ref = useRef(null);
    const [shouldLoad, setShouldLoad] = useState(eager || loadedSrcs.has(src));

    useEffect(() => {
        if (eager) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [eager]);

    return (
        <div ref={ref} className="w-100 h-100">
            <Image
                src={shouldLoad ? src : undefined}
                alt={alt}
                placeholder={shouldLoad ? undefined : <div className="InfluencePlaceholder" />}
                decoding="async"
                onLoad={() => loadedSrcs.add(src)}
            />
        </div>
    );
};

const Influence = () => {
    const graphics = [
        "COMBO1.jpg",
        "NOV COMBO.jpg",
        "SIBAN-COMBO-6.jpg",
        "3-COMBO-AUGUST.jpg",
        "5-combo-may-NEW.jpg",
        "7-COMBO-JULY.jpg",
        "Harmony Holidays_august.jpg",
        "July combo_royal relexa.jpg",
        "Sangath_july combo.jpg",
        "august-combo.jpg",
        "combo.jpg",
        "combo_shivalay infra.jpg",
        "excel-life-7-combo.jpg",
        "excel-life-sep--4-combo.jpg",
        "july combo.jpg",
        "the-palace-july-25.jpg",
        "zade-combo-april-2025.jpg",
    ];

    return (
        <div id="Influence">

            <div className="Container  PaddingBottomSection">

                <div className="SectionLargeTopPadding">
                    <FlexBetweenHeader
                        heading="Why Influence Matters in Real Estate"
                        tagText="Influence"
                        description=""
                    />
                    <p>In an industry where trust drives transactions, the right influence can elevate brands, amplify reach, and accelerate sales. Buyers don’t just invest in properties — they invest in the stories, aspirations, and credibility behind them. Our influence strategies make sure the right people talk, engage, and advocate — turning your project into the next big thing.</p>
                </div>
                <div className="InfluenceGraphicsGrid MarginTop60">
                    <Image.PreviewGroup>
                        {graphics.map((name, idx) => (
                            <div className="InfluenceGraphicItem" key={idx}>
                                <LazyAntdImage
                                    src={`/Images/InfluenceGraphicsImages/${name}`}
                                    alt="Campaign graphic"
                                    eager={idx < 6}
                                />
                            </div>
                        ))}
                    </Image.PreviewGroup>
                </div>
            </div>
        </div>
    )
}

export default Influence;
