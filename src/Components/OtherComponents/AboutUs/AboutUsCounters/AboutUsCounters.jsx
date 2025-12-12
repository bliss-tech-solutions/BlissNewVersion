import React from 'react'
import './AboutUsCounters.css'

const AboutUsCounters = () => {


    return (
        <div id='AboutUsCounters'>
            <div className='Container SectionLargeTopPadding PaddingBottomSection' id='AboutUsCountersGridSystem'>
                <div className='FirstRow'>
                    <div>
                        <div>
                            Real Estate Branding Agency
                        </div>
                        <div className='CounterValue'>
                            #1
                        </div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo explicabo repudiandae a maxime id et adipisci enim inventore quo architecto praesentium consequuntur commodi vero earum ex magni, minus excepturi ducimus.</p>
                    </div>
                    <div>
                        {/* <img src="" alt="DummyImage" /> */}
                    </div>
                </div>
                <div className='SecondRow'>
                    <div>
                        {/* <img src="" alt="DummyImage" /> */}
                    </div>
                    <div>
                        <div>
                            <div>
                                Years in the Industry
                            </div>
                            <div className='CounterValue'>
                                5+
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio veniam unde est, consequatur quos illo molestiae provident beatae eligendi reiciendis quam, possimus molestias fugiat minima maxime minus reprehenderit dicta itaque.</p>
                    </div>
                </div>
                <div className='ThirdRow'>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam cupiditate deserunt eaque, ipsum explicabo dolor aliquam voluptate fuga maiores.</p>
                    </div>
                    <div className='CounterValueContainer'>
                        <div>
                            <div>
                                Projects Delivered
                            </div>
                            <div className='CounterValue'>
                                500+
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <img src="" alt="DummyImage" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsCounters