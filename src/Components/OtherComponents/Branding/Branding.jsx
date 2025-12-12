import React, { useEffect } from 'react'
import CenteredHeader from '../../CommonUsedComponents/CenteredHeader/CenteredHeader'
import InteractiveButton from '../../CommonUsedComponents/InteractiveButton/InteractiveButton'
import './Branding.css'
import WhyRealStateBranding from '../WhyRealStateBranding/WhyRealStateBranding'
import ServicesExplainComponent from '../ServicesExplainComponent/ServicesExplainComponent'
import AllClientsByCategories from '../AllClientsByCategories/AllClientsByCategories'
import RevealImage from '../../CommonUsedComponents/RevealImage/RevealImage'
import AdFilmsVideos from '../AdFilmsVideos/AdFilmsVideos'
import MainLineCreatives from '../MainLineCreatives/MainLineCreatives'
const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div id='About-us' className='OnlyMobileDevicesLargePaddingTop'>
                <div className='backgroundOverlayImageSetAboutUs'>

                </div>
                <div className="Container">
                    <div className="AboutUsHeaderGridSystem">
                        <div>
                            <CenteredHeader
                                textAlign="start"
                                tagText="Real Estate Branding"
                                heading="We build brand identities that instantly command premium perception and trust."
                                description="We design meaningful, intuitive experiences that make every interaction simpler and more delightful.."
                            />
                            <div className="MarginTop60">
                                <InteractiveButton
                                iconImage="/Images/Icons/ButtonSvgIcon.png"
                                    buttonText="Explore Branding"
                                    arrowText="See how we create brands"
                                />
                            </div>
                        </div>
                        <div className='BrandingImageContainer'>
                            <RevealImage
                                src="/Images/SectionImages/BrandingImage.png"
                                alt="Premium real estate branding and identity design services by The Bliss Solution agency in Gujarat"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <WhyRealStateBranding />
            <ServicesExplainComponent />
            <AdFilmsVideos />
            <MainLineCreatives />
            <AllClientsByCategories />

        </>
    )
}

export default AboutUs