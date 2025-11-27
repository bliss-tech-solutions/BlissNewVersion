import React from 'react'
import CenteredHeader from '../../CommonUsedComponents/CenteredHeader/CenteredHeader'
import InteractiveButton from '../../CommonUsedComponents/InteractiveButton/InteractiveButton'
import './Branding.css'
import WhyRealStateBranding from '../WhyRealStateBranding/WhyRealStateBranding'
import ServicesExplainComponent from '../ServicesExplainComponent/ServicesExplainComponent'
import AllClientsByCategories from '../AllClientsByCategories/AllClientsByCategories'
const AboutUs = () => {
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
                        <div className='AboutUsRightSideGridSystem'>
                            <div>
                                <div>
                                    <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca55235fd8bbc19dbef3e_about-hero-image1.webp" alt="" />
                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                                <div>
                                    <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca55235fd8bbc19dbef3e_about-hero-image1.webp" alt="" />
                                </div>
                            </div>
                            <div>
                                <img src="/Images/TeamPhoto/AlokImage.jpg" alt="" />
                            </div>
                            <div>
                                <div>

                                </div>
                                <div>
                                    <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca55235fd8bbc19dbef3e_about-hero-image1.webp" alt="" />
                                </div>
                                <div>
                                    <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca55235fd8bbc19dbef3e_about-hero-image1.webp" alt="" />
                                </div>
                                <div>

                                </div>
                            </div>
                            <div>
                                <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca553ceece6ab5502d275_about-hero-image4.webp" alt="" />
                            </div>
                            <div>

                            </div>
                            <div>
                                <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca553f729022091570393_about-hero-image5.webp" alt="" />
                            </div>
                            <div>

                            </div>
                            <div>
                                <div>

                                </div>
                                <div>
                                    <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca55235fd8bbc19dbef3e_about-hero-image1.webp" alt="" />
                                </div>
                                <div>
                                    <img src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/688ca55235fd8bbc19dbef3e_about-hero-image1.webp" alt="" />
                                </div>
                                <div>

                                </div>
                            </div>
                            <div>

                            </div>
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