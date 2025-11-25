import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./NavigationBar.css";
import NavigationData from "./NavigationData";

const NavigationBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close drawer on route change
    useEffect(() => {
        setIsDrawerOpen(false);
        // Remove body scroll lock
        document.body.style.overflow = 'unset';
    }, [location.pathname]);

    // Toggle body scroll when drawer opens/closes
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isDrawerOpen]);

    const handleWhatsAppClick = () => {
        const phoneNumber = "918401849206"; // +91 84018 49206
        const message = `Hello! 👋

I'm interested in *The Bliss Solution's* services for:

📍 *Real Estate Branding*
📍 *Creative Design & Content*
📍 *Digital Marketing Solutions*
📍 *360° Branding Services*

Could you please share more details about your services and how we can work together?

Thank you!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <div id="navigation-bar" className={isScrolled ? 'scrolled' : ''}>
                <div className="NavigationBarContainer">
                    <div className="Container">
                        <div className="LogoContainer">
                            <img src="/Images/TBSLogos/BlissWhiteLogo.webp" alt="Bliss Logo" />
                        </div>
                        <div className="desktop-menu">
                            <ul className="nav-menu-div">
                                {NavigationData.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            to={item.path}
                                            className={`FadeParaColor ${location.pathname === item.path ? 'active' : ''}`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="buttonContainerNavigation">
                            <div className="buttonContainer desktop-whatsapp-btn">
                                <button onClick={handleWhatsAppClick}>
                                    WhatsApp <img src="/Images/Icons/whatsapp.svg" alt="WhatsApp" />
                                </button>
                            </div>
                            <div className="mobile-right-section">
                                <button className="mobile-whatsapp-btn" onClick={handleWhatsAppClick} aria-label="WhatsApp">
                                <img src="/Images/Icons/whatsapp.svg" alt="WhatsApp" />
                                </button>
                                <button 
                                    className={`hamburger-btn ${isDrawerOpen ? 'active' : ''}`} 
                                    onClick={toggleDrawer}
                                    aria-label="Menu"
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            <div 
                className={`drawer-backdrop ${isDrawerOpen ? 'active' : ''}`}
                onClick={toggleDrawer}
            ></div>

            {/* Drawer Menu */}
            <div className={`drawer-menu ${isDrawerOpen ? 'open' : ''}`}>
                <div className="drawer-content">
                    <div className="drawer-header">
                        <img src="/Images/TBSLogos/BlissWhiteLogo.webp" alt="Bliss Logo" />
                        <button 
                            className="drawer-close-btn" 
                            onClick={toggleDrawer}
                            aria-label="Close Menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <nav className="drawer-nav">
                        <ul>
                            {NavigationData.map((item, index) => (
                                <li 
                                    key={item.id} 
                                    className={`drawer-nav-item ${isDrawerOpen ? 'animate' : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <Link
                                        to={item.path}
                                        className={`${location.pathname === item.path ? 'active' : ''}`}
                                        onClick={() => setIsDrawerOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="drawer-footer">
                        <button className="drawer-whatsapp-btn" onClick={handleWhatsAppClick}>
                            <img src="/Images/Icons/whatsapp.svg" alt="WhatsApp" />
                            Contact us on WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigationBar;