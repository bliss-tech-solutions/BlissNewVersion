import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const services = [
        { name: "Branding", path: "/branding" },
        { name: "Performance", path: "/performance" },
        { name: "Influence", path: "/influence" },
        { name: "Ad Films", path: "/branding" }
    ];

    const companyLinks = [
        { name: "Our Story", path: "/ourstory" },
        { name: "Our Work", path: "/ourwork" },
        { name: "Careers", path: "/career" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <div id="footer">
            <div className="Container SectionLargeTopPadding PaddingBottomSection">
                {/* Top Section - Grid Layout */}
                <div className="FooterTopSection">
                    <div className="FooterGrid">
                        {/* Company Branding & Social Media */}
                        <div className="FooterColumn">
                            <div className="FooterBranding">
                                <img 
                                    src="/Images/TBSLogos/BlissWhiteLogo.webp" 
                                    alt="The Bliss Solution logo" 
                                    className="FooterLogo"
                                    loading="lazy"
                                />
                                <h2 className="FooterCompanyName">The Bliss Solution</h2>
                            </div>
                            <div className="FooterSocialIcons">
                                <a href="https://www.facebook.com/theblisssolution" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                                <a href="https://www.linkedin.com/company/the-bliss-solution" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href="https://www.instagram.com/theblisssolution" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="FooterColumn">
                            <h3 className="FooterColumnTitle">Contact Info</h3>
                            <p className="FooterColumnDescription">
                                For quick and efficient communication, please use the provided contact details. We look forward to hearing from you.
                            </p>
                            <div className="FooterContactDetails">
                                <a href="mailto:hello@theblisssolution.com" className="FooterContactItem">
                                    hello@theblisssolution.com
                                </a>
                                <a href="mailto:info@theblisssolution.com" className="FooterContactItem">
                                    info@theblisssolution.com
                                </a>
                                <a href="tel:+917203917285" className="FooterContactItem">
                                    +91 72039 17285
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="FooterColumn">
                            <h3 className="FooterColumnTitle">Services</h3>
                            <ul className="FooterLinksList">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        <Link to={service.path}>{service.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="FooterColumn">
                            <h3 className="FooterColumnTitle">Company</h3>
                            <ul className="FooterLinksList">
                                {companyLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Middle Section - Address */}
                <div className="FooterMiddleSection">
                    <h3 className="FooterAddressTitle">Head Office (Ahmedabad)</h3>
                    <p className="FooterAddress">
                        Arista Business Space, 103 & 109, Sindhubhavan Rd, Bodakdev, Ahmedabad, Gujarat 380059
                    </p>
                </div>

                {/* Bottom Section - About & Copyright */}
                <div className="FooterBottomSection">
                    <div className="FooterAbout">
                        <p>
                            At The Bliss Solution, we are a results-driven real estate marketing agency committed to helping developers succeed online. 
                            As a leading real estate digital marketing agency, The Bliss Solution delivers high-impact digital marketing for real estate 
                            that includes everything from real estate social media marketing to strategic real estate lead generation. Recognized among 
                            the best digital marketing agencies for real estate, our team specializes in custom solutions tailored to your brand. 
                            Whether you're looking for a real estate marketing company or a full-service digital marketing agency for real estate, 
                            The Bliss Solution has you covered. Our real estate lead generation agency leverages the latest tools and trends to deliver 
                            real ROI. From digital marketing services for real estate to performance-driven campaigns. Choose The Bliss Solution—the 
                            best real estate digital marketing agency to grow your brand with expert Real Estate Digital Marketing solutions.
                        </p>
                    </div>
                    <div className="FooterCopyright">
                        <p>Copyright © 2025, All Right Reserved The Bliss Solution</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer