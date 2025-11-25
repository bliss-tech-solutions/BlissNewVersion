import React from "react";
import "./HomePageSomeOfWork.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";
import HomePageSomeOfWorkData from "./HomePageSomeOfWorkData";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const HomePageSomeOfWork = () => {
    return (
        <div id="home-page-some-of-work">
            <div className="SectionLargeTopPadding">
                <div className="Container">
                    <CenteredHeader
                        heading="Some of Our Work"
                        description="We have worked with some of the best real estate brands in Gujarat. We have helped them to launch their projects and to sell out their inventory."
                    />
                </div>
                <div className="WorkSwiperContainer MarginTop60">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                            },
                            992: {
                                slidesPerView: 1.7,
                            },
                            1200: {
                                slidesPerView: 1.7,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="workSwiper"
                    >
                        {HomePageSomeOfWorkData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="WorkSlideCard">
                                    <div className="WorkSlideImageContainer">
                                        <img src={item.image || "https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/6889ad140c988deab69a716a_service-small5.webp"} alt={item.title} />
                                    </div>
                                    <div className="WorkSlideContent">
                                        <h3>{item.title}</h3>
                                        <div className="WorkSlideTags">
                                            {item.tags && item.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="WorkTag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="Container">
                    <div className="buttonContainerNavigation MarginTop60">
                        <div className="buttonContainer">
                            <button>
                                View all projects
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageSomeOfWork;