import React from "react";
import "./Footer.css";
import { Row, Col } from "antd";
import NavigationData from "../../NavigationBar/NavigationData";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="footer">
            <div className="Container SectionLargeTopPadding">
                <div className="FooterRowContainer">
                    <Row gutter={[20, 20]}>
                        <Col lg={6}>
                            <div className="FooterSocialMediaContainer">
                                <ul>
                                    <li>Instagram</li>
                                    <li>Facebook</li>
                                    <li>LinkedIn</li>
                                    <li>X</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="FooterListContainer">
                                <ul>
                                    {NavigationData.map((item) => (
                                        <li key={item?.id || item?.name}>
                                            <Link to={item?.path || "#"}>{item?.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div>

                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="FooterBottomContainer MarginTop30">
                    <div>
                        <img src="/Images/TBSLogos/BlissWhiteLogo.webp" alt="" />
                    </div> |
                    <p>© 2025 Branding Agency. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer