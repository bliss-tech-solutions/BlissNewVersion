import React, { useEffect } from 'react';
import './LightRaysPage.css';
import LightRays from '../../CommonUsedComponents/LightRays/LightRays';
import CenteredHeader from '../../CommonUsedComponents/CenteredHeader/CenteredHeader';
import ScrollReveal from '../../CommonUsedComponents/ScrollReveal/ScrollReveal';

const LightRaysPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="LightRaysPage">
            <div className="LightRaysPageHero">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#E6B035"
                    raysSpeed={1.5}
                    lightSpread={1.2}
                    rayLength={2.5}
                    pulsating={true}
                    fadeDistance={1.0}
                    saturation={1.0}
                    followMouse={true}
                    mouseInfluence={0.15}
                    noiseAmount={0.0}
                    distortion={0.1}
                />
                <div className="LightRaysPageContent">
                    <div className="Container">
                        <CenteredHeader
                            tagText="Light Rays Experience"
                            heading="Illuminating Digital Experiences"
                            description="Experience the power of dynamic light effects that bring your content to life with stunning visual depth and interactivity."
                        />
                        <div className="LightRaysTextContent MarginTop60">
                            <ScrollReveal
                                baseOpacity={0.2}
                                enableBlur={true}
                                baseRotation={2}
                                blurStrength={4}
                                containerClassName="LightRaysTextReveal"
                                textClassName="LightRaysText"
                                as="div"
                            >
                                Welcome to a world where light and motion converge to create extraordinary digital experiences. Our LightRays component transforms static content into dynamic, interactive visual narratives that captivate and engage your audience.
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LightRaysPage;

