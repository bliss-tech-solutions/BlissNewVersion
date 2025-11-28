import React,{useEffect} from 'react'
import CenteredHeader from '../../CommonUsedComponents/CenteredHeader/CenteredHeader'
import InteractiveButton from '../../CommonUsedComponents/InteractiveButton/InteractiveButton'
import './Branding.css'
import WhyRealStateBranding from '../WhyRealStateBranding/WhyRealStateBranding'
import ServicesExplainComponent from '../ServicesExplainComponent/ServicesExplainComponent'
import AllClientsByCategories from '../AllClientsByCategories/AllClientsByCategories'
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
                                heading="We design identities that instantly command premium valuation and investor trust."
                                description="We design delightful experiences that make life simpler and more enjoyable."
                            />
                            <div className="MarginTop60">
                                <InteractiveButton
                                    buttonText="Dummy Button"
                                    arrowText="Dummy Arrow Text"
                                />
                            </div>
                        </div>
                        <div className='BrandingImageContainer'>
                            <img 
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
            <AllClientsByCategories />
        </>
    )
}

export default AboutUs